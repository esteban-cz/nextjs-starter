import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { locales, defaultLocale } from "@/localeConfig";

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

  const headersMap = new Map(request.headers);
  const userAgent = headersMap.get("user-agent") || "";
  const isBot =
    /bot|crawler|spider|google|bing|yahoo|telegram|linkedin|twitter|googlebot|bingbot|slurp|duckduckbot|baiduspider|facebookexternalhit|twitterbot|linkedinbot|embedly|pinterest|slackbot|vkShare|telegrambot/i.test(
      userAgent,
    );

  if (pathname === "/" && isBot) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
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
    "/((?!_next/static|_next/image|icon.svg|sitemap.xml|robots.txt|opengraph-image.jpeg|twitter-image.jpeg|img|lang).*)",
  ],
};
