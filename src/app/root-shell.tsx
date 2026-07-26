import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@fontsource/ibm-plex-sans-arabic/400.css';
import '@fontsource/ibm-plex-sans-arabic/500.css';
import '@fontsource/ibm-plex-sans-arabic/600.css';
import '@fontsource/ibm-plex-sans-arabic/700.css';
import '@fontsource/ibm-plex-mono/400.css';

import '@dev-dga/css';
import './globals.css';

import { Providers } from './providers';
import { STORAGE_KEY } from '@/lib/storage-key';
import { SITE_URL, languageAlternates, serializeJsonLd } from '@/lib/seo';
import { dirFor, type Locale } from '@/lib/locale';
import pkg from '../../package.json';

// The only public repo: the library source lives in a private one.
const REPO_URL = 'https://github.com/DevDhaif/dev-dga-hub';

const LIB_VERSION = pkg.dependencies['@dev-dga/react'].replace(/^\D*/, '');

export const DESCRIPTION: Record<Locale, string> = {
  en: 'An independent, MIT-licensed React 19 implementation of Saudi Arabia’s DGA Platforms Code design system. RTL-native, dark-ready, WCAG 2.2 AA. Not affiliated with the official DGA.',
  ar: 'تطبيق React 19 مستقل لكود منصّات هيئة الحكومة الرقمية السعودية. عربي الاتجاه أصالةً، جاهز للوضع الداكن، ومتوافق مع WCAG 2.2 AA. غير تابع لهيئة الحكومة الرقمية الرسمية.',
};

const TITLE: Record<Locale, string> = {
  en: 'dev-dga · Saudi DGA Platforms Code, as React',
  ar: 'dev-dga · نظام التصميم الحكومي السعودي بمكوّنات React',
};

const KEYWORDS: Record<Locale, string[]> = {
  en: [
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
  ar: [
    'نظام التصميم الحكومي',
    'كود المنصّات',
    'هيئة الحكومة الرقمية',
    'مكوّنات React عربية',
    'تصميم حكومي سعودي',
    'واجهات عربية RTL',
    'WCAG 2.2 AA',
    'منتقي تاريخ هجري',
  ],
};

const AUTHOR = {
  '@type': 'Person',
  name: 'Dhaifallah Alfarawi',
  url: 'https://devdhaif.vercel.app/',
} as const;

export function rootMetadata(locale: Locale): Metadata {
  const home = locale === 'ar' ? '/ar' : '/';
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: TITLE[locale], template: '%s · dev-dga' },
    description: DESCRIPTION[locale],
    applicationName: 'dev-dga',
    keywords: KEYWORDS[locale],
    authors: [{ name: 'Dhaifallah Alfarawi', url: 'https://devdhaif.vercel.app/' }],
    creator: 'Dhaifallah Alfarawi',
    alternates: { canonical: home, languages: languageAlternates('/') },
    openGraph: {
      type: 'website',
      siteName: 'dev-dga',
      title: TITLE[locale],
      description: DESCRIPTION[locale],
      locale,
      alternateLocale: locale === 'ar' ? 'en' : 'ar',
      url: home,
    },
    twitter: {
      card: 'summary_large_image',
      title: TITLE[locale],
      description: DESCRIPTION[locale],
    },
  };
}

export const SHARED_VIEWPORT: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d121c' },
  ],
};

const noFlash = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var d=s?JSON.parse(s):{};var m=d.mode==='dark'?'dark':'light';var e=document.documentElement;e.setAttribute('data-theme',m);e.style.colorScheme=m;}catch(_){}})();`;

function jsonLdFor(locale: Locale) {
  const home = locale === 'ar' ? `${SITE_URL}/ar` : `${SITE_URL}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'dev-dga',
        url: home,
        description: DESCRIPTION[locale],
        inLanguage: locale,
        author: AUTHOR,
      },
      {
        '@type': 'SoftwareApplication',
        name: 'dev-dga',
        alternateName: '@dev-dga',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        description: DESCRIPTION[locale],
        url: home,
        softwareVersion: LIB_VERSION,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        license: 'https://opensource.org/licenses/MIT',
        isAccessibleForFree: true,
        author: AUTHOR,
      },
      {
        '@type': 'SoftwareSourceCode',
        name: '@dev-dga/react',
        description: DESCRIPTION[locale],
        codeRepository: REPO_URL,
        url: home,
        programmingLanguage: ['TypeScript', 'React'],
        runtimePlatform: 'React 19',
        license: 'https://opensource.org/licenses/MIT',
        author: AUTHOR,
      },
    ],
  };
}

export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} dir={dirFor(locale)} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLdFor(locale)) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers locale={locale}>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
