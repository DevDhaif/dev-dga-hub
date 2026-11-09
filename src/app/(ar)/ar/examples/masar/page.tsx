import type { Metadata } from 'next';
import { MasarDashboard } from '@/components/examples/MasarDashboard';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'مسار - لوحة تحكم نموذجية',
  description:
    'مسار: لوحة تحكم لخدمات حكومية، مبنية بالكامل من مكونات dev-dga، تعمل بالعربية والإنجليزية وفي الوضعين الفاتح والداكن.',
  ...pageSeo('/examples/masar', 'ar'),
};

export default function ArMasarPage() {
  return <MasarDashboard />;
}
