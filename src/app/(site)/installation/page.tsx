import type { Metadata } from 'next';
import { InstallationGuide } from '@/components/installation/InstallationGuide';

export const metadata: Metadata = {
  title: 'Installation',
  description:
    'Install the dev-dga design system, wrap your app in the provider, and control every design token - palette, radius, typography, dark mode, and RTL - from one layer of CSS variables.',
  alternates: { canonical: '/installation' },
};

export default function InstallationPage() {
  return <InstallationGuide />;
}
