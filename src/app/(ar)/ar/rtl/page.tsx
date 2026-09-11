import type { Metadata } from 'next';
import { ArabicRtl } from '@/components/rtl/ArabicRtl';
import { pageAlternates } from '@/lib/seo';

const DESCRIPTION =
  'العربية والاتجاه من اليمين إلى اليسار لغةً أولى، لا مجرّد خاصية dir: تقويم هجري / أم القرى، وترقيم عربي للقوائم، واتصال حروف محمي، ودلالات لوحة مفاتيح منعكسة، وبيانات سعودية سليمة الاتجاه (الهوية، الآيبان، +966). أمثلة حيّة ثنائية اللغة.';

export const metadata: Metadata = {
  title: 'مكوّنات React عربية واتجاه RTL',
  description: DESCRIPTION,
  keywords: [
    'مكوّنات React عربية',
    'مكتبة RTL',
    'منتقي تاريخ هجري',
    'تقويم أم القرى',
    'نظام تصميم سعودي',
    'كود المنصّات',
    'واجهات من اليمين إلى اليسار',
  ],
  alternates: pageAlternates('/rtl', 'ar'),
  openGraph: {
    type: 'article',
    title: 'العربية والاتجاه · dev-dga',
    description: DESCRIPTION,
    locale: 'ar',
    alternateLocale: 'en',
    url: '/ar/rtl',
  },
};

export default function ArRtl() {
  return <ArabicRtl />;
}
