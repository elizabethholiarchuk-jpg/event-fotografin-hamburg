// Sends URLs from the live sitemap to IndexNow (Bing; Bing shares them with the
// other IndexNow search engines).
//
//   npm run indexnow                          all URLs from the sitemap
//   npm run indexnow -- --since 2026-10-19    only URLs with <lastmod> on or after that date
//   npm run indexnow -- --dry-run             only print the URLs
//
// After every production deploy on Vercel, .github/workflows/indexnow.yml runs this
// with --since = date of the previously deployed commit.

const HOST = "www.event-fotografin-hamburg.de";
const KEY = "8e90718dd9839331aa67da0df13e0a20"; // file public/<KEY>.txt holds the same key
const ENDPOINT = "https://www.bing.com/indexnow";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const sinceIndex = args.indexOf("--since");
const since = sinceIndex >= 0 ? args[sinceIndex + 1] : null;
if (sinceIndex >= 0 && !/^\d{4}-\d{2}-\d{2}$/.test(since ?? "")) {
  console.error("--since needs a date like 2026-10-19");
  process.exit(1);
}

const res = await fetch(`https://${HOST}/sitemap.xml`, { cache: "no-store" });
if (!res.ok) {
  console.error(`Could not load sitemap: HTTP ${res.status}`);
  process.exit(1);
}
const xml = await res.text();

const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, block]) => ({
  loc: block.match(/<loc>([^<]+)<\/loc>/)?.[1],
  lastmod: block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.slice(0, 10),
}));

const urls = entries
  .filter((e) => e.loc && (!since || (e.lastmod && e.lastmod >= since)))
  .map((e) => e.loc);

console.log(`${urls.length} of ${entries.length} URLs${since ? ` changed since ${since}` : ""}`);
urls.forEach((u) => console.log(`  ${u}`));

if (urls.length === 0 || dryRun) process.exit(0);

const submit = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

// 200 = OK, 202 = accepted (key check pending); anything else is an error
console.log(`IndexNow: HTTP ${submit.status} ${await submit.text()}`);
if (submit.status !== 200 && submit.status !== 202) process.exit(1);
