import type { Metadata } from 'next';
import { AdoptionGuide } from '@/components/guides/AdoptionGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'تبني مكونات React لكود المنصات في تطبيق قائم',
  description:
    'أدخل dev-dga إلى تطبيق Laravel أو Inertia أو Next.js: إعداد ملف الأنماط وطبقات CSS، تغليف الجذر بـ DgaProvider، اختيار المكونات لكل حاجة، تركيب روابط الموجه بـ asChild، وإرسال النماذج عبر FormData.',
  ...pageSeo('/adopt', 'ar'),
};

export default function ArAdoptPage() {
  return <AdoptionGuide />;
}
