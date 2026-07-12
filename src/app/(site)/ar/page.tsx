import type { Metadata } from 'next';
import { Landing } from '@/components/landing/Landing';
import { languageAlternates } from '@/lib/seo';

const DESCRIPTION =
  'تطبيق React 19 مستقل لكود منصّات هيئة الحكومة الرقمية السعودية. عربي الاتجاه أصالةً، جاهز للوضع الداكن، ومتوافق مع WCAG 2.2 AA. غير تابع لهيئة الحكومة الرقمية الرسمية.';

export const metadata: Metadata = {
  title: { absolute: 'dev-dga · نظام التصميم الحكومي السعودي بمكوّنات React' },
  description: DESCRIPTION,
  keywords: [
    'نظام التصميم الحكومي',
    'كود المنصّات',
    'هيئة الحكومة الرقمية',
    'مكوّنات React عربية',
    'تصميم حكومي سعودي',
    'واجهات عربية RTL',
    'WCAG 2.2 AA',
    'منتقي تاريخ هجري',
  ],
  alternates: {
    canonical: '/ar',
    languages: languageAlternates('/'),
  },
  openGraph: {
    type: 'website',
    title: 'dev-dga · نظام التصميم الحكومي السعودي بمكوّنات React',
    description: DESCRIPTION,
    locale: 'ar',
    alternateLocale: 'en',
    url: '/ar',
  },
};

export default function ArHome() {
  return <Landing />;
}
