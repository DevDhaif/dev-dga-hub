import type { Metadata } from 'next';
import { ThemeStudio } from '@/components/theme/ThemeStudio';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'DGA design tokens and theme studio',
  description:
    'Full control over every @dev-dga design token. Edit all 188 --ddga-* variables live - colors, scales, radius, spacing, typography, shadows - preview across components in light/dark and Arabic/English, then copy the CSS.',
  ...pageSeo('/theme', 'en'),
};

export default function Page() {
  return <ThemeStudio />;
}
