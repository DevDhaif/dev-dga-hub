'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import {
  Button,
  Checkbox,
  InlineAlert,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@dev-dga/react';
import { brandRampMix } from '@dev-dga/tokens';
import { useCopy } from '@/lib/i18n';
import { useHref } from '@/lib/use-href';
import { ThemingTopicNav } from '@/components/theme/ThemingTopicNav';
import { GuideCode, GuideLayout, GuideSection } from './GuideLayout';

const ENTITY_COLOR = '#0a5c8a';
const BRAND_STEPS = [
  '25',
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const;

// Same mix table the library uses for a hex theme, so the recipe and the preview never drift from 1.6.0.
function brandStep(step: string): string {
  const mix = brandRampMix[step];
  return mix ? `color-mix(in oklab, var(--entity) ${mix[1]}%, ${mix[0]})` : 'var(--entity)';
}

const ONE_BLOCK_CODE = [
  '/* app.css: after @dev-dga/css, outside any @layer */',
  ':root {',
  `  --entity: ${ENTITY_COLOR};`,
  ...BRAND_STEPS.map((step) => `  --ddga-brand-${step}: ${brandStep(step)};`),
  '}',
].join('\n');

const PREVIEW_STYLE = Object.fromEntries([
  ['--entity', ENTITY_COLOR],
  ...BRAND_STEPS.map((step) => [`--ddga-brand-${step}`, brandStep(step)]),
]) as CSSProperties;

const FOREGROUND_CODE = `:root {
  --entity: #f5bd02;
  /* … the 12 steps above … */
  --ddga-brand-foreground: var(--ddga-gray-950); /* dark text on a light brand color */
}`;

const PROVIDER_CODE = `import { DgaProvider } from '@dev-dga/react';

// A color string: step 600 of a 12-step ramp, the same mix as the CSS block
<DgaProvider dir="rtl" locale="ar" theme={{ primary: '${ENTITY_COLOR}' }}>
  <App />
</DgaProvider>

// A built-in palette: saGreen, lavender, gold, info, success, warning, error, gray
<DgaProvider theme={{ primary: 'lavender' }}>
  <App />
</DgaProvider>`;

const BUILD_THEME_CODE = `import { buildTheme } from '@dev-dga/tokens';

const vars = buildTheme({ primary: '${ENTITY_COLOR}' });
// { '--ddga-brand-25': 'color-mix(in oklab, ${ENTITY_COLOR} 3%, white)', …, '--ddga-brand-600': '${ENTITY_COLOR}', … }

// Spread it on an element that carries data-theme; a plain <section> keeps the old brand.
<div data-theme="light" style={vars}>…</div>`;

function PreviewPanel({ mode, label }: { mode: 'light' | 'dark'; label: string }) {
  const { c } = useCopy();
  const t = c.themingPage.recipe;
  return (
    <div data-theme={mode} className="theming-preview__panel" style={PREVIEW_STYLE}>
      <p className="theming-preview__label">{label}</p>
      <div className="theming-preview__row">
        <Button>{t.previewPrimary}</Button>
        <Button variant="outline">{t.previewSecondary}</Button>
      </div>
      <Checkbox label={t.previewCheckbox} defaultChecked />
    </div>
  );
}

export function ThemingGuide() {
  const { c } = useCopy();
  const hrefFor = useHref();
  const t = c.themingPage;

  const toc = [
    { id: 'one-block', title: t.recipe.title },
    { id: 'roles', title: t.roles.title },
    { id: 'contrast', title: t.contrast.title },
    { id: 'provider', title: t.provider.title },
    { id: 'upgrade', title: t.upgrade.title },
  ];

  return (
    <GuideLayout
      eyebrow={t.eyebrow}
      title={t.title}
      lead={t.lead}
      onThisPage={t.onThisPage}
      toc={toc}
      intro={<ThemingTopicNav current="guide" />}
    >
      <InlineAlert type="info" title={t.version} />

      <GuideSection id="one-block" title={t.recipe.title}>
        <p className="doc-lead">{t.recipe.lead}</p>
        <GuideCode label="app.css" lang="css" code={ONE_BLOCK_CODE} />
        <p className="doc-note">{t.recipe.placement}</p>
        <div className="theming-preview" role="group" aria-label={t.recipe.previewLabel}>
          <PreviewPanel mode="light" label={t.recipe.light} />
          <PreviewPanel mode="dark" label={t.recipe.dark} />
        </div>
      </GuideSection>

      <GuideSection id="roles" title={t.roles.title}>
        <p className="doc-lead">{t.roles.lead}</p>
        <Table aria-label={t.roles.title} className="doc-table">
          <TableHeader>
            <TableRow>
              <TableHead>{t.roles.cols.role}</TableHead>
              <TableHead>{t.roles.cols.light}</TableHead>
              <TableHead>{t.roles.cols.dark}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {t.roles.rows.map((row) => (
              <TableRow key={row.role}>
                <TableCell>
                  <code className="doc-code" dir="ltr">
                    {row.role}
                  </code>
                </TableCell>
                <TableCell>
                  <code className="doc-code" dir="ltr">
                    {row.light}
                  </code>
                </TableCell>
                <TableCell>
                  <code className="doc-code" dir="ltr">
                    {row.dark}
                  </code>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="doc-note">{t.roles.note}</p>
      </GuideSection>

      <GuideSection id="contrast" title={t.contrast.title}>
        <p className="doc-lead">{t.contrast.lead}</p>
        <GuideCode label="app.css" lang="css" code={FOREGROUND_CODE} />
        <p className="doc-note">{t.contrast.note}</p>
      </GuideSection>

      <GuideSection id="provider" title={t.provider.title}>
        <p className="doc-lead">{t.provider.lead}</p>
        <GuideCode label="app.tsx" lang="tsx" code={PROVIDER_CODE} />
        <p className="doc-note">{t.provider.buildTheme}</p>
        <GuideCode label="theme.tsx" lang="tsx" code={BUILD_THEME_CODE} />
        <p className="doc-note">
          {t.provider.studio}{' '}
          <Link href={hrefFor('/theme')}>{t.provider.studioLink}</Link>
        </p>
      </GuideSection>

      <GuideSection id="upgrade" title={t.upgrade.title}>
        <p className="doc-lead">{t.upgrade.lead}</p>
        <ul className="doc-rules">
          {t.upgrade.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </GuideSection>
    </GuideLayout>
  );
}
