import type { ReactNode } from 'react';
import { CodeSnippet } from '@dev-dga/react';
import '../installation/installation.css';
import './guides.css';

// Code cells stay LTR unless the localized copy mixes in Arabic, which isolates its own Latin runs.
export const codeDir = (text: string) => (/[\u0600-\u06FF]/.test(text) ? undefined : 'ltr');

export function GuideSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="doc-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="doc-section__title">
        <a href={`#${id}`} className="doc-section__anchor" aria-hidden tabIndex={-1}>
          #
        </a>
        {title}
      </h2>
      {children}
    </section>
  );
}

export function GuideCode({ label, lang, code }: { label: string; lang: string; code: string }) {
  return (
    <div dir="ltr">
      <CodeSnippet languages={[{ value: lang, label, code }]} />
    </div>
  );
}

export function GuideLayout({
  eyebrow,
  title,
  lead,
  onThisPage,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  onThisPage: string;
  toc: { id: string; title: string }[];
  children: ReactNode;
}) {
  return (
    <div className="doc shell">
      <div className="doc__layout">
        <header className="doc__header">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="doc__title display">{title}</h1>
          <p className="doc__lead">{lead}</p>
        </header>
        <main className="doc__main">{children}</main>
        <aside className="doc__toc" aria-label={onThisPage}>
          <div className="doc__toc-inner">
            <p className="doc__toc-title">{onThisPage}</p>
            <nav>
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="doc__toc-link">
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
