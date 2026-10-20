import type { Metadata } from 'next';
import { FormsGuide } from '@/components/guides/FormsGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'النماذج مع مكوّنات React لكود المنصّات',
  description:
    'كل عناصر النماذج في dev-dga تُرسَل عبر FormData: النماذج العادية و<Form> في Inertia وإجراءات React Router وإجراءات الخادم في Next.js. ما يرسله كل عنصر، وأسماء القيم المتعددة، وأخطاء التحقق من الخادم، والتواريخ القادمة من الخادم.',
  ...pageSeo('/forms', 'ar'),
};

export default function ArFormsPage() {
  return <FormsGuide />;
}
