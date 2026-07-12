import type { Metadata } from 'next';
import { Accessibility } from '@/components/accessibility/Accessibility';
import { languageAlternates } from '@/lib/seo';

const DESCRIPTION =
  'بيان توافق WCAG 2.2 AA العلني لمكتبة @dev-dga: ما ندعمه، وكيف نختبره (axe-core و Playwright)، وما يبقى على عاتقك. تقييم ذاتي لا تدقيق خارجي، وتباين الألوان مصمّم للحدود لا مقيس.';

export const metadata: Metadata = {
  title: 'إمكانية الوصول',
  description: DESCRIPTION,
  keywords: [
    'WCAG 2.2 AA',
    'مكوّنات React قابلة للوصول',
    'بيان إمكانية الوصول',
    'إمكانية وصول نظام تصميم سعودي',
    'إمكانية الوصول بالعربية و RTL',
  ],
  alternates: {
    canonical: '/ar/accessibility',
    languages: languageAlternates('/accessibility'),
  },
  openGraph: {
    type: 'article',
    title: 'إمكانية الوصول · dev-dga',
    description: DESCRIPTION,
    locale: 'ar',
    alternateLocale: 'en',
    url: '/ar/accessibility',
  },
};

export default function ArAccessibility() {
  return <Accessibility />;
}
