'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import {
  COVERAGE_SECTIONS,
  COVERAGE_STATS,
  EXTENSIONS,
  type CoverageStatus,
} from '@/lib/compliance';
import { ArrowRight, ExternalLink } from '@/components/icons';
import './compliance.css';

const STORYBOOK_URL = 'https://dev-dga.vercel.app/';

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="cmpl-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="cmpl-section__title">
        <a href={`#${id}`} className="cmpl-section__anchor" aria-hidden tabIndex={-1}>
          #
        </a>
        {title}
      </h2>
      {children}
    </section>
  );
}

function StatusPill({ status, label }: { status: CoverageStatus; label: string }) {
  return (
    <span className="cmpl-pill" data-status={status}>
      <span className="cmpl-pill__dot" aria-hidden />
      {label}
    </span>
  );
}

export function Compliance() {
  const { c } = useCopy();
  const p = c.compliancePage;

  const toc = COVERAGE_SECTIONS.map((s) => ({
    id: s.id,
    title: p.sections[s.id as keyof typeof p.sections],
  }));

  return (
    <div className="cmpl shell">
      <div className="cmpl__layout">
        <header className="cmpl__header">
          <p className="eyebrow">{p.eyebrow}</p>
          <h1 className="cmpl__title display">{p.title}</h1>
          <p className="cmpl__lead">{p.lead}</p>

          <div className="cmpl-scope surface">
            <p className="cmpl-scope__title">{p.scope.title}</p>
            <p className="cmpl-scope__body">{p.scope.body}</p>
          </div>

          <dl className="cmpl-stats" aria-label={p.eyebrow}>
            <div className="cmpl-stat">
              <dt className="cmpl-stat__num">{COVERAGE_STATS.aligned}</dt>
              <dd className="cmpl-stat__label">{p.summary.aligned}</dd>
            </div>
            <div className="cmpl-stat">
              <dt className="cmpl-stat__num">{COVERAGE_STATS.officialPages}</dt>
              <dd className="cmpl-stat__label">{p.summary.officialPages}</dd>
            </div>
            <div className="cmpl-stat">
              <dt className="cmpl-stat__num">{COVERAGE_STATS.extensions}</dt>
              <dd className="cmpl-stat__label">{p.summary.extensions}</dd>
            </div>
          </dl>
        </header>

        <main className="cmpl__main">
          <div className="cmpl-legend surface" aria-label={p.legend.title}>
            <p className="cmpl-legend__title">{p.legend.title}</p>
            <ul className="cmpl-legend__list">
              <li>
                <StatusPill status="aligned" label={p.legend.aligned} />
                <span className="cmpl-legend__desc">{p.legend.alignedDesc}</span>
              </li>
              <li>
                <StatusPill status="partial" label={p.legend.partial} />
                <span className="cmpl-legend__desc">{p.legend.partialDesc}</span>
              </li>
              <li>
                <StatusPill status="extension" label={p.legend.extension} />
                <span className="cmpl-legend__desc">{p.legend.extensionDesc}</span>
              </li>
            </ul>
          </div>

          {COVERAGE_SECTIONS.map((s) => (
            <Section
              key={s.id}
              id={s.id}
              title={p.sections[s.id as keyof typeof p.sections]}
            >
              <div className="cmpl-table-wrap" role="region" aria-labelledby={`${s.id}-h`} tabIndex={0}>
                <table className="cmpl-table">
                  <thead>
                    <tr>
                      <th scope="col">{p.cols.official}</th>
                      <th scope="col">{p.cols.component}</th>
                      <th scope="col">{p.cols.status}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.rows.map((row) => (
                      <tr key={row.component} data-highlight={row.highlight || undefined}>
                        <td className="cmpl-td-official">{row.official}</td>
                        <td className="cmpl-td-component">
                          {row.slug ? (
                            <Link href={`/components/${row.slug}`} className="cmpl-comp-link" dir="ltr">
                              {row.component}
                            </Link>
                          ) : (
                            <span dir="ltr">{row.component}</span>
                          )}
                        </td>
                        <td>
                          <StatusPill
                            status={row.status}
                            label={
                              row.status === 'partial' ? p.statusLabel.partial : p.statusLabel.aligned
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
          ))}

          <Section id="parity" title={p.parity.title}>
            <div className="cmpl-parity">
              <div className="cmpl-parity__card surface" data-kind="coverage">
                <span className="cmpl-parity__tag">{p.parity.coverage}</span>
                <p className="cmpl-parity__desc">{p.parity.coverageDesc}</p>
              </div>
              <div className="cmpl-parity__card surface" data-kind="value">
                <span className="cmpl-parity__tag">{p.parity.value}</span>
                <p className="cmpl-parity__desc">{p.parity.valueDesc}</p>
              </div>
            </div>
          </Section>

          <Section id="extensions" title={p.extensions.title}>
            <p className="cmpl-lead">{p.extensions.lead}</p>
            <ul className="cmpl-ext">
              {EXTENSIONS.map((e) => (
                <li key={e.component} className="cmpl-ext__item">
                  {e.slug ? (
                    <Link href={`/components/${e.slug}`} className="cmpl-ext__link" dir="ltr">
                      {e.component}
                    </Link>
                  ) : (
                    <span dir="ltr">{e.component}</span>
                  )}
                </li>
              ))}
            </ul>
          </Section>

          <p className="cmpl-independence">{p.independence}</p>

          <div className="cmpl-cta surface">
            <p className="cmpl-cta__title">{p.cta.title}</p>
            <div className="cmpl-cta__actions">
              <Button asChild size="md" endIcon={<ArrowRight width={16} height={16} />} iconFlip>
                <Link href="/components">{p.cta.browse}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="md"
                endIcon={<ExternalLink width={16} height={16} />}
              >
                <a href={STORYBOOK_URL} target="_blank" rel="noreferrer">
                  {p.cta.storybook}
                </a>
              </Button>
            </div>
          </div>
        </main>

        <aside className="cmpl__toc" aria-label={p.onThisPage}>
          <div className="cmpl__toc-inner">
            <p className="cmpl__toc-title">{p.onThisPage}</p>
            <nav>
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="cmpl__toc-link">
                  {item.title}
                </a>
              ))}
              <a href="#parity" className="cmpl__toc-link">
                {p.parity.title}
              </a>
              <a href="#extensions" className="cmpl__toc-link">
                {p.extensions.title}
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
