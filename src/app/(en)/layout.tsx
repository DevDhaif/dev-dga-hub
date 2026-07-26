import type { ReactNode } from 'react';
import { RootShell, SHARED_VIEWPORT, rootMetadata } from '../root-shell';

export const metadata = rootMetadata('en');
export const viewport = SHARED_VIEWPORT;

export default function EnRootLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
