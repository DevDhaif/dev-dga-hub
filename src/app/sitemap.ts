import type { MetadataRoute } from 'next';
import { ALL_COMPONENTS } from '@/lib/catalog';
import { absoluteUrl } from '@/lib/seo';
import { LOCALIZED_PATHS, toArabicPath } from '@/lib/locale-routes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const englishPaths = [
    ...LOCALIZED_PATHS,
    ...ALL_COMPONENTS.map((c) => `/components/${c.slug}`),
  ];

  return englishPaths.flatMap((path) => {
    const languages = {
      en: absoluteUrl(path),
      ar: absoluteUrl(toArabicPath(path)),
      'x-default': absoluteUrl(path),
    };
    return [
      { url: absoluteUrl(path), alternates: { languages } },
      { url: absoluteUrl(toArabicPath(path)), alternates: { languages } },
    ];
  });
}
