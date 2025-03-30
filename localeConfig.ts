export const locales = ["cs", "en"] as const;
export type Locale = (typeof locales)[number];
