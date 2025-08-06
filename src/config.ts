export type Locale = (typeof locales)[number]

export const locales = ["en", "es", "pt-BR"] as const;
export const defaultLocale: Locale = "es";