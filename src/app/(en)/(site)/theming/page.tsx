import type { Metadata } from 'next';
import { ThemingGuide } from '@/components/guides/ThemingGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Theming the DGA React components with your brand color',
  description:
    'Brand a government entity in one CSS block: one color fills all 12 --ddga-brand-* steps with color-mix(), light mode uses step 600 and dark mode step 400. Text contrast on primary buttons, DgaProvider theme, buildTheme, and what changed in 1.6.0.',
  ...pageSeo('/theming', 'en'),
};

export default function ThemingPage() {
  return <ThemingGuide />;
}
