import type { Metadata } from 'next';
import { MasarDashboard } from '@/components/examples/MasarDashboard';
import { pageAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Masar - example dashboard',
  description:
    'Masar - a bilingual government services dashboard built entirely from dev-dga components, in Arabic and English, light and dark.',
  alternates: pageAlternates('/examples/masar', 'en'),
};

export default function MasarPage() {
  return <MasarDashboard />;
}
