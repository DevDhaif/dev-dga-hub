import type { Metadata } from 'next';
import { ThemingGuide } from '@/components/guides/ThemingGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'تخصيص ألوان مكونات React لكود المنصات بلون جهتك',
  description:
    'خصص هوية جهة حكومية بكتلة CSS واحدة: لون واحد يملأ 12 درجة من --ddga-brand-* عبر color-mix(). تستخدم التعبئات الدرجة 600 في الوضعين، ويستخدم نص العلامة الدرجة 400 في الوضع الداكن. وتشرح الصفحة تباين النص على الأزرار الرئيسة، خاصية theme في DgaProvider، buildTheme، والترقية إلى الإصدار 1.7.0.',
  ...pageSeo('/theming', 'ar'),
};

export default function ArThemingPage() {
  return <ThemingGuide />;
}
