'use client';

import { useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  CodeSnippet,
  Divider,
  InlineAlert,
  Progress,
  SearchBox,
  Select,
  SelectItem,
  Slider,
  Spinner,
  StatusTag,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
  TextInput,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { TOKEN_GROUPS, TOKEN_COUNT, type Token, type TokenTier } from '@/lib/tokens.generated';
import { ArrowRight } from '@/components/icons';
import './theme.css';

const ALL: Token[] = TOKEN_GROUPS.flatMap((g) => g.tokens);
const DEFAULTS: Record<string, string> = Object.fromEntries(ALL.map((t) => [t.name, t.value]));

const TIER_ORDER: TokenTier[] = ['theme', 'brand', 'foundation', 'primitive'];
const TIER_BY_NAME: Record<string, TokenTier> = Object.fromEntries(
  TOKEN_GROUPS.flatMap((g) => g.tokens.map((tk) => [tk.name, g.tier])),
);
const isDarkSensitive = (name: string) =>
  name.startsWith('--ddga-color-') ||
  name.startsWith('--ddga-text-') ||
  name.startsWith('--ddga-shadow-');
const TIER_COMMENT: Record<TokenTier, string> = {
  theme: 'Roles - apply to both modes unless given a dark value below',
  brand: 'Brand ramp - re-tones light and dark together',
  foundation: 'Foundations',
  primitive: 'Primitive scales - re-tone light and dark together',
};

const CUSTOM = '__custom__';
const ALIAS_RE = /^var\(\s*--ddga-([a-z]+)-(\d{1,3})\s*\)$/i;

function aliasParts(value: string | undefined): { scale: string; step: string } | null {
  const m = value?.match(ALIAS_RE);
  return m ? { scale: m[1], step: m[2] } : null;
}

function resolveColor(value: string, values: Record<string, string>): string {
  let v = value;
  for (let i = 0; i < 6 && v?.startsWith('var('); i++) {
    const m = v.match(/^var\(\s*(--[a-z0-9-]+)\s*\)$/i);
    if (!m) break;
    v = values[m[1]] ?? DEFAULTS[m[1]] ?? '';
  }
  return v;
}

function scaleSteps(scale: string): string[] {
  const prefix = `--ddga-${scale}-`;
  return Object.keys(DEFAULTS)
    .filter((n) => n.startsWith(prefix) && /^\d+$/.test(n.slice(prefix.length)))
    .sort((a, b) => Number(a.slice(prefix.length)) - Number(b.slice(prefix.length)));
}

function hex6(v: string): string {
  const m = v.trim().match(/^#([0-9a-fA-F]{3})$/);
  if (m) return '#' + m[1].split('').map((c) => c + c).join('');
  return v;
}
function splitLen(v: string): { n: string; unit: string } {
  const m = v.trim().match(/^(-?\d*\.?\d+)(px|rem|em)?$/);
  return m ? { n: m[1], unit: m[2] ?? '' } : { n: v, unit: '' };
}

export function ThemeStudio() {
  const { c } = useCopy();
  const t = c.themePage;
  const groupLabels = t.groups as Record<string, string>;
  const s = t.sample;

  const [values, setValues] = useState<Record<string, string>>(DEFAULTS);
  const [query, setQuery] = useState('');
  const [dark, setDark] = useState(false);
  const [showPrimitives, setShowPrimitives] = useState(false);

  const set = (name: string, val: string) => setValues((prev) => ({ ...prev, [name]: val }));

  const overrides = ALL.filter((tk) => values[tk.name] !== DEFAULTS[tk.name]);
  const previewStyle: Record<string, string> = {};
  overrides.forEach((tk) => {
    previewStyle[tk.name] = values[tk.name];
  });

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      TOKEN_GROUPS.map((g) => ({
        key: g.key,
        tier: g.tier,
        tokens: q ? g.tokens.filter((tk) => tk.name.toLowerCase().includes(q)) : g.tokens,
      })).filter((g) => g.tokens.length > 0),
    [q],
  );

  const header = "@import '@dev-dga/css'; /* the DGA design system (index.css) - load it first */\n\n";
  let exportCss: string;
  if (!overrides.length) {
    exportCss = `${header}:root {\n  ${t.emptyHint}\n}`;
  } else {
    const rootLines: string[] = [];
    for (const tier of TIER_ORDER) {
      const group = overrides.filter((tk) => (TIER_BY_NAME[tk.name] ?? 'primitive') === tier);
      if (!group.length) continue;
      rootLines.push(`  /* ${TIER_COMMENT[tier]} */`);
      for (const tk of group) rootLines.push(`  ${tk.name}: ${values[tk.name]};`);
    }
    exportCss = `${header}:root {\n${rootLines.join('\n')}\n}`;
    const darkVars = overrides.filter((tk) => isDarkSensitive(tk.name));
    if (darkVars.length) {
      const darkLines = darkVars.map((tk) => `  ${tk.name}: ${values[tk.name]};`).join('\n');
      exportCss +=
        `\n\n/* Repeats your light values so dark keeps them - edit to tune dark on its own. */\n` +
        `[data-theme='dark'] {\n${darkLines}\n}`;
    }
  }

  const renderScaleField = (tk: Token, scale: string): ReactNode => {
    const val = values[tk.name];
    const custom = !aliasParts(val);
    const swatch = resolveColor(val, values);
    const prefixLen = `--ddga-${scale}-`.length;
    return (
      <label className="ts-field ts-field--scale" key={tk.name}>
        <span className="ts-field__label">
          <code className="ts-field__var" dir="ltr">
            {tk.name}
          </code>
        </span>
        <span className="ts-field__scale">
          <span className="ts-field__chip" style={{ background: swatch } as CSSProperties} aria-hidden />
          <Select
            size="sm"
            aria-label={tk.name}
            value={custom ? CUSTOM : val}
            onValueChange={(v) => set(tk.name, v === CUSTOM ? hex6(swatch) || '#000000' : v)}
            className="ts-field__select"
          >
            {scaleSteps(scale).map((n) => (
              <SelectItem key={n} value={`var(${n})`}>
                {scale} {n.slice(prefixLen)}
              </SelectItem>
            ))}
            <SelectItem value={CUSTOM}>{t.custom}</SelectItem>
          </Select>
        </span>
        {custom && (
          <span className="ts-field__swatch">
            <input
              type="color"
              value={hex6(swatch)}
              aria-label={tk.name}
              onChange={(e) => set(tk.name, e.target.value)}
            />
            <input
              type="text"
              className="ts-field__hex"
              value={val}
              aria-label={tk.name}
              dir="ltr"
              spellCheck={false}
              onChange={(e) => set(tk.name, e.target.value)}
            />
          </span>
        )}
      </label>
    );
  };

  const renderControl = (tk: Token): ReactNode => {
    const scale = aliasParts(DEFAULTS[tk.name])?.scale;
    if (scale) return renderScaleField(tk, scale);

    const nameEl = (
      <code className="ts-field__var" dir="ltr">
        {tk.name}
      </code>
    );
    const val = values[tk.name];

    if (tk.kind === 'color') {
      return (
        <label className="ts-field ts-field--color" key={tk.name}>
          <span className="ts-field__label">{nameEl}</span>
          <span className="ts-field__swatch">
            <input
              type="color"
              value={hex6(val)}
              aria-label={tk.name}
              onChange={(e) => set(tk.name, e.target.value)}
            />
            <input
              type="text"
              className="ts-field__hex"
              value={val}
              aria-label={tk.name}
              dir="ltr"
              spellCheck={false}
              onChange={(e) => set(tk.name, e.target.value)}
            />
          </span>
        </label>
      );
    }

    if (tk.kind === 'colorText') {
      return (
        <label className="ts-field ts-field--color" key={tk.name}>
          <span className="ts-field__label">{nameEl}</span>
          <span className="ts-field__swatch">
            <span className="ts-field__chip" style={{ background: val } as CSSProperties} aria-hidden />
            <input
              type="text"
              className="ts-field__hex"
              value={val}
              aria-label={tk.name}
              dir="ltr"
              spellCheck={false}
              onChange={(e) => set(tk.name, e.target.value)}
            />
          </span>
        </label>
      );
    }

    if (tk.kind === 'weight') {
      const cur = parseInt(val, 10) || 400;
      const stepTo = (delta: number) =>
        set(tk.name, String(Math.min(900, Math.max(100, cur + delta * 100))));
      return (
        <label className="ts-field" key={tk.name}>
          <span className="ts-field__label">{nameEl}</span>
          <span className="ts-field__stepper">
            <button
              type="button"
              className="ts-field__step"
              onClick={() => stepTo(-1)}
              disabled={cur <= 100}
              aria-label={`${tk.name} ${t.decrease}`}
            >
              −
            </button>
            <span className="ts-field__stepval" dir="ltr" style={{ fontWeight: cur }}>
              {cur}
            </span>
            <button
              type="button"
              className="ts-field__step"
              onClick={() => stepTo(1)}
              disabled={cur >= 900}
              aria-label={`${tk.name} ${t.increase}`}
            >
              +
            </button>
          </span>
        </label>
      );
    }

    if (tk.kind === 'shadow') {
      return (
        <label className="ts-field ts-field--wide" key={tk.name}>
          <span className="ts-field__label">{nameEl}</span>
          <span className="ts-field__shadow">
            <span
              className="ts-field__shadow-box"
              style={{ boxShadow: val === 'none' ? 'none' : val } as CSSProperties}
              aria-hidden
            />
            <input
              type="text"
              className="ts-field__text"
              value={val}
              aria-label={tk.name}
              dir="ltr"
              spellCheck={false}
              onChange={(e) => set(tk.name, e.target.value)}
            />
          </span>
        </label>
      );
    }

    if (tk.kind === 'length' || tk.kind === 'number') {
      const { n, unit } = splitLen(val);
      return (
        <label className="ts-field ts-field--num" key={tk.name}>
          <span className="ts-field__label">
            {nameEl}
            {unit && (
              <span className="ts-field__unit" dir="ltr">
                {unit}
              </span>
            )}
          </span>
          <input
            type="number"
            className="ts-field__numinput"
            value={n}
            aria-label={tk.name}
            dir="ltr"
            step="any"
            onChange={(e) => set(tk.name, unit ? `${e.target.value}${unit}` : e.target.value)}
          />
        </label>
      );
    }

    return (
      <label className="ts-field ts-field--wide" key={tk.name}>
        <span className="ts-field__label">{nameEl}</span>
        <input
          type="text"
          className="ts-field__text"
          value={val}
          aria-label={tk.name}
          dir="ltr"
          spellCheck={false}
          onChange={(e) => set(tk.name, e.target.value)}
        />
      </label>
    );
  };

  return (
    <div className="ts shell">
      <header className="ts__header">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="ts__title display">{t.title}</h1>
        <p className="ts__lead">{t.lead}</p>
      </header>

      <div className="ts__layout">
        <div className="ts__controls">
          <div className="ts__toolbar">
            <SearchBox
              className="ts__search"
              size="md"
              voiceSearch={false}
              value={query}
              placeholder={t.search}
              aria-label={t.search}
              onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
              onClear={() => setQuery('')}
            />
            <span className="ts__count">
              {overrides.length
                ? t.changed.replace('{n}', String(overrides.length))
                : t.tokenCount.replace('{n}', String(TOKEN_COUNT))}
            </span>
            <button
              type="button"
              className="ts__reset"
              onClick={() => setValues(DEFAULTS)}
              disabled={overrides.length === 0}
            >
              {t.reset}
            </button>
          </div>

          <div className="ts__howto">
            <p className="ts__howto-title">{t.howtoTitle}</p>
            <ul className="ts__howto-list">
              {t.howto.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <code className="ts__howto-code" dir="ltr">
              [--ddga-color-primary:#7c3aed]
            </code>
          </div>

          {filtered.length === 0 ? (
            <p className="ts__empty">{t.noMatch}</p>
          ) : (
            TIER_ORDER.map((tier) => {
              const tierGroups = filtered.filter((g) => g.tier === tier);
              if (!tierGroups.length) return null;
              const tc = t.tiers[tier];
              const advanced = tier === 'primitive';
              const open = !advanced || showPrimitives || Boolean(q);
              return (
                <section className="ts-tier" key={tier}>
                  <div className="ts-tier__head">
                    <div className="ts-tier__heading">
                      <h2 className="ts-tier__label">{tc.label}</h2>
                      <p className="ts-tier__hint">{tc.hint}</p>
                    </div>
                    {advanced && !q && (
                      <button
                        type="button"
                        className="ts-tier__toggle"
                        onClick={() => setShowPrimitives((v) => !v)}
                        aria-expanded={open}
                      >
                        {showPrimitives ? t.hideAdvanced : t.showAdvanced}
                      </button>
                    )}
                  </div>
                  {open &&
                    tierGroups.map((g) => (
                      <fieldset className="ts-group" key={g.key}>
                        <legend className="ts-group__legend">{groupLabels[g.key] ?? g.key}</legend>
                        <div className="ts-group__grid">{g.tokens.map(renderControl)}</div>
                      </fieldset>
                    ))}
                </section>
              );
            })
          )}
        </div>

        <aside className="ts__aside">
          <div className="ts__preview-wrap">
            <div className="ts__preview-head">
              <span className="ts__preview-label">{t.preview}</span>
              <button
                type="button"
                className="ts__mode"
                onClick={() => setDark((d) => !d)}
                aria-pressed={dark}
              >
                {dark ? t.light : t.dark}
              </button>
            </div>

            <div
              className="ts-preview"
              data-theme={dark ? 'dark' : 'light'}
              style={previewStyle as CSSProperties}
            >
              <section className="ts-demo">
                <p className="ts-demo__label">{s.buttons}</p>
                <div className="ts-demo__row">
                  <Button>{s.save}</Button>
                  <Button variant="secondary">{s.more}</Button>
                  <Button variant="outline">{s.cancel}</Button>
                  <Button variant="ghost">{s.more}</Button>
                  <Button variant="destructive">{s.delete}</Button>
                </div>
              </section>

              <section className="ts-demo">
                <p className="ts-demo__label">{s.forms}</p>
                <TextInput label={s.email} placeholder="name@gov.sa" dir="ltr" />
                <Checkbox label={s.remember} defaultChecked />
                <Switch label={s.notify} defaultChecked />
                <Slider label={s.volume} defaultValue={60} showValue />
              </section>

              <section className="ts-demo">
                <p className="ts-demo__label">{s.tags}</p>
                <div className="ts-demo__row">
                  <Tag variant="primary">{s.tagNew}</Tag>
                  <Tag variant="secondary">{s.more}</Tag>
                  <StatusTag tone="success">{s.approved}</StatusTag>
                  <StatusTag tone="warning">{s.pending}</StatusTag>
                  <StatusTag tone="error">{s.failed}</StatusTag>
                  <StatusTag tone="info">{s.more}</StatusTag>
                </div>
              </section>

              <section className="ts-demo">
                <p className="ts-demo__label">{s.feedback}</p>
                <InlineAlert type="info" title={s.alertInfo} />
                <InlineAlert type="success" title={s.alertSuccess} />
                <div className="ts-demo__row ts-demo__row--mid">
                  <Progress value={62} size="md" label={s.progress} />
                  <Spinner size="md" aria-label={s.loading} />
                  <Avatar>
                    <AvatarFallback>DG</AvatarFallback>
                  </Avatar>
                </div>
              </section>

              <section className="ts-demo">
                <p className="ts-demo__label">{s.surfaces}</p>
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>{s.heading}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table aria-label={s.heading} className="ts-demo__table">
                      <TableHeader>
                        <TableRow>
                          <TableHead>{s.colName}</TableHead>
                          <TableHead>{s.colStatus}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>{s.rowA}</TableCell>
                          <TableCell>
                            <StatusTag tone="success">{s.approved}</StatusTag>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{s.rowB}</TableCell>
                          <TableCell>
                            <StatusTag tone="warning">{s.pending}</StatusTag>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">{s.save}</Button>
                    <Button size="sm" variant="outline">
                      {s.cancel}
                    </Button>
                  </CardFooter>
                </Card>
                <Divider decorative />
              </section>
            </div>
          </div>
        </aside>
      </div>

      <div className="ts__export">
        <p className="ts__subhead">{t.exportTitle}</p>
        <p className="ts__usage">{t.usageIntro}</p>
        <div className="ts__file" dir="ltr">
          <div className="ts__file-tab">
            <span className="ts__file-dot" aria-hidden />
            <span className="ts__file-name">globals.css</span>
          </div>
          <CodeSnippet
            languages={[{ value: 'css', label: 'CSS', code: exportCss }]}
            lineNumbers={false}
          />
        </div>
        <p className="ts__back">
          <Link href="/installation#builder" className="ts__back-link">
            <ArrowRight width={15} height={15} className="rtl-flip-x" />
            {t.back}
          </Link>
        </p>
      </div>
    </div>
  );
}
