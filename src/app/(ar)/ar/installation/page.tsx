import type { Metadata } from 'next';
import { InstallationGuide } from '@/components/installation/InstallationGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'تثبيت مكتبة مكونات React لكود المنصات',
  description:
    'ثبّت dev-dga، وغلف تطبيقك بالمزود، ثم تحكم بكل رمز تصميم من طبقة واحدة من متغيرات CSS: اللوحة اللونية، الاستدارة، الخطوط، الوضع الداكن، واتجاه الكتابة.',
  ...pageSeo('/installation', 'ar'),
};

export default function ArInstallationPage() {
  return <InstallationGuide />;
}
