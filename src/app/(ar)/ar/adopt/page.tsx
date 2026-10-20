import type { Metadata } from 'next';
import { AdoptionGuide } from '@/components/guides/AdoptionGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'تبنّي مكوّنات React لكود المنصّات في تطبيق قائم',
  description:
    'أدخِل dev-dga إلى تطبيق Laravel أو Inertia أو Next.js: أعدّ ملف الأنماط وطبقات CSS، وغلّف الجذر بـ DgaProvider، واختر المكوّنات لكل حاجة، وركّب روابط الموجّه بـ asChild، وأرسل النماذج عبر FormData.',
  ...pageSeo('/adopt', 'ar'),
};

export default function ArAdoptPage() {
  return <AdoptionGuide />;
}
