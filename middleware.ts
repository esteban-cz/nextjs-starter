import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "cs"];
const defaultLocale = "cs";

function getLocale(request: {
  headers: Iterable<readonly [PropertyKey, any]>;
}) {
  const headersObj = Object.fromEntries(request.headers);
  const languages = new Negotiator({ headers: headersObj }).languages();
  const matchedLocale = match(languages, locales, defaultLocale);
  console.log("Matched locale:", matchedLocale);
  return matchedLocale;
}

export function middleware(request: {
  nextUrl: { clone?: any; pathname?: any };
  headers: Iterable<readonly [PropertyKey, any]>;
}) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale({ headers: request.headers });

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|icon.png|sitemap.xml|robots.txt|opengraph-image.jpeg|twitter-image.jpeg|img|lang).*)",
  ],
};
