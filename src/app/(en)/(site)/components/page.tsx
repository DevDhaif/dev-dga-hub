import type { Metadata } from 'next';
import { Gallery } from '@/components/showcase/Gallery';
import { COMPONENT_COUNT } from '@/lib/catalog';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: `${COMPONENT_COUNT} DGA React components`,
  description: `Browse all ${COMPONENT_COUNT} accessible, RTL-native React 19 components in the dev-dga design system - the React implementation of Saudi Arabia's DGA Platforms Code.`,
  ...pageSeo('/components', 'en'),
};

export default function ComponentsPage() {
  return (
    <div className="shell" style={{ paddingBlock: '3rem 4rem' }}>
      <Gallery />
    </div>
  );
}
