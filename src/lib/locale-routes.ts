export const LOCALIZED_PATHS = ['/', '/compliance', '/accessibility', '/rtl'] as const;

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

export function hasArabicCounterpart(pathname: string): boolean {
  const enPath = isArabicPath(pathname) ? toEnglishPath(pathname) : pathname;
  return (LOCALIZED_PATHS as readonly string[]).includes(enPath);
}

export function otherLocalePath(pathname: string): string | null {
  if (!hasArabicCounterpart(pathname)) return null;
  return isArabicPath(pathname) ? toEnglishPath(pathname) : toArabicPath(pathname);
}

export function localizeHref(enPath: string, arabic: boolean): string {
  if (!arabic) return enPath;
  return (LOCALIZED_PATHS as readonly string[]).includes(enPath) ? toArabicPath(enPath) : enPath;
}
