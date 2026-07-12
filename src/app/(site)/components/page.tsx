import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Gallery } from '@/components/showcase/Gallery';
import { COMPONENT_COUNT } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Components',
  description: `Browse all ${COMPONENT_COUNT} accessible, RTL-native React 19 components in the dev-dga design system - the React implementation of Saudi Arabia's DGA Platforms Code.`,
  alternates: { canonical: '/components' },
};

export default function ComponentsPage() {
  return (
    <div className="shell" style={{ paddingBlock: '3rem 4rem' }}>
      <Suspense>
        <Gallery />
      </Suspense>
    </div>
  );
}
