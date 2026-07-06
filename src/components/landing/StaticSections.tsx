'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button, Chip, CodeSnippet, CodeSnippetInline, Tag } from '@dev-dga/react';
import { CATEGORIES } from '@/lib/catalog';
import { categoryIllustrations } from '@/lib/illustrations.generated';
import { enrichIllustration } from '@/lib/illustration-motion';
import { useCopy } from '@/lib/i18n';
import { MasarDashboard } from '@/components/examples/MasarDashboard';
import { ArrowRight, Code } from '@/components/icons';

const CODE_URL = 'https://github.com/DevDhaif/dev-dga';

// One glyph per copy point - order must match c.about.points.
const ABOUT_ICONS = [
  'M9 11l3 3L21 4|M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  'M4 7h9|M4 12h6|M4 17h9|M20 7h-2.5|M18.5 5l-2 2 2 2',
  'M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1|M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1',
  'M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6Z|M9 12l2 2 4-4',
];
// One glyph per card - order must match c.a11y.cards.
const A11Y_ICONS = [
  'M12 3l9 5-9 5-9-5 9-5Z|M3 13l9 5 9-5',
  'M3 6h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z|M7 10h.01M11 10h.01M15 10h.01M8 14h8',
  'M9 3h6|M10 3v6l-5 8a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-8V3',
  'M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2|M12 10a2 2 0 0 0 0 4 2 2 0 0 0 0-4Z',
];

