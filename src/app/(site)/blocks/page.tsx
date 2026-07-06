import type { Metadata } from 'next';
import { BlocksPage } from '@/components/blocks/BlocksPage';

export const metadata: Metadata = {
  title: 'Blocks',
  description:
    'Prebuilt UI blocks composed from dev-dga components - stats overviews, sign-in panels, data tables, and forms. Preview each live in light/dark and Arabic/English, then copy the code.',
};

export default function Page() {
  return <BlocksPage />;
}
