import type { Metadata } from 'next';
import { InstallationGuide } from '@/components/installation/InstallationGuide';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Install the DGA React component library',
  description:
    'Install the dev-dga design system, wrap your app in the provider, and control every design token - palette, radius, typography, dark mode, and RTL - from one layer of CSS variables.',
  ...pageSeo('/installation', 'en'),
};

export default function InstallationPage() {
  return <InstallationGuide />;
}
