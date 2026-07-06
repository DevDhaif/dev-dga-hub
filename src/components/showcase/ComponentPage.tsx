'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Tag } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { componentName } from '@/lib/component-names';
import type { Example } from '@/lib/content';
import { ArrowLeft, ArrowRight } from '@/components/icons';
import { ExampleBlock } from './ExampleBlock';
import { ComponentNav } from './ComponentNav';
import { arDemoRegistry, demoRegistry } from '../../../demos/registry.generated';
import { arExampleCode } from '../../../content/ar-meta.generated';
import './showcase.css';

const STORYBOOK = 'https://devdhaif.github.io/dev-dga/';

interface Prose {
  description: string;
  intro: string;
}

export interface ComponentPageProps {
  slug: string;
  name: string;
  categoryId: string;
  status?: 'stable' | 'new';
  en: Prose;
  ar: Prose | null;
  examples: Example[];
  prev: { slug: string; name: string } | null;
  next: { slug: string; name: string } | null;
}

export function ComponentPage(props: ComponentPageProps) {
  const { c, locale } = useCopy();
  const { slug, name, categoryId, status, en, ar, examples, prev, next } = props;

  const prose = locale === 'ar' && ar ? ar : en;
  const category = c.categories[categoryId as keyof typeof c.categories]?.title ?? categoryId;
  const demos = demoRegistry[slug] ?? [];
  const arDemos = arDemoRegistry[slug] ?? [];
  const arCodes = arExampleCode[slug] ?? [];

  return (
    <div className="cmp-layout shell">
      <ComponentNav current={slug} />
      <article className="cmp-main" style={{ paddingBlockEnd: '2rem' }}>
        <header className="cmp-header">
          <div className="cmp-header__top">
            <Link href="/components" className="eyebrow" style={{ textDecoration: 'none' }}>
              {category}
            </Link>
            {status === 'new' && <Tag variant="primary">{locale === 'ar' ? 'جديد' : 'New'}</Tag>}
          </div>
          <h1 className="cmp-title">{componentName(slug, name, locale)}</h1>
          {locale === 'ar' && (
            <span className="cmp-api" dir="ltr">
              {name}
            </span>
          )}
          <p className="cmp-desc">{prose.description}</p>

          <div className="cmp-links">
            <a className="cmp-link" href={STORYBOOK} target="_blank" rel="noreferrer">
              {c.component.openInStorybook} ↗
            </a>
            <span className="cmp-link" dir="ltr" aria-hidden>
              import {'{'} {name} {'}'} from &apos;@dev-dga/react&apos;
            </span>
          </div>
        </header>

        {prose.intro && (
          <div className="prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{prose.intro}</ReactMarkdown>
          </div>
        )}

        {examples.length === 0 ? (
          <p className="preview__missing" style={{ marginBlockStart: '2rem' }}>
            {c.component.comingSoon}
          </p>
        ) : (
          <div className="examples">
            {examples.map((ex, i) => (
              <ExampleBlock
                key={`${slug}-${i}`}
                title={ex.title}
                code={ex.code}
                Demo={demos[i]}
                ArDemo={arDemos[i] ?? undefined}
                arCode={arCodes[i] ?? undefined}
              />
            ))}
          </div>
        )}

        <nav className="cmp-pager" aria-label={c.chrome.pagination}>
          {prev ? (
            <Link href={`/components/${prev.slug}`}>
              <span className="cmp-pager__dir">
                <ArrowLeft className="rtl-flip-x" width={14} height={14} />
                {c.component.previous}
              </span>
              {componentName(prev.slug, prev.name, locale)}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/components/${next.slug}`} className="cmp-pager__next">
              <span className="cmp-pager__dir">
                {c.component.next}
                <ArrowRight className="rtl-flip-x" width={14} height={14} />
              </span>
              {componentName(next.slug, next.name, locale)}
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </div>
  );
}
