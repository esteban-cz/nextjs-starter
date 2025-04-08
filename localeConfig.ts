export const locales = ["cs", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = locales[0];
