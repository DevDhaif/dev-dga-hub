'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  Button,
  CodeSnippet,
  InlineAlert,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { ArrowRight, ExternalLink } from '@/components/icons';
import { ThemeBuilder } from './ThemeBuilder';
import './installation.css';

const STORYBOOK = 'https://dev-dga.vercel.app/';

const INSTALL_LANGS = [
  { value: 'npm', label: 'npm', code: 'npm i @dev-dga/react @dev-dga/css @dev-dga/tokens' },
  { value: 'pnpm', label: 'pnpm', code: 'pnpm add @dev-dga/react @dev-dga/css @dev-dga/tokens' },
  { value: 'yarn', label: 'yarn', code: 'yarn add @dev-dga/react @dev-dga/css @dev-dga/tokens' },
];

const IMPORT_CODE = `// app/layout.tsx (Next.js) or your entry file
import '@dev-dga/css';`;

const PROVIDER_CODE = `import { DgaProvider } from '@dev-dga/react';
import '@dev-dga/css';

export default function App({ children }) {
  return (
    <DgaProvider dir="rtl" mode="light" theme={{ primary: 'saGreen' }}>
      {children}
    </DgaProvider>
  );
}`;

const THEME_CODE = `// 1 - a built-in palette name
<DgaProvider theme={{ primary: 'info' }}>…</DgaProvider>

<DgaProvider theme={{ primary: '#7C3AED' }}>…</DgaProvider>

<DgaProvider
  theme={{
    primary: {
      base: '#1B8354',
      hover: '#166A45',
      active: '#104631',
      foreground: '#FFFFFF',
    },
  }}
>
  …
</DgaProvider>`;

const TOKEN_CODE = `/* your globals.css - imported AFTER '@dev-dga/css' */
:root {
  --ddga-radius-md: 4px;          /* squarer corners, system-wide */
  --ddga-color-primary: #0f766e;  /* teal brand */
  --ddga-font-ar: 'Cairo', sans-serif;
}

.compact {
  --ddga-card-padding: var(--ddga-space-3);
  --ddga-radius-lg: 6px;
}`;

const DARK_CODE = `// Controlled by the provider
<DgaProvider mode="dark">…</DgaProvider>

<div data-theme="dark">
</div>`;

const RTL_CODE = `<DgaProvider dir="rtl" locale="ar">
</DgaProvider>`;

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
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

