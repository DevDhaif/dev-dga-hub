import type { MetadataRoute } from 'next';
import { ALL_COMPONENTS } from '@/lib/catalog';
import { absoluteUrl } from '@/lib/seo';
import { LOCALIZED_PATHS, toArabicPath } from '@/lib/locale-routes';

export const dynamic = 'force-static';

const STATIC_PATHS = [
  '/',
  '/components',
  '/compliance',
  '/accessibility',
  '/rtl',
  '/installation',
  '/blocks',
  '/theme',
  '/examples/masar',
];

function priorityFor(path: string): number {
  if (path === '/' || path === '/ar') return 1;
  if (path === '/compliance' || path === '/accessibility' || path === '/rtl') return 0.9;
  if (path.startsWith('/ar/')) return 0.9;
  if (path.startsWith('/components/')) return 0.6;
  return 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const componentPaths = ALL_COMPONENTS.map((c) => `/components/${c.slug}`);
  const arabicPaths = LOCALIZED_PATHS.map(toArabicPath);
  return [...STATIC_PATHS, ...arabicPaths, ...componentPaths].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: 'monthly',
    priority: priorityFor(path),
  }));
}
