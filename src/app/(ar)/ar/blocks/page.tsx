import type { Metadata } from 'next';
import { BlocksPage } from '@/components/blocks/BlocksPage';
import { pageAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'الكتل الجاهزة',
  description:
    'كتل واجهة جاهزة مبنيّة من مكوّنات dev-dga: لوحات إحصائية، وشاشات تسجيل دخول، وجداول بيانات، ونماذج. عاين كل كتلة حيّة في الوضعين الفاتح والداكن وبالعربية والإنجليزية، ثم انسخ الشيفرة.',
  alternates: pageAlternates('/blocks', 'ar'),
};

export default function ArBlocksPage() {
  return <BlocksPage />;
}
