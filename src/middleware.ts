// import Negotiator from 'negotiator';
// import { match } from '@formatjs/intl-localematcher';
import { type NextRequest, NextResponse } from 'next/server';
import { i18n } from 'i18n-config';

const { defaultLocale, locales } = i18n;
// const cookieName = "i18nlang";

// function getLocale(request: NextRequest): string {
//   // Get locale from cookie
//   // if (request.cookies.has(cookieName))
//   //   return request.cookies.get(cookieName)!.value;

//   // Get accept language from HTTP headers
//   const acceptLang = request.headers.get('Accept-Language');

//   if (!acceptLang) return defaultLocale;

//   // Get match locale
//   const headers = { 'accept-language': acceptLang };
//   const languages = new Negotiator({ headers }).languages();
//   return match(languages, locales, defaultLocale);
// }

export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith('/_next')) return NextResponse.next();

  console.log('| ================> Middleware ================>');

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith(`/${defaultLocale}`) ||
    pathname === `${defaultLocale}`
  ) {
    // The incoming request is for /ru/something, so we'll reDIRECT to /something
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

  const pathnameIsMissingLocale = i18n.locales.every(
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
    // '/((?!_next).*)',
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',
    // Optional: only run on root (/) URL
    // '/',
  ],
};
