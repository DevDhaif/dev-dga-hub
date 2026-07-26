import type { ReactNode } from 'react';
import { RootShell, SHARED_VIEWPORT, rootMetadata } from '../root-shell';

export const metadata = rootMetadata('ar');
export const viewport = SHARED_VIEWPORT;

export default function ArRootLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="ar">{children}</RootShell>;
}
