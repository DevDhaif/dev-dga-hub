import type { Metadata } from 'next';
import { Accessibility } from '@/components/accessibility/Accessibility';
import { languageAlternates } from '@/lib/seo';

const DESCRIPTION =
  'The public WCAG 2.2 AA accessibility statement for the @dev-dga design system: what we support, how we test it (axe-core + Playwright), and what stays your responsibility. Self-assessed, not third-party audited; color contrast is designed to the thresholds, not measured.';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: DESCRIPTION,
  keywords: [
    'WCAG 2.2 AA',
    'accessible React components',
    'accessibility statement',
    'Saudi design system accessibility',
    'RTL Arabic accessibility',
    'DGA Platforms Code accessibility',
    'ARIA React library',
  ],
  alternates: {
    canonical: '/accessibility',
    languages: languageAlternates('/accessibility'),
  },
  openGraph: {
    type: 'article',
    title: 'Accessibility · dev-dga',
    description: DESCRIPTION,
    locale: 'en',
    alternateLocale: 'ar',
    url: '/accessibility',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessibility · dev-dga',
    description: DESCRIPTION,
  },
};

export default function AccessibilityPage() {
  return <Accessibility />;
}
