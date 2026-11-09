import type { Metadata } from 'next';
import { Landing } from '@/components/landing/Landing';
import { pageAlternates, serializeJsonLd } from '@/lib/seo';
import { faqJsonLd } from '@/lib/faq';

const DESCRIPTION =
  'مكتبة واجهات مستقلة برخصة MIT تطبق كود منصات هيئة الحكومة الرقمية بمكونات React 19 متاحة الوصول. وهي مبنية للعربية والاتجاه من اليمين إلى اليسار من الأساس، وتدعم الوضع الداكن، وتتوافق مع WCAG 2.2 AA. غير تابعة للهيئة الرسمية.';

export const metadata: Metadata = {
  title: { absolute: 'مكونات React لكود المنصات · مكتبة واجهات حكومية سعودية' },
  description: DESCRIPTION,
  keywords: [
    'مكونات React لكود المنصات',
    'مكتبة مكونات حكومية',
    'مكونات واجهة سعودية',
    'نظام التصميم الحكومي',
    'كود المنصات',
    'هيئة الحكومة الرقمية',
    'مكونات React عربية',
    'تصميم حكومي سعودي',
    'واجهات عربية RTL',
    'WCAG 2.2 AA',
    'منتقي تاريخ هجري',
  ],
  alternates: pageAlternates('/', 'ar'),
  openGraph: {
    type: 'website',
    title: 'مكونات React لكود المنصات · مكتبة واجهات حكومية سعودية',
    description: DESCRIPTION,
    locale: 'ar',
    alternateLocale: 'en',
    url: '/ar',
  },
};

export default function ArHome() {
  return (
    <>
      {/* FAQPage: matches the visible questions rendered by <Faq />. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd('ar')) }}
      />
      <Landing />
    </>
  );
}
