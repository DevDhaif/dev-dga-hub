export const LOCALIZED_PATHS = [
  '/',
  '/components',
  '/compliance',
  '/accessibility',
  '/rtl',
  '/installation',
  '/blocks',
  '/theme',
  '/examples/masar',
] as const;

const AR_PREFIX = /^\/ar(?=\/|$)/;

export function isArabicPath(pathname: string): boolean {
  return AR_PREFIX.test(pathname);
}

export function toArabicPath(enPath: string): string {
  return enPath === '/' ? '/ar' : `/ar${enPath}`;
}

export function toEnglishPath(arPath: string): string {
  const rest = arPath.replace(AR_PREFIX, '');
  return rest === '' ? '/' : rest;
}

export function isLocalizedPath(enPath: string): boolean {
  return (
    (LOCALIZED_PATHS as readonly string[]).includes(enPath) || enPath.startsWith('/components/')
  );
}

export function hasArabicCounterpart(pathname: string): boolean {
  return isLocalizedPath(isArabicPath(pathname) ? toEnglishPath(pathname) : pathname);
}

export function localizeHref(enPath: string, arabic: boolean): string {
  if (!arabic) return enPath;
  return isLocalizedPath(enPath) ? toArabicPath(enPath) : enPath;
}
