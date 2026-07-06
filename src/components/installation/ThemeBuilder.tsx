'use client';

import { useState, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import {
  Button,
  Card,
  Checkbox,
  CodeSnippet,
  Divider,
  InlineAlert,
  StatusTag,
  Tag,
  TextInput,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { ArrowRight } from '@/components/icons';

interface Teaser {
  var: string;
  kind: 'color' | 'range';
  def: string;
  min?: number;
  max?: number;
  unit?: string;
}
const CONTROLS: Teaser[] = [
  { var: '--ddga-color-primary', kind: 'color', def: '#1b8354' },
  { var: '--ddga-color-primary-foreground', kind: 'color', def: '#ffffff' },
  { var: '--ddga-color-secondary', kind: 'color', def: '#f3f4f6' },
  { var: '--ddga-color-background', kind: 'color', def: '#ffffff' },
  { var: '--ddga-color-card', kind: 'color', def: '#ffffff' },
  { var: '--ddga-color-border', kind: 'color', def: '#e5e7eb' },
  { var: '--ddga-text-primary', kind: 'color', def: '#161616' },
  { var: '--ddga-text-secondary', kind: 'color', def: '#384250' },
  { var: '--ddga-radius-md', kind: 'range', def: '8px', min: 0, max: 24, unit: 'px' },
  { var: '--ddga-radius-lg', kind: 'range', def: '12px', min: 0, max: 32, unit: 'px' },
  { var: '--ddga-font-size-base', kind: 'range', def: '16px', min: 12, max: 22, unit: 'px' },
  { var: '--ddga-card-padding', kind: 'range', def: '16px', min: 0, max: 40, unit: 'px' },
];
const DEFAULTS: Record<string, string> = Object.fromEntries(CONTROLS.map((c) => [c.var, c.def]));

const IMPORT_LINE =
  "@import '@dev-dga/css'; /* the DGA design system (index.css) - load it first */";

export function ThemeBuilder() {
  const { c } = useCopy();
  const t = c.installPage.builder;
  const s = t.sample;
  const [values, setValues] = useState<Record<string, string>>(DEFAULTS);
  const set = (v: string, val: string) => setValues((prev) => ({ ...prev, [v]: val }));

  const overrides = CONTROLS.filter((ctl) => values[ctl.var] !== ctl.def);
  const previewStyle: Record<string, string> = {};
  overrides.forEach((ctl) => {
    previewStyle[ctl.var] = values[ctl.var];
  });

  const body = overrides.length
    ? overrides.map((ctl) => `  ${ctl.var}: ${values[ctl.var]};`).join('\n')
    : `  ${t.emptyHint}`;
  const exportCss = `${IMPORT_LINE}\n\n:root {\n${body}\n}`;

  const renderControl = (ctl: Teaser): ReactNode => {
    if (ctl.kind === 'color') {
      return (
        <label className="tb-field tb-field--color" key={ctl.var}>
          <span className="tb-field__label">
            <code className="tb-field__var" dir="ltr">
              {ctl.var}
            </code>
          </span>
          <span className="tb-field__swatch">
            <input
              type="color"
              value={values[ctl.var]}
              aria-label={ctl.var}
              onChange={(e) => set(ctl.var, e.target.value)}
            />
            <span className="tb-field__hex" dir="ltr">
              {values[ctl.var]}
            </span>
          </span>
        </label>
      );
    }
    const n = parseInt(values[ctl.var], 10) || 0;
    return (
      <label className="tb-field" key={ctl.var}>
        <span className="tb-field__label">
          <code className="tb-field__var" dir="ltr">
            {ctl.var}
          </code>
          <span className="tb-field__val" dir="ltr">
            {n}
            {ctl.unit ?? ''}
          </span>
        </span>
        <input
          type="range"
          min={ctl.min}
          max={ctl.max}
          value={n}
          aria-label={ctl.var}
          onChange={(e) => set(ctl.var, `${e.target.value}${ctl.unit ?? ''}`)}
        />
      </label>
    );
  };

  return (
    <div className="tb-builder">
      <div className="tb">
        <div className="tb__preview-wrap">
          <div className="tb__preview-head">
            <span className="tb__preview-label">{t.preview}</span>
            <button type="button" className="tb__reset" onClick={() => setValues(DEFAULTS)}>
              {t.reset}
            </button>
          </div>

          <div className="tb-preview" style={previewStyle as CSSProperties}>
            <Card variant="elevated" className="tb-sample">
              <div className="tb-sample__head">
                <div>
                  <h4 className="tb-sample__title">{s.heading}</h4>
                  <p className="tb-sample__body">{s.body}</p>
                </div>
                <Tag variant="primary">{s.tagNew}</Tag>
              </div>
              <TextInput label={s.email} placeholder="name@gov.sa" dir="ltr" />
              <Checkbox label={s.remember} defaultChecked />
              <div className="tb-sample__tags">
                <StatusTag tone="success">{s.statusApproved}</StatusTag>
                <StatusTag tone="warning">{s.tagNew}</StatusTag>
                <StatusTag tone="info">{s.more}</StatusTag>
              </div>
              <InlineAlert type="info" title={s.alert} />
              <Divider decorative />
              <div className="tb-sample__actions">
                <Button>{s.save}</Button>
                <Button variant="secondary">{s.more}</Button>
                <Button variant="outline">{s.cancel}</Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="tb__controls">
          <fieldset className="tb-group">
            <legend className="tb-group__legend">{t.quickLegend}</legend>
            <div className="tb-group__grid">{CONTROLS.map(renderControl)}</div>
          </fieldset>

          <div className="tb__cta">
            <p className="tb__cta-note">{t.fullNote}</p>
            <Button
              asChild
              endIcon={<ArrowRight width={16} height={16} className="rtl-flip-x" />}
              iconFlip
            >
              <Link href="/theme">{t.openStudio}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="tb__export">
        <p className="doc-subhead">{t.exportTitle}</p>
        <p className="tb__usage">{t.usageIntro}</p>
        <div className="tb__file" dir="ltr">
          <div className="tb__file-tab">
            <span className="tb__file-dot" aria-hidden />
            <span className="tb__file-name">globals.css</span>
          </div>
          <CodeSnippet
            languages={[{ value: 'css', label: 'CSS', code: exportCss }]}
            lineNumbers={false}
          />
        </div>
      </div>
    </div>
  );
}