function Glyph({ d }: { d: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {d.split('|').map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

function useInView<T extends Element>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);
  return { ref, inView };
}

export function AboutFeatures() {
  const { c } = useCopy();
  return (
    <div className="feature-grid">
      {c.about.points.map((p, i) => (
        <div className="feature-card" key={p.title}>
          <span className="feature-card__icon" aria-hidden>
            <Glyph d={ABOUT_ICONS[i % ABOUT_ICONS.length]} />
          </span>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Architecture() {
  const { c } = useCopy();
  const tiers = [
    { id: 'tokens', pkg: '@dev-dga/tokens', tag: c.arch.tokens, desc: c.arch.tokensDesc },
    { id: 'css', pkg: '@dev-dga/css', tag: c.arch.css, desc: c.arch.cssDesc },
    { id: 'react', pkg: '@dev-dga/react', tag: c.arch.react, desc: c.arch.reactDesc },
  ];
  return (
    <div className="arch" role="img" aria-label={c.chrome.archFlow}>
      {tiers.map((tier, i) => (
        <div key={tier.id} className="arch__layer" data-tier={tier.id}>
          <div className="arch__layer-top">
            <span className="arch__step" aria-hidden>
              {i + 1}
            </span>
            <span className="arch__pkg" dir="ltr">
              {tier.pkg}
            </span>
          </div>
          <span className="arch__tag">{tier.tag}</span>
          <p className="arch__desc">{tier.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function A11yFeatures() {
  const { c } = useCopy();
  return (
    <div className="feature-grid">
      {c.a11y.cards.map((f, i) => (
        <div className="feature-card" key={f.title}>
          <span className="feature-card__icon" aria-hidden>
            <Glyph d={A11Y_ICONS[i % A11Y_ICONS.length]} />
          </span>
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </div>
      ))}
    </div>
  );
}

const IMPORT_CODE = `import '@dev-dga/css';`;
const APP_CODE = `import { DgaProvider, Button } from '@dev-dga/react';

export default function App() {
  return (
    <DgaProvider dir="rtl" mode="light" theme={{ primary: 'saGreen' }}>
      <Button>ابدأ الآن</Button>
    </DgaProvider>
  );
}`;

export function InstallSteps() {
  const { c } = useCopy();
  return (
    <div className="install-steps">
      <div className="install-step">
        <div className="install-step__num" aria-hidden />
        <div className="install-step__body">
          <p className="install-step__label">{c.install.step1}</p>
          <div dir="ltr">
            <CodeSnippetInline>npm i @dev-dga/react @dev-dga/css @dev-dga/tokens</CodeSnippetInline>
          </div>
        </div>
      </div>
      <div className="install-step">
        <div className="install-step__num" aria-hidden />
        <div className="install-step__body">
          <p className="install-step__label">{c.install.step2}</p>
          <CodeSnippet
            languages={[{ value: 'ts', label: 'layout.tsx', code: IMPORT_CODE }]}
            lineNumbers={false}
          />
        </div>
      </div>
      <div className="install-step">
        <div className="install-step__num" aria-hidden />
        <div className="install-step__body">
          <p className="install-step__label">{c.install.step3}</p>
          <CodeSnippet languages={[{ value: 'tsx', label: 'App.tsx', code: APP_CODE }]} />
        </div>
      </div>
    </div>
  );
}

export function ExampleShowcase() {
  const { c } = useCopy();
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div className="example-card">
      <div className="example-card__media" ref={ref}>
        <div className="example-card__chrome" aria-hidden>
          <span className="example-card__dots">
            <span />
            <span />
            <span />
          </span>
          <span className="example-card__url">masar.dga.gov.sa</span>
        </div>
        <div className="example-card__viewport">
          {inView ? (
            <div className="example-card__stage" aria-hidden>
              <MasarDashboard preview />
            </div>
          ) : (
            <span className="example-card__skeleton" aria-hidden />
          )}
          <span className="example-card__media-veil" aria-hidden />
        </div>
      </div>

      <div className="example-card__body">
        <Tag className="example-card__tag" variant="primary-subtle">
          {c.examples.masarTag}
        </Tag>
        <h3 className="example-card__name">{c.examples.masarName}</h3>
        <p className="example-card__desc">{c.examples.masarDesc}</p>
        <div className="example-card__actions">
          <Button asChild size="md" endIcon={<ArrowRight width={16} height={16} />} iconFlip>
            <Link href="/examples/masar">{c.examples.liveDemo}</Link>
          </Button>
          <Button asChild variant="outline" size="md" startIcon={<Code width={16} height={16} />}>
            <a href={CODE_URL} target="_blank" rel="noreferrer">
              {c.examples.code}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function CategoryTeaser() {
  const { c } = useCopy();
  return (
    <div className="teaser-grid">
      {CATEGORIES.map((cat) => {
        const t = c.categories[cat.id as keyof typeof c.categories];
        const emblem = categoryIllustrations[cat.id];
        const art = emblem ? enrichIllustration(emblem.svg, cat.id) : null;
        return (
          <Link key={cat.id} href={`/components?category=${cat.id}`} className="teaser">
            <span
              className="teaser__count"
              aria-label={`${cat.components.length} ${c.gallery.components}`}
            >
              {cat.components.length}
            </span>
            {emblem && art && (
              <span
                className={emblem.flip ? 'teaser__emblem rtl-flip-x' : 'teaser__emblem'}
                data-motion={art.motion}
                aria-hidden
                dangerouslySetInnerHTML={{ __html: art.html }}
              />
            )}
            <span className="teaser__name">{t?.title ?? cat.title}</span>
            <span className="teaser__desc">{t?.description ?? cat.description}</span>
            <span className="teaser__go" aria-hidden>
              <ArrowRight width={16} height={16} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function Closer() {
  const { c } = useCopy();
  return (
    <section className="closer shell">
      <span
        aria-hidden
        style={{
          display: 'block',
          inlineSize: 54,
          marginInline: 'auto',
          marginBlockEnd: '1.25rem',
          color: 'var(--ddga-color-primary)',
        }}
      >
        <svg
          viewBox="0 0 200 240"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ inlineSize: '100%', blockSize: 'auto', display: 'block' }}
        >
          <path d="M40 214 Q80 150 150 64" />
          <path d="M31 208 55 220" />
          <circle cx="36" cy="216" r="4.5" fill="currentColor" stroke="none" />
          <path d="M160 214 Q120 150 50 64" />
          <path d="M169 208 145 220" />
          <circle cx="164" cy="216" r="4.5" fill="currentColor" stroke="none" />
          <path d="M100 150 V96" />
          <path d="M100 96 C82 80 60 78 42 86" />
          <path d="M100 96 C118 80 140 78 158 86" />
          <path d="M100 92 C86 72 68 62 52 56" />
          <path d="M100 92 C114 72 132 62 148 56" />
          <path d="M100 90 C92 66 84 46 78 30" />
          <path d="M100 90 C108 66 116 46 122 30" />
          <path d="M100 92 V24" />
        </svg>
      </span>
      <p className="eyebrow" style={{ justifyContent: 'center' }}>
        {c.closer.eyebrow}
      </p>
      <h2 className="closer__title">{c.closer.title}</h2>
      <div className="closer__cta">
        <Button asChild size="lg">
          <Link href="/components">{c.closer.browse}</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="https://github.com/DevDhaif/dev-dga" target="_blank" rel="noreferrer">
            {c.closer.github}
          </a>
        </Button>
      </div>
      <div style={{ marginBlockStart: '1.5rem' }}>
        <Chip variant="neutral" aria-hidden>
          MIT
        </Chip>
      </div>
    </section>
  );
}
