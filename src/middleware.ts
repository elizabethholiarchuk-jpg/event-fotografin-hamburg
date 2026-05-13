import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static files and API routes should not be redirected
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  // Check for explicit language cookie
  const siteLang = request.cookies.get('site_lang')?.value;

  // If user has explicitly chosen German, but visits the English root pages
  if (siteLang === 'de' && !pathname.startsWith('/de')) {
    // Redirect to German equivalent
    const targetPath = pathname === '/' ? '/de' : `/de${pathname}`;
    return NextResponse.redirect(new URL(targetPath, request.url));
  }

  // If user has explicitly chosen English, but visits the German pages
  if (siteLang === 'en' && pathname.startsWith('/de')) {
    // Redirect to English equivalent
    const targetPath = pathname === '/de' ? '/' : pathname.replace(/^\/de/, '');
    return NextResponse.redirect(new URL(targetPath, request.url));
  }

  // Default behavior if no cookie is set:
  // We don't automatically redirect based on Accept-Language to allow search engines
  // to index both root (English) and /de (German). We show a language prompt instead.

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
