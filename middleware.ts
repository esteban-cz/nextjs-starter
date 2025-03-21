import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export function middleware(request: {
  headers: Iterable<readonly [PropertyKey, any]>;
}) {
  const headersObj = Object.fromEntries(request.headers);
  const languages = new Negotiator({ headers: headersObj }).languages();
  const locales = ["en-US", "cs-CZ"];
  const defaultLocale = "cs-CZ";

  console.log("\x1b[1m---\x1b[0m");
  console.log("\x1b[33m   Negotiator languages:", languages);
  console.log("   Supported locales:", locales);
  console.log("   Default locale:", defaultLocale);

  try {
    const matchedLocale = match(languages, locales, defaultLocale);
    console.log("\x1b[32m   Matched locale:", matchedLocale, "\x1b[0m");
  } catch (error) {
    console.error("\x1b[31m   Error matching locale:", error, "\x1b[0m");
  }

  return NextResponse.next();
}
