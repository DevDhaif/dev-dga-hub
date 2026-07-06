import type { Metadata } from 'next';
import { MasarDashboard } from '@/components/examples/MasarDashboard';

export const metadata: Metadata = {
  title: 'Masar - example dashboard',
  description: 'A government services dashboard built entirely from dev-dga components.',
};

export default function MasarPage() {
  return <MasarDashboard />;
}
