import type { Metadata } from 'next';
import { Compliance } from '@/components/compliance/Compliance';
import { languageAlternates } from '@/lib/seo';

const DESCRIPTION =
  'جدول تغطية عام يربط كل مكوّن من @dev-dga بصفحته الرسمية في كود منصّات هيئة الحكومة الرقمية السعودية، مع حالته: مطابق أو جزئي أو إضافة. مستقل، وغير تابع للهيئة.';

export const metadata: Metadata = {
  title: 'التوافق مع كود المنصّات',
  description: DESCRIPTION,
  keywords: [
    'كود المنصّات',
    'توافق نظام التصميم الحكومي',
    'تغطية مكوّنات الهيئة',
    'نظام تصميم حكومي React',
    'تصميم حكومي سعودي',
  ],
  alternates: {
    canonical: '/ar/compliance',
    languages: languageAlternates('/compliance'),
  },
  openGraph: {
    type: 'article',
    title: 'التوافق مع كود المنصّات · dev-dga',
    description: DESCRIPTION,
    locale: 'ar',
    alternateLocale: 'en',
    url: '/ar/compliance',
  },
};

export default function ArCompliance() {
  return <Compliance />;
}
