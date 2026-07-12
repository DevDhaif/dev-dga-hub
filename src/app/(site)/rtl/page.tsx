import type { Metadata } from 'next';
import { ArabicRtl } from '@/components/rtl/ArabicRtl';
import { languageAlternates } from '@/lib/seo';

const DESCRIPTION =
  'Arabic and RTL done as a first language, not a dir toggle: Hijri / Umm al-Qura date pickers, abjad list counters, protected cursive letter-joining, inverted RTL keyboard semantics, logical-property mirroring, and bidi-safe Saudi data (National ID, IBAN, +966). Live, bilingual examples with copy-paste code.';

export const metadata: Metadata = {
  title: 'Arabic & RTL',
  description: DESCRIPTION,
  keywords: [
    'Arabic React components',
    'RTL React library',
    'Hijri date picker React',
    'Umm al-Qura calendar',
    'Saudi design system',
    'DGA Platforms Code',
    'bidi Saudi National ID IBAN',
    'right-to-left UI',
  ],
  alternates: { canonical: '/rtl', languages: languageAlternates('/rtl') },
  openGraph: {
    type: 'article',
    title: 'Arabic & RTL · dev-dga',
    description: DESCRIPTION,
    locale: 'en',
    alternateLocale: 'ar',
    url: '/rtl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic & RTL · dev-dga',
    description: DESCRIPTION,
  },
};

export default function RtlPage() {
  return <ArabicRtl />;
}
