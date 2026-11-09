import type { Metadata } from 'next';
import { ThemingGuide } from '@/components/guides/ThemingGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'تخصيص ألوان مكونات React لكود المنصات بلون جهتك',
  description:
    'خصص هوية جهة حكومية بكتلة CSS واحدة: لون واحد يملأ 12 درجة من --ddga-brand-* عبر color-mix(). يستخدم الوضع الفاتح الدرجة 600، بينما يستخدم الداكن الدرجة 400. وتشرح الصفحة تباين النص على الأزرار الرئيسة، خاصية theme في DgaProvider، buildTheme، وما تغير في الإصدار 1.6.0.',
  ...pageSeo('/theming', 'ar'),
};

export default function ArThemingPage() {
  return <ThemingGuide />;
}
