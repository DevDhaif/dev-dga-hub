'use client';

import Link from 'next/link';
import { Button } from '@dev-dga/react';
import { TopBar } from '@/components/site/TopBar';
import { Footer } from '@/components/site/Footer';
import { useCopy } from '@/lib/i18n';
import '@/components/site/site.css';

export default function NotFound() {
  const { locale } = useCopy();
  const ar = locale === 'ar';
  return (
    <>
      <TopBar />
      <main className="site-main" id="main">
        <section
          className="shell"
          style={{
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
            paddingBlock: 'clamp(3.5rem, 9vw, 7rem)',
          }}
        >
          <svg
            width="216"
            height="150"
            viewBox="0 0 216 150"
            fill="none"
            aria-hidden
            style={{ color: 'var(--ddga-text-secondary)' }}
          >
            <rect x="53" y="24" width="110" height="26" rx="7" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
            <rect
              x="76"
              y="58"
              width="110"
              height="26"
              rx="7"
              stroke="currentColor"
              strokeWidth="2"
              strokeOpacity="0.28"
              strokeDasharray="6 5"
              transform="rotate(-5 131 71)"
            />
            <rect x="53" y="92" width="110" height="26" rx="7" fill="var(--ddga-color-primary)" fillOpacity="0.12" />
            <rect x="53" y="92" width="110" height="26" rx="7" stroke="var(--ddga-color-primary)" strokeWidth="2" />
          </svg>

          <p className="eyebrow" style={{ justifyContent: 'center', marginBlockStart: '1.75rem' }}>
            404
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              margin: '0.5rem 0 0',
            }}
          >
            {ar ? 'الصفحة غير موجودة' : 'Page not found'}
          </h1>
          <p
            style={{
              color: 'var(--ddga-text-secondary)',
              maxInlineSize: '46ch',
              marginBlock: '0.75rem 0',
              lineHeight: 1.6,
            }}
          >
            {ar
              ? 'يبدو أنّ هذه الصفحة قد فُقدت. تحقّق من الرابط، أو عُد إلى نقطة بداية معروفة.'
              : 'This page seems to have gone missing. Check the link, or head back to a known surface.'}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBlockStart: '1.75rem',
            }}
          >
            <Button asChild size="lg">
              <Link href="/">{ar ? 'العودة للرئيسية' : 'Back home'}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/components">{ar ? 'تصفّح المكوّنات' : 'Browse components'}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
