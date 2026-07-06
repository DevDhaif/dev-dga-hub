import type { Metadata, Viewport } from 'next';

import '@fontsource/ibm-plex-sans-arabic/400.css';
import '@fontsource/ibm-plex-sans-arabic/500.css';
import '@fontsource/ibm-plex-sans-arabic/600.css';
import '@fontsource/ibm-plex-sans-arabic/700.css';
import '@fontsource/ibm-plex-mono/400.css';

import '@dev-dga/css';
import './globals.css';

import { Providers } from './providers';
import { STORAGE_KEY } from '@/lib/storage-key';

const DESCRIPTION =
  'An independent, MIT-licensed React 19 implementation of Saudi Arabia’s DGA Platforms Code design system. RTL-native, dark-ready, WCAG 2.2 AA. Not affiliated with the official DGA.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3100'),
  title: {
    default: 'dev-dga · Saudi DGA Platforms Code, as React',
    template: '%s · dev-dga',
  },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'dev-dga',
    title: 'dev-dga · Saudi DGA Platforms Code, as React',
    description: DESCRIPTION,
    locale: 'en',
    alternateLocale: 'ar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dev-dga · Saudi DGA Platforms Code, as React',
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d121c' },
  ],
};

const noFlash = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var d=s?JSON.parse(s):{};var m=d.mode==='dark'?'dark':'light';var dir=d.dir==='rtl'?'rtl':'ltr';var e=document.documentElement;e.setAttribute('data-theme',m);e.setAttribute('dir',dir);e.style.colorScheme=m;}catch(_){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
