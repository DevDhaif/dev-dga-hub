import type { Metadata } from 'next';
import { Gallery } from '@/components/showcase/Gallery';
import { COMPONENT_COUNT } from '@/lib/catalog';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: `${COMPONENT_COUNT} مكوّن React لكود المنصّات`,
  description: `تصفّح ${COMPONENT_COUNT} مكوّن React 19 متاح الوصول وعربي الاتجاه في نظام dev-dga، التطبيق البرمجي لكود منصّات هيئة الحكومة الرقمية السعودية.`,
  ...pageSeo('/components', 'ar'),
};

export default function ArComponentsPage() {
  return (
    <div className="shell" style={{ paddingBlock: '3rem 4rem' }}>
      <Gallery />
    </div>
  );
}
