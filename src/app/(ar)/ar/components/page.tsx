import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Gallery } from '@/components/showcase/Gallery';
import { COMPONENT_COUNT } from '@/lib/catalog';
import { pageAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'المكوّنات',
  description: `تصفّح ${COMPONENT_COUNT} مكوّن React 19 متاح الوصول وعربي الاتجاه في نظام dev-dga، التطبيق البرمجي لكود منصّات هيئة الحكومة الرقمية السعودية.`,
  alternates: pageAlternates('/components', 'ar'),
};

export default function ArComponentsPage() {
  return (
    <div className="shell" style={{ paddingBlock: '3rem 4rem' }}>
      <Suspense>
        <Gallery />
      </Suspense>
    </div>
  );
}
