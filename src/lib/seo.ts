export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dev-dga-hub.vercel.app'
).replace(/\/$/, '');

export function languageAlternates(path: string): Record<string, string> {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  const ar = clean === '' ? '/ar' : `/ar${clean}`;
  return {
    en: clean === '' ? '/' : clean,
    ar,
    'x-default': clean === '' ? '/' : clean,
  };
}

export function absoluteUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
