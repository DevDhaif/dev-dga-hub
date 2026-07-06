import type { Metadata } from 'next';
import { ThemeStudio } from '@/components/theme/ThemeStudio';

export const metadata: Metadata = {
  title: 'Theme Studio',
  description:
    'Full control over every @dev-dga design token. Edit all 188 --ddga-* variables live - colors, scales, radius, spacing, typography, shadows - preview across components in light/dark and Arabic/English, then copy the CSS.',
};

export default function Page() {
  return <ThemeStudio />;
}
