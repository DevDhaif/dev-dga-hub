'use client';

import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { useHref } from '@/lib/use-href';
import { GuideCode, GuideLayout, GuideSection, codeDir } from './GuideLayout';

const INSTALL_CODE = `npm i @dev-dga/react @dev-dga/css @dev-dga/tokens`;

const LAYERS_CODE = `/* resources/css/app.css (Laravel) or app/globals.css (Next.js) */
@layer theme, base, ddga-base, ddga-components, components, utilities;
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/utilities.css' layer(utilities);
@import '@dev-dga/css';
@import '@dev-dga/css/tailwind.css';

/* keep your own @source lines */
@source '../views';`;

const PROVIDER_CODE = `// resources/js/app.tsx (Inertia)
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { DgaProvider } from '@dev-dga/react';

createInertiaApp({
  setup({ el, App, props }) {
    createRoot(el).render(
      <DgaProvider dir="rtl" locale="ar" mode="light">
        <App {...props} />
      </DgaProvider>,
    );
  },
});`;

const LINKS_CODE = `import { Link, usePage } from '@inertiajs/react';
import { Button, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@dev-dga/react';

<Button asChild>
  <Link href="/requests/new">New request</Link>
</Button>

export function NavMain({ items }: { items: { title: string; href: string }[] }) {
  const { url } = usePage();
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton asChild isActive={url.startsWith(item.href)}>
            <Link href={item.href}>{item.title}</Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}`;

export function AdoptionGuide() {
  const { c } = useCopy();
  const hrefFor = useHref();
  const t = c.adoptPage;

  const toc = [
    { id: 'stylesheet', title: t.css.title },
    { id: 'provider', title: t.provider.title },
    { id: 'components', title: t.mapping.title },
    { id: 'router-links', title: t.links.title },
    { id: 'forms', title: t.forms.title },
    { id: 'other-kits', title: t.otherKit.title },
    { id: 'checklist', title: t.checklist.title },
  ];

  return (
    <GuideLayout
      eyebrow={t.eyebrow}
      title={t.title}
      lead={t.lead}
      onThisPage={t.onThisPage}
      toc={toc}
    >
      <GuideSection id="stylesheet" title={t.css.title}>
        <p className="doc-lead">{t.css.lead}</p>
        <GuideCode label="terminal" lang="bash" code={INSTALL_CODE} />
        <GuideCode label="app.css" lang="css" code={LAYERS_CODE} />
        <p className="doc-note">
          {t.css.after}{' '}
          <Link href={`${hrefFor('/installation')}#styling`}>{c.command.styling}</Link>
        </p>
      </GuideSection>

      <GuideSection id="provider" title={t.provider.title}>
        <p className="doc-lead">{t.provider.lead}</p>
        <GuideCode label="app.tsx" lang="tsx" code={PROVIDER_CODE} />
      </GuideSection>

      <GuideSection id="components" title={t.mapping.title}>
        <p className="doc-lead">{t.mapping.lead}</p>
        <Table aria-label={t.mapping.title} className="doc-table guide-table">
          <TableHeader>
            <TableRow>
              <TableHead>{t.mapping.cols.need}</TableHead>
              <TableHead>{t.mapping.cols.components}</TableHead>
              <TableHead>{t.mapping.cols.notes}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {t.mapping.rows.map((row) => (
              <TableRow key={row.need}>
                <TableCell>{row.need}</TableCell>
                <TableCell>
                  <code className="doc-code" dir={codeDir(row.components)}>
                    {row.components}
                  </code>
                </TableCell>
                <TableCell>{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="doc-note">
          <Link href={hrefFor('/components')}>{c.command.allComponents}</Link>
        </p>
      </GuideSection>

      <GuideSection id="router-links" title={t.links.title}>
        <p className="doc-lead">{t.links.lead}</p>
        <GuideCode label="NavMain.tsx" lang="tsx" code={LINKS_CODE} />
      </GuideSection>

      <GuideSection id="forms" title={t.forms.title}>
        <p className="doc-lead">{t.forms.lead}</p>
        <p className="doc-note">
          <Link href={hrefFor('/forms')}>{t.forms.link}</Link>
        </p>
      </GuideSection>

      <GuideSection id="other-kits" title={t.otherKit.title}>
        <p className="doc-lead">{t.otherKit.lead}</p>
        <ul className="doc-rules">
          {t.otherKit.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </GuideSection>

      <GuideSection id="checklist" title={t.checklist.title}>
        <ul className="doc-rules">
          {t.checklist.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </GuideSection>
    </GuideLayout>
  );
}