export function InstallationGuide() {
  const { c } = useCopy();
  const t = c.installPage;

  const toc = [
    { id: 'requirements', title: t.requirements.title },
    { id: 'install', title: t.install.title },
    { id: 'styles', title: t.styles.title },
    { id: 'provider', title: t.provider.title },
    { id: 'theming', title: t.theming.title },
    { id: 'tokens', title: t.tokens.title },
    { id: 'builder', title: t.builder.title },
    { id: 'dark', title: t.dark.title },
    { id: 'rtl', title: t.rtl.title },
    { id: 'next', title: t.next.title },
  ];

  return (
    <div className="doc shell">
      <div className="doc__layout">
        <header className="doc__header">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="doc__title display">{t.title}</h1>
          <p className="doc__lead">{t.lead}</p>
        </header>

        <main className="doc__main">
          <Section id="requirements" title={t.requirements.title}>
            <p className="doc-lead">{t.requirements.lead}</p>
            <div className="doc-cards">
              {t.requirements.items.map((item) => (
                <div className="doc-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="install" title={t.install.title}>
            <p className="doc-lead">{t.install.lead}</p>
            <div dir="ltr">
              <CodeSnippet languages={INSTALL_LANGS} lineNumbers={false} />
            </div>
            <InlineAlert type="info" title={t.install.note} live="polite" />
          </Section>

          <Section id="styles" title={t.styles.title}>
            <p className="doc-lead">{t.styles.lead}</p>
            <div dir="ltr">
              <CodeSnippet
                languages={[{ value: 'ts', label: 'layout.tsx', code: IMPORT_CODE }]}
                lineNumbers={false}
              />
            </div>
            <p className="doc-note">{t.styles.note}</p>
          </Section>

          <Section id="provider" title={t.provider.title}>
            <p className="doc-lead">{t.provider.lead}</p>
            <div dir="ltr">
              <CodeSnippet languages={[{ value: 'tsx', label: 'App.tsx', code: PROVIDER_CODE }]} />
            </div>
            <p className="doc-subhead">{t.provider.propsTitle}</p>
            <Table aria-label={t.provider.propsTitle} className="doc-table">
              <TableHeader>
                <TableRow>
                  <TableHead>{t.provider.cols.prop}</TableHead>
                  <TableHead>{t.provider.cols.type}</TableHead>
                  <TableHead>{t.provider.cols.def}</TableHead>
                  <TableHead>{t.provider.cols.desc}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {t.provider.rows.map((row) => (
                  <TableRow key={row.prop}>
                    <TableCell>
                      <code className="doc-code" dir="ltr">
                        {row.prop}
                      </code>
                    </TableCell>
                    <TableCell>
                      <code className="doc-code doc-code--muted" dir="ltr">
                        {row.type}
                      </code>
                    </TableCell>
                    <TableCell>
                      <code className="doc-code doc-code--muted" dir="ltr">
                        {row.def}
                      </code>
                    </TableCell>
                    <TableCell>{row.desc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>

          <Section id="theming" title={t.theming.title}>
            <p className="doc-lead">{t.theming.lead}</p>
            <ol className="doc-forms">
              {t.theming.forms.map((form, i) => (
                <li className="doc-form" key={form.title}>
                  <span className="doc-form__num" aria-hidden>
                    {i + 1}
                  </span>
                  <div>
                    <h3>{form.title}</h3>
                    <p>{form.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div dir="ltr">
              <CodeSnippet languages={[{ value: 'tsx', label: 'theme.tsx', code: THEME_CODE }]} />
            </div>
          </Section>

          <Section id="tokens" title={t.tokens.title}>
            <p className="doc-lead">{t.tokens.lead}</p>
            <p className="doc-subhead">{t.tokens.groupsTitle}</p>
            <Table aria-label={t.tokens.groupsTitle} className="doc-table">
              <TableHeader>
                <TableRow>
                  <TableHead>{t.tokens.cols.group}</TableHead>
                  <TableHead>{t.tokens.cols.sample}</TableHead>
                  <TableHead>{t.tokens.cols.desc}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {t.tokens.groups.map((g) => (
                  <TableRow key={g.group}>
                    <TableCell>
                      <Tag variant="primary-subtle" size="sm">
                        {g.group}
                      </Tag>
                    </TableCell>
                    <TableCell>
                      <code className="doc-code doc-code--muted" dir="ltr">
                        {g.sample}
                      </code>
                    </TableCell>
                    <TableCell>{g.desc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div dir="ltr">
              <CodeSnippet
                languages={[{ value: 'css', label: 'globals.css', code: TOKEN_CODE }]}
              />
            </div>
            <p className="doc-note">{t.tokens.scopeNote}</p>
          </Section>

          <Section id="builder" title={t.builder.title}>
            <p className="doc-lead">{t.builder.lead}</p>
            <ThemeBuilder />
          </Section>

          <Section id="dark" title={t.dark.title}>
            <p className="doc-lead">{t.dark.lead}</p>
            <div dir="ltr">
              <CodeSnippet
                languages={[{ value: 'tsx', label: 'dark.tsx', code: DARK_CODE }]}
                lineNumbers={false}
              />
            </div>
          </Section>

          <Section id="rtl" title={t.rtl.title}>
            <p className="doc-lead">{t.rtl.lead}</p>
            <div dir="ltr">
              <CodeSnippet
                languages={[{ value: 'tsx', label: 'rtl.tsx', code: RTL_CODE }]}
                lineNumbers={false}
              />
            </div>
          </Section>

          <Section id="next" title={t.next.title}>
            <p className="doc-lead">{t.next.lead}</p>
            <div className="doc-next">
              <Button asChild size="md" endIcon={<ArrowRight width={16} height={16} />} iconFlip>
                <Link href="/components">{t.next.browse}</Link>
              </Button>
              <Button asChild variant="outline" size="md">
                <Link href="/blocks">{t.next.blocks}</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="md"
                endIcon={<ExternalLink width={15} height={15} />}
              >
                <a href={STORYBOOK} target="_blank" rel="noreferrer">
                  {t.next.storybook}
                </a>
              </Button>
            </div>
          </Section>
        </main>

        <aside className="doc__toc" aria-label={t.onThisPage}>
          <div className="doc__toc-inner">
            <p className="doc__toc-title">{t.onThisPage}</p>
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
