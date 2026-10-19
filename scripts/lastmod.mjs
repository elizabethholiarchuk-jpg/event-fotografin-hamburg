// Keeps src/data/lastmod.json up to date: for every prerendered page, the date its
// content last changed. The sitemap uses these dates as <lastmod>.
//
// Runs after `npm run build` (postbuild). It hashes each page's built HTML (text,
// links, meta tags and JSON-LD; without scripts, CSS class names and asset hashes)
// and sets the date to today only when the hash differs from the stored one.
//
// The sitemap reads the file during the build, so a change shows up in the sitemap
// of the next build. On Vercel that is the committed file: build locally before
// committing (CLAUDE.md asks for that anyway) and commit lastmod.json with the change.
// On Vercel itself (VERCEL=1) the script does nothing.

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

if (process.env.VERCEL) process.exit(0);

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, ".next/server/app");
const OUT = path.join(ROOT, "src/data/lastmod.json");
const SKIP = new Set(["/_not-found", "/_global-error", "/danke", "/en/danke"]);

function findHtml(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return findHtml(full);
    return entry.name.endsWith(".html") ? [full] : [];
  });
}

function urlPath(file) {
  const rel = path.relative(APP_DIR, file).replace(/\\/g, "/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
}

/** The page content without build-specific noise. */
function normalize(html) {
  return html
    .replace(/<script\b(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*\/_next\/[^>]*>/gi, "")
    .replace(/\/_next\/static\/[^"'\s)]+/g, "")
    .replace(/\s(class|style|data-[\w-]+)="[^"]*"/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\s+/g, " ");
}

if (!fs.existsSync(APP_DIR)) {
  console.log("[lastmod] no build output found — skipped");
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const previous = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : {};
const next = {};
const changed = [];

for (const file of findHtml(APP_DIR).sort()) {
  const url = urlPath(file);
  if (SKIP.has(url)) continue;
  const hash = crypto.createHash("sha256").update(normalize(fs.readFileSync(file, "utf8"))).digest("hex").slice(0, 16);
  const old = previous[url];
  if (old && old.hash === hash) {
    next[url] = old;
  } else {
    next[url] = { date: today, hash };
    changed.push(url);
  }
}

fs.writeFileSync(OUT, JSON.stringify(next, null, 2) + "\n");
console.log(`[lastmod] ${Object.keys(next).length} pages, ${changed.length} changed${changed.length ? ": " + changed.join(", ") : ""}`);
