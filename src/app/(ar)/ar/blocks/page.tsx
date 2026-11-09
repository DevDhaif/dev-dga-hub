import type { Metadata } from 'next';
import { BlocksPage } from '@/components/blocks/BlocksPage';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'كتل واجهة جاهزة لكود المنصات',
  description:
    'كتل واجهة جاهزة مبنية من مكونات dev-dga: لوحات إحصائية، شاشات تسجيل دخول، جداول بيانات، ونماذج. عاين كل كتلة حية في الوضعين الفاتح والداكن وبالعربية والإنجليزية، ثم انسخ الكود.',
  ...pageSeo('/blocks', 'ar'),
};

export default function ArBlocksPage() {
  return <BlocksPage />;
}
