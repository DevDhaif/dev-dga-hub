import type { Metadata } from 'next';
import { FormsGuide } from '@/components/guides/FormsGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'النماذج في مكونات React لكود المنصات',
  description:
    'ترسل كل عناصر النماذج في dev-dga قيمها عبر FormData، وتعمل مع النماذج العادية، <Form> في Inertia، إجراءات React Router، وإجراءات الخادم في Next.js. تشرح الصفحة ما يرسله كل عنصر، أسماء القيم المتعددة، أخطاء التحقق من الخادم، والتواريخ القادمة من الخادم.',
  ...pageSeo('/forms', 'ar'),
};

export default function ArFormsPage() {
  return <FormsGuide />;
}
