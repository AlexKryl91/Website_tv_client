import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

function setDefaultLocale(request: NextRequest) {
  // Get accept language from HTTP headers
  const acceptLang = request.headers.get('Accept-Language');

  if (!acceptLang) return 'ru';

  // Get match locale
  const ruCountryRegex = /(ru|az|am|by|ge|kz|kg|md|tj|tm|uz|ua)/gi;

  const headers = { 'accept-language': acceptLang };
  const languages = new Negotiator({ headers }).languages();

  return languages[0].match(ruCountryRegex) ? 'ru' : 'en';
}

export function middleware(request: NextRequest) {
  // console.log('| ================> Middleware ================>');
  // const { device } = userAgent(request);
  // console.log(device);

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const defaultLocale = setDefaultLocale(request);
  const locales = ['ru', 'en'];

  const pathnameHasDefaultLocale =
    pathname.startsWith(`/${defaultLocale}`) || pathname === `${defaultLocale}`;

  if (pathnameHasDefaultLocale) {
    // The incoming request is for "/ru/something", so we'll redirect to "/something"
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocale}`,
          pathname === `/${defaultLocale}` ? '/' : ''
        ),
        request.url
      )
    );
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Now for EITHER /ru or /en (for example) we're going to tell Next.js that the request is for /ru/something
    // or /en/something, and then reWRITE the request to that it is handled properly.

    return NextResponse.rewrite(
      new URL(
        `/${defaultLocale}${pathname}${request.nextUrl.search}`,
        request.nextUrl.href
      )
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',
  ],
};
