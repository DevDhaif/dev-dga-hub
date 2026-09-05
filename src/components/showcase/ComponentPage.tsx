'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Tag } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { componentName } from '@/lib/component-names';
import type { Example, ProseSections } from '@/lib/content';
import type { PropsPart } from '@/lib/props.generated';
import { ArrowLeft, ArrowRight } from '@/components/icons';
import { ExampleBlock } from './ExampleBlock';
import { ComponentNav } from './ComponentNav';
import { arDemoRegistry, demoRegistry } from '../../../demos/registry.generated';
import { arExampleCode } from '../../../content/ar-meta.generated';
import './showcase.css';
import { useHref } from '@/lib/use-href';

const STORYBOOK = 'https://dev-dga.vercel.app/';

interface Prose {
  description: string;
  intro: string;
  sections: ProseSections;
}

export interface ComponentPageProps {
  slug: string;
  name: string;
  categoryId: string;
  status?: 'stable' | 'new';
  en: Prose;
  ar: Prose | null;
  examples: Example[];
  /** Props tables generated from the library typings (scripts/gen-props.mjs). */
  propsDoc: PropsPart[];
  prev: { slug: string; name: string } | null;
  next: { slug: string; name: string } | null;
}

function Markdown({ children }: { children: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>;
}

// JSDoc prop descriptions: markdown, rendered without block wrappers so they sit in a cell.
function InlineMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{ p: ({ children }) => <span className="props-table__p">{children}</span> }}
    >
      {children}
    </ReactMarkdown>
  );
}

function PropsTable({ part }: { part: PropsPart }) {
  const { c } = useCopy();
  return (
    <div className="props-table-wrap">
      <table className="props-table">
        <thead>
          <tr>
            <th scope="col">{c.component.propName}</th>
            <th scope="col">{c.component.propType}</th>
            <th scope="col">{c.component.propDefault}</th>
            <th scope="col">{c.component.propDescription}</th>
          </tr>
        </thead>
        <tbody>
          {part.props.map((p) => (
            <tr key={p.name}>
              <td className="props-table__name">
                <code>{p.name}</code>
                {p.required && <span className="props-table__required">{c.component.required}</span>}
              </td>
              <td className="props-table__type">
                <code>{p.type}</code>
              </td>
              <td className="props-table__default">
                {p.defaultValue ? <code>{p.defaultValue}</code> : <span aria-hidden>–</span>}
              </td>
              <td className="props-table__desc">
                {p.description ? <InlineMarkdown>{p.description}</InlineMarkdown> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ComponentPage(props: ComponentPageProps) {
  const { c, locale } = useCopy();
  const hrefFor = useHref();
  const { slug, name, categoryId, status, en, ar, examples, propsDoc, prev, next } = props;

  const prose = locale === 'ar' && ar ? ar : en;
  // Arabic prose falls back to English section-by-section, so a half-translated
  // page still shows every section.
  const section = (key: string) => prose.sections[key] ?? en.sections[key];
  const whenToUse = section('when-to-use');
  const accessibility = section('accessibility');
  const category = c.categories[categoryId as keyof typeof c.categories]?.title ?? categoryId;
  const demos = demoRegistry[slug] ?? [];
  const arDemos = arDemoRegistry[slug] ?? [];
  const arCodes = arExampleCode[slug] ?? [];
  const documentedParts = propsDoc.filter((part) => part.props.length > 0);

  return (
    <div className="cmp-layout shell">
      <ComponentNav current={slug} />
      <article className="cmp-main" style={{ paddingBlockEnd: '2rem' }}>
        <header className="cmp-header">
          <div className="cmp-header__top">
            <Link href={hrefFor('/components')} className="eyebrow" style={{ textDecoration: 'none' }}>
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
            <Markdown>{prose.intro}</Markdown>
          </div>
        )}

        {whenToUse && (
          <section className="cmp-section" aria-labelledby="when-to-use">
            <h2 id="when-to-use" className="cmp-section__title">
              {c.component.whenToUse}
            </h2>
            <div className="prose">
              <Markdown>{whenToUse}</Markdown>
            </div>
          </section>
        )}

        <section className="cmp-section" aria-labelledby="examples">
          <h2 id="examples" className="cmp-section__title">
            {c.component.examplesHeading}
          </h2>
          {examples.length === 0 ? (
            <p className="preview__missing">{c.component.comingSoon}</p>
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
        </section>

        {propsDoc.length > 0 && (
          <section className="cmp-section" aria-labelledby="props">
            <h2 id="props" className="cmp-section__title">
              {c.component.props}
            </h2>
            <p className="cmp-section__lead">{c.component.propsLead(name)}</p>
            {documentedParts.length === 0 ? (
              <p className="preview__missing">{c.component.noProps}</p>
            ) : (
              documentedParts.map((part) => (
                <div key={part.name} className="props-part">
                  {(documentedParts.length > 1 || part.name !== name) && (
                    <h3 className="props-part__name" dir="ltr">
                      {`<${part.name}>`}
                    </h3>
                  )}
                  <PropsTable part={part} />
                </div>
              ))
            )}
          </section>
        )}

        {accessibility && (
          <section className="cmp-section" aria-labelledby="accessibility">
            <h2 id="accessibility" className="cmp-section__title">
              {c.component.accessibility}
            </h2>
            <div className="prose">
              <Markdown>{accessibility}</Markdown>
            </div>
          </section>
        )}

        <nav className="cmp-pager" aria-label={c.chrome.pagination}>
          {prev ? (
            <Link href={hrefFor(`/components/${prev.slug}`)}>
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
            <Link href={hrefFor(`/components/${next.slug}`)} className="cmp-pager__next">
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
