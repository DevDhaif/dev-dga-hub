'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { localizeHref } from '@/lib/locale-routes';
import { ArrowRight, ExternalLink } from '@/components/icons';
import './accessibility.css';

const STATEMENT_URL = 'https://github.com/DevDhaif/dev-dga-hub/blob/HEAD/ACCESSIBILITY.md';
const ISSUES_URL = 'https://github.com/DevDhaif/dev-dga-hub/issues';

function Section({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="a11yp-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="a11yp-section__title">
        <a href={`#${id}`} className="a11yp-section__anchor" aria-hidden tabIndex={-1}>
          #
        </a>
        {title}
      </h2>
      {lead && <p className="a11yp-lead">{lead}</p>}
      {children}
    </section>
  );
}

export function Accessibility() {
  const { c, locale } = useCopy();
  const a = c.a11yPage;
  const isAr = locale === 'ar';

  const toc = [
    { id: 'summary', title: a.summary.title },
    { id: 'build', title: a.build.title },
    { id: 'testing', title: a.testing.title },
    { id: 'limits', title: a.limits.title },
    { id: 'responsibilities', title: a.responsibilities.title },
    { id: 'reporting', title: a.reporting.title },
  ];

  return (
    <div className="a11yp shell">
      <div className="a11yp__layout">
        <header className="a11yp__header">
          <p className="eyebrow">{a.eyebrow}</p>
          <h1 className="a11yp__title display">{a.title}</h1>
          <p className="a11yp__lead">{a.lead}</p>

          <ul className="a11yp-badges" aria-hidden>
            <li className="a11yp-badge a11yp-badge--brand">{a.badges.standard}</li>
            <li className="a11yp-badge">{a.badges.basis}</li>
            <li className="a11yp-badge">{a.badges.version}</li>
          </ul>

          <div className="a11yp-honesty surface">
            <p className="a11yp-honesty__title">{a.honesty.title}</p>
            <p className="a11yp-honesty__body">{a.honesty.body}</p>
          </div>
        </header>

        <main className="a11yp__main">
          <Section id="summary" title={a.summary.title} lead={a.summary.lead}>
            <div className="a11yp-table-wrap" role="region" aria-labelledby="summary-h" tabIndex={0}>
              <table className="a11yp-table">
                <thead>
                  <tr>
                    <th scope="col">{a.summary.cols.area}</th>
                    <th scope="col">{a.summary.cols.status}</th>
                  </tr>
                </thead>
                <tbody>
                  {a.summary.rows.map((row) => (
                    <tr key={row.area}>
                      <td className="a11yp-td-area">{row.area}</td>
                      <td>
                        <span className="a11yp-status" data-tone={row.tone}>
                          <span className="a11yp-status__dot" aria-hidden />
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="build" title={a.build.title} lead={a.build.lead}>
            <ul className="a11yp-points">
              {a.build.points.map((pt) => (
                <li className="a11yp-point" key={pt.t}>
                  <span className="a11yp-point__t">{pt.t}</span>
                  <span className="a11yp-point__d">{pt.d}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="testing" title={a.testing.title} lead={a.testing.lead}>
            <dl className="a11yp-methods">
              {a.testing.methods.map((m) => (
                <div className="a11yp-method" key={m.m}>
                  <dt className="a11yp-method__m" dir="ltr">
                    {m.m}
                  </dt>
                  <dd className="a11yp-method__c">{m.c}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="limits" title={a.limits.title}>
            <ul className="a11yp-list a11yp-list--limit">
              {a.limits.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section
            id="responsibilities"
            title={a.responsibilities.title}
            lead={a.responsibilities.lead}
          >
            <ul className="a11yp-list a11yp-list--do">
              {a.responsibilities.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="reporting" title={a.reporting.title}>
            <p className="a11yp-lead">{a.reporting.body}</p>
            <Button
              asChild
              variant="outline"
              size="md"
              endIcon={<ExternalLink width={16} height={16} />}
            >
              <a href={ISSUES_URL} target="_blank" rel="noreferrer">
                {a.reporting.cta}
              </a>
            </Button>
          </Section>

          <div className="a11yp-full surface">
            <div className="a11yp-full__text">
              <p className="a11yp-full__title">{a.full.title}</p>
              <p className="a11yp-full__body">{a.full.body}</p>
            </div>
            <Button
              asChild
              size="md"
              endIcon={<ExternalLink width={16} height={16} />}
            >
              <a href={STATEMENT_URL} target="_blank" rel="noreferrer">
                {a.full.cta}
              </a>
            </Button>
          </div>

          <div className="a11yp-cta surface">
            <p className="a11yp-cta__title">{a.cta.title}</p>
            <div className="a11yp-cta__actions">
              <Button asChild size="md" endIcon={<ArrowRight width={16} height={16} />} iconFlip>
                <Link href="/components">{a.cta.browse}</Link>
              </Button>
              <Button asChild variant="outline" size="md">
                <Link href={localizeHref('/rtl', isAr)}>{a.cta.rtl}</Link>
              </Button>
            </div>
          </div>
        </main>

        <aside className="a11yp__toc" aria-label={a.onThisPage}>
          <div className="a11yp__toc-inner">
            <p className="a11yp__toc-title">{a.onThisPage}</p>
            <nav>
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="a11yp__toc-link">
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
