'use client';

import { CodeSnippet } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { ThemeControls } from '@/components/site/ThemeControls';

// The card below is bridge utilities only: no library component, no custom CSS.
// DEMO_SOURCE mirrors its markup for the snippet; keep the two in sync.
const DEMO_SOURCE = `<article className="bg-card text-ink border border-border rounded-lg shadow-md p-6 max-w-paragraph">
  <div className="flex flex-wrap items-center gap-2">
    <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
      Utilities only
    </span>
    <span className="text-ink-tertiary text-xs dark:hidden">light mode</span>
    <span className="text-ink-tertiary text-xs hidden dark:inline">dark: active</span>
  </div>

  <h3 className="text-display-sm font-semibold mt-5">Commercial registration</h3>
  <p className="text-ink-secondary mt-2">
    Register a new establishment, update its activities, or renew its record.
  </p>

  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
    <div className="bg-muted rounded-md p-3">
      <dt className="text-ink-tertiary text-2xs">Fee</dt>
      <dd className="text-ink text-sm font-medium">SAR 200</dd>
    </div>
    <div className="bg-muted rounded-md p-3">
      <dt className="text-ink-tertiary text-2xs">Duration</dt>
      <dd className="text-ink text-sm font-medium">3 working days</dd>
    </div>
    <div className="bg-muted rounded-md p-3">
      <dt className="text-ink-tertiary text-2xs">Channel</dt>
      <dd className="text-ink text-sm font-medium">Online</dd>
    </div>
  </dl>

  <div className="border-t border-border mt-5 pt-4">
    <a
      href="#"
      className="text-primary hover:text-primary-hover text-sm font-medium underline-offset-4 hover:underline"
    >
      Start the service
    </a>
  </div>
</article>`;

export function TailwindBridgeDemo() {
  const { c } = useCopy();
  const d = c.installPage.styling.demo;

  return (
    <div className="tw-demo">
      <div className="tw-demo__bar">
        <span className="tw-demo__label">{d.label}</span>
        <ThemeControls />
      </div>

      <div className="tw-demo__stage">
        <article className="bg-card text-ink border border-border rounded-lg shadow-md p-6 max-w-paragraph">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
              {d.badge}
            </span>
            <span className="text-ink-tertiary text-xs dark:hidden">{d.light}</span>
            <span className="text-ink-tertiary text-xs hidden dark:inline">{d.dark}</span>
          </div>

          <h3 className="text-display-sm font-semibold mt-5">{d.heading}</h3>
          <p className="text-ink-secondary mt-2">{d.body}</p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            {d.facts.map((f) => (
              <div className="bg-muted rounded-md p-3" key={f.label}>
                <dt className="text-ink-tertiary text-2xs">{f.label}</dt>
                <dd className="text-ink text-sm font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-border mt-5 pt-4">
            <a
              href="#styling"
              className="text-primary hover:text-primary-hover text-sm font-medium underline-offset-4 hover:underline"
            >
              {d.cta}
            </a>
          </div>
        </article>
      </div>

      <p className="doc-subhead">{d.source}</p>
      <div dir="ltr">
        <CodeSnippet languages={[{ value: 'tsx', label: 'ServiceCard.tsx', code: DEMO_SOURCE }]} />
      </div>
    </div>
  );
}
