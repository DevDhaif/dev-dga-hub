import { isLocalizedPath, toArabicPath } from './locale-routes';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dev-dga-hub.vercel.app'
).replace(/\/$/, '');

export function languageAlternates(enPath: string): Record<string, string> | undefined {
  if (!isLocalizedPath(enPath)) return undefined;
  return { en: enPath, ar: toArabicPath(enPath), 'x-default': enPath };
}

export function pageAlternates(enPath: string, locale: 'en' | 'ar') {
  return {
    canonical: locale === 'ar' ? toArabicPath(enPath) : enPath,
    languages: languageAlternates(enPath),
  };
}

export function absoluteUrl(path: string): string {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
