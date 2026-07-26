import type { Metadata } from 'next';
import { ThemeStudio } from '@/components/theme/ThemeStudio';
import { pageAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'استوديو السمات',
  description:
    'تحكّم كامل بكل رموز تصميم @dev-dga. عدّل متغيّرات --ddga-* حيّة: الألوان والتدرّجات ونصف القطر والتباعد والخطوط والظلال، وعاين النتيجة عبر المكوّنات في الوضعين الفاتح والداكن وبالعربية والإنجليزية، ثم انسخ الـ CSS.',
  alternates: pageAlternates('/theme', 'ar'),
};

export default function ArThemePage() {
  return <ThemeStudio />;
}
