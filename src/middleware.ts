import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { toEnglishPath, toGermanPath } from '@/lib/localeRoutes';

/* ------------------------------------------------------------------ */
/*  301 Redirects: Old URL structure → New URL structure               */
/* ------------------------------------------------------------------ */

// Old EN-specific root slugs that now live under /en/
const EN_ONLY_SLUGS = new Set([
  'contact',
  'about',
  'pricing',
  'event-photographer-hamburg',
  'conference-photographer-hamburg',
  'trade-show-photographer-hamburg',
  'corporate-event-photographer-hamburg',
]);

// Old one-off URLs → new URL (exact path match, checked before the /de rule)
const LEGACY_REDIRECTS: Record<string, string> = {
  '/conference-photography-hamburg': '/en/conference-photographer-hamburg',
  '/trade-show-photography-hamburg': '/en/trade-show-photographer-hamburg',
  '/corporate-event-photography-hamburg': '/en/corporate-event-photographer-hamburg',
  '/de/konferenzfotograf-hamburg': '/konferenzfotografie-hamburg',
  '/konferenzfotograf-hamburg': '/konferenzfotografie-hamburg',
  '/home': '/',
  '/kyiv': '/portfolio',
  '/portfolio/charity-event-kyiv': '/portfolio',
  '/en/portfolio/charity-event-kyiv': '/en/portfolio',
  '/corporate-photos': '/corporate-event-fotograf-hamburg',
};

export function middleware(request: NextRequest) {
  const { search } = request.nextUrl;
  let { pathname } = request.nextUrl;

  // Static files and API routes should not be processed
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  // Strip trailing slash first (except for bare /) to avoid a double redirect
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // --- 301 Redirects (old → new) ---

  // 0. Old one-off URLs
  const legacyTarget = LEGACY_REDIRECTS[pathname];
  if (legacyTarget) {
    const url = new URL(legacyTarget + search, request.url);
    return NextResponse.redirect(url, 301);
  }

  // 1. All old /de/* URLs → root (drop /de prefix)
  //    Use exact match + prefix-with-slash to avoid matching /delivery etc.
  if (pathname === '/de' || pathname.startsWith('/de/')) {
    const newPath = pathname === '/de' ? '/' : pathname.replace(/^\/de/, '');
    const url = new URL(newPath + search, request.url);
    return NextResponse.redirect(url, 301);
  }

  // 2. Old EN-specific root slugs → /en/*
  const firstSegment = pathname.split('/')[1];
  if (firstSegment && EN_ONLY_SLUGS.has(firstSegment)) {
    const url = new URL(`/en${pathname}${search}`, request.url);
    return NextResponse.redirect(url, 301);
  }

  // --- Cookie-based language preference ---
  //
  // Only redirect when the user has explicitly chosen a language via
  // the language switcher (which sets the site_lang cookie).
  // First-time visitors and crawlers (no cookie) always pass through
  // so that search engines can index both / (DE) and /en (EN).

  const siteLang = request.cookies.get('site_lang')?.value;

  // Translate the slug (e.g. /preise ↔ /en/pricing), not just add or drop /en
  const isEnglishPath = pathname === '/en' || pathname.startsWith('/en/');

  if (siteLang === 'en' && !isEnglishPath) {
    return NextResponse.redirect(new URL(toEnglishPath(pathname) + search, request.url));
  }

  if (siteLang === 'de' && isEnglishPath) {
    return NextResponse.redirect(new URL(toGermanPath(pathname) + search, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
