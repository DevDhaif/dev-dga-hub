import type { Metadata } from 'next';
import { Compliance } from '@/components/compliance/Compliance';
import { languageAlternates } from '@/lib/seo';

const DESCRIPTION =
  'A public coverage matrix: every @dev-dga React component matched to its official Saudi DGA Platforms Code page, with a status. Covers Platforms Code components only. Independent, not affiliated with the DGA.';

export const metadata: Metadata = {
  title: 'Compliance & coverage',
  description: DESCRIPTION,
  keywords: [
    'DGA Platforms Code',
    'Saudi design system compliance',
    'DGA component coverage',
    'government design system React',
    'Platforms Code parity',
    'KSA design system',
  ],
  alternates: {
    canonical: '/compliance',
    languages: languageAlternates('/compliance'),
  },
  openGraph: {
    type: 'article',
    title: 'Compliance & coverage · dev-dga',
    description: DESCRIPTION,
    locale: 'en',
    alternateLocale: 'ar',
    url: '/compliance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compliance & coverage · dev-dga',
    description: DESCRIPTION,
  },
};

export default function CompliancePage() {
  return <Compliance />;
}
