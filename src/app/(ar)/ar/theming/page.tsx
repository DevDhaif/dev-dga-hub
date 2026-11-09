import type { Metadata } from 'next';
import { ThemingGuide } from '@/components/guides/ThemingGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'تخصيص ألوان مكوّنات React لكود المنصّات بلون جهتك',
  description:
    'خصّص هوية جهة حكومية بكتلة CSS واحدة: لون واحد يملأ درجات --ddga-brand-* الاثنتي عشرة عبر color-mix()، والوضع الفاتح يستخدم الدرجة 600 والداكن الدرجة 400. تباين النص على الأزرار الرئيسة، وخاصية theme في DgaProvider، وbuildTheme، وما تغيّر في 1.6.0.',
  ...pageSeo('/theming', 'ar'),
};

export default function ArThemingPage() {
  return <ThemingGuide />;
}
