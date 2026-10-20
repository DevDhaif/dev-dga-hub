import type { Metadata } from 'next';
import { AdoptionGuide } from '@/components/guides/AdoptionGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Adopt the DGA React components in an existing app',
  description:
    'Bring dev-dga into a Laravel, Inertia, or Next.js app: set up the stylesheet and cascade layers, wrap the root in DgaProvider, pick components for each need, compose router links with asChild, and submit forms through FormData.',
  ...pageSeo('/adopt', 'en'),
};

export default function AdoptPage() {
  return <AdoptionGuide />;
}
