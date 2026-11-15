import type { Metadata } from 'next';
import { ThemingGuide } from '@/components/guides/ThemingGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Theming the DGA React components with your brand color',
  description:
    'Brand a government entity in one CSS block: one color fills all 12 --ddga-brand-* steps with color-mix(). Fills use step 600 in both modes, and brand text uses step 400 in dark mode. Text contrast on primary buttons, DgaProvider theme, buildTheme, and upgrading to 1.7.0.',
  ...pageSeo('/theming', 'en'),
};

export default function ThemingPage() {
  return <ThemingGuide />;
}
