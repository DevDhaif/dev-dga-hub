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
import { SITE_URL, languageAlternates } from '@/lib/seo';

const DESCRIPTION =
  'An independent, MIT-licensed React 19 implementation of Saudi Arabia’s DGA Platforms Code design system. RTL-native, dark-ready, WCAG 2.2 AA. Not affiliated with the official DGA.';

const REPO_URL = 'https://github.com/DevDhaif/dev-dga-hub';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'dev-dga · Saudi DGA Platforms Code, as React',
    template: '%s · dev-dga',
  },
  description: DESCRIPTION,
  applicationName: 'dev-dga',
  keywords: [
    'DGA',
    'DGA Platforms Code',
    'Saudi design system',
    'KSA design system',
    'government design system',
    'Arabic React components',
    'RTL React library',
    'WCAG 2.2 AA',
    'React 19',
    'Hijri date picker',
  ],
  authors: [{ name: 'Dhaifallah Alfarawi', url: 'https://devdhaif.vercel.app/' }],
  creator: 'Dhaifallah Alfarawi',
  alternates: {
    canonical: '/',
    languages: languageAlternates('/'),
  },
  openGraph: {
    type: 'website',
    siteName: 'dev-dga',
    title: 'dev-dga · Saudi DGA Platforms Code, as React',
    description: DESCRIPTION,
    locale: 'en',
    alternateLocale: 'ar',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dev-dga · Saudi DGA Platforms Code, as React',
    description: DESCRIPTION,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'dev-dga',
      alternateName: '@dev-dga',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      description: DESCRIPTION,
      url: `${SITE_URL}/`,
      softwareVersion: '0.13.0',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      license: 'https://opensource.org/licenses/MIT',
      isAccessibleForFree: true,
      author: {
        '@type': 'Person',
        name: 'Dhaifallah Alfarawi',
        url: 'https://devdhaif.vercel.app/',
      },
    },
    {
      '@type': 'SoftwareSourceCode',
      name: '@dev-dga/react',
      description:
        'An independent React 19 implementation of Saudi Arabia’s DGA Platforms Code design system - RTL-native, Arabic-first, WCAG 2.2 AA.',
      codeRepository: REPO_URL,
      url: `${SITE_URL}/`,
      programmingLanguage: ['TypeScript', 'React'],
      runtimePlatform: 'React 19',
      license: 'https://opensource.org/licenses/MIT',
      keywords:
        'DGA, Platforms Code, Saudi design system, RTL, Arabic, WCAG 2.2 AA, React 19, Hijri date picker',
      author: {
        '@type': 'Person',
        name: 'Dhaifallah Alfarawi',
        url: 'https://devdhaif.vercel.app/',
      },
    },
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d121c' },
  ],
};

const noFlash = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var d=s?JSON.parse(s):{};var m=d.mode==='dark'?'dark':'light';var ar=/^\\/ar(?=\\/|$)/.test(location.pathname);var dir=ar||d.dir==='rtl'?'rtl':'ltr';var e=document.documentElement;e.setAttribute('data-theme',m);e.setAttribute('dir',dir);if(dir==='rtl')e.setAttribute('lang','ar');e.style.colorScheme=m;}catch(_){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
