import type { ReactNode } from 'react';
import { TopBar } from '@/components/site/TopBar';
import { Footer } from '@/components/site/Footer';
import { CommandPalette } from '@/components/site/CommandPalette';
import '@/components/site/site.css';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBar />
      <main className="site-main" id="main">
        {children}
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
