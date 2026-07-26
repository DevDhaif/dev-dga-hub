import type { Metadata } from 'next';
import { InstallationGuide } from '@/components/installation/InstallationGuide';
import { pageAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'التثبيت',
  description:
    'ثبّت نظام dev-dga، وغلّف تطبيقك بالمزوّد، وتحكّم بكل رمز تصميم: اللوحة اللونية، ونصف القطر، والخطوط، والوضع الداكن، واتجاه الكتابة، من طبقة واحدة من متغيّرات CSS.',
  alternates: pageAlternates('/installation', 'ar'),
};

export default function ArInstallationPage() {
  return <InstallationGuide />;
}
