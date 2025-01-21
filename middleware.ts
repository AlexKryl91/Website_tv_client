import { defaultLocale } from '@/locales/locales-config';
import { i18n } from 'i18n-config';
import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
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
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/',
  ],
};
