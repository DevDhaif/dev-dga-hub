import type { Metadata } from 'next';
import { FormsGuide } from '@/components/guides/FormsGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Forms with the DGA React components',
  description:
    'Every dev-dga form control submits through FormData: plain forms, Inertia <Form>, React Router actions, and Next.js server actions. What each control sends, multi-value names, server validation errors, and dates from the server.',
  ...pageSeo('/forms', 'en'),
};

export default function FormsPage() {
  return <FormsGuide />;
}
