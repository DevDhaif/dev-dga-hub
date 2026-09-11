import type { Metadata } from 'next';
import { BlocksPage } from '@/components/blocks/BlocksPage';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Prebuilt DGA UI blocks for React',
  description:
    'Prebuilt UI blocks composed from dev-dga components - stats overviews, sign-in panels, data tables, and forms. Preview each live in light/dark and Arabic/English, then copy the code.',
  ...pageSeo('/blocks', 'en'),
};

export default function Page() {
  return <BlocksPage />;
}
