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

export default function sitemap(): MetadataRoute.Sitemap {
  const componentPaths = ALL_COMPONENTS.map((c) => `/components/${c.slug}`);
  const arabicPaths = LOCALIZED_PATHS.map(toArabicPath);
  return [...STATIC_PATHS, ...arabicPaths, ...componentPaths].map((path) => ({
    url: absoluteUrl(path),
  }));
}
