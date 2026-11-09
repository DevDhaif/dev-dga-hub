import type { Metadata } from 'next';
import { ThemeStudio } from '@/components/theme/ThemeStudio';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'رموز تصميم كود المنصات واستوديو السمات',
  description:
    'تحكم بكل رموز تصميم @dev-dga، وعدّل متغيرات --ddga-* مباشرة: الألوان، التدرجات، الاستدارة، المسافات، الخطوط، والظلال. عاين النتيجة على المكونات في الوضعين الفاتح والداكن وبالعربية والإنجليزية، ثم انسخ الCSS.',
  ...pageSeo('/theme', 'ar'),
};

export default function ArThemePage() {
  return <ThemeStudio />;
}
