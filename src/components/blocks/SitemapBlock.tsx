'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Link,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

type SiteNode = { label: string; children: readonly SiteNode[] };

function Tree({ nodes, depth }: { nodes: readonly SiteNode[]; depth: number }) {
  return (
    <ul className="block-sitemap__list" data-depth={depth}>
      {nodes.map((node) => (
        <li key={node.label} className="block-sitemap__item">
          <Link href="#" size={depth === 0 ? 'md' : 'sm'}>
            {node.label}
          </Link>
          {node.children.length > 0 && <Tree nodes={node.children} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  );
}

export function SitemapBlock() {
  const { c } = useCopy();
  const s = c.blocks.sitemap;

  return (
    <section className="block-sitemap" aria-labelledby="block-sitemap-title">
      <header className="block-sitemap__header">
        <Breadcrumb aria-label={s.crumbLabel}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{s.home}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{s.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 id="block-sitemap-title" className="block-sitemap__title">
          {s.title}
        </h2>
      </header>
      <nav className="block-sitemap__tree" aria-labelledby="block-sitemap-title">
        <Tree nodes={s.tree as readonly SiteNode[]} depth={0} />
      </nav>
    </section>
  );
}

export const sitemapCode = `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Link } from '@dev-dga/react';

const tree = [
  { label: 'About us', href: '/about', children: [
    { label: 'Vision and mission', href: '/about/vision', children: [] },
    { label: 'Organizational structure', href: '/about/structure', children: [
      { label: 'Departments', href: '/about/structure/departments', children: [] },
    ] },
  ] },
  { label: 'Services', href: '/services', children: [
    { label: 'Individuals', href: '/services/individuals', children: [] },
  ] },
];

function Tree({ nodes, depth = 0 }) {
  return (
    <ul className="sitemap__list" data-depth={depth}>
      {nodes.map((node) => (
        <li key={node.href}>
          <Link href={node.href} size={depth === 0 ? 'md' : 'sm'}>{node.label}</Link>
          {node.children.length > 0 && <Tree nodes={node.children} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  );
}

export function Sitemap() {
  return (
    <section aria-labelledby="sitemap-title">
      <header className="sitemap__header">
        <Breadcrumb aria-label="Breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Sitemap</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 id="sitemap-title">Sitemap</h1>
      </header>
      <nav aria-labelledby="sitemap-title"><Tree nodes={tree} /></nav>
    </section>
  );
}

/* sitemap.css: DGA Site Map. Filled points for main pages, empty points for subpages.
.sitemap__list { display: grid; gap: var(--ddga-space-4); margin: 0; padding: 0; list-style: none; }
.sitemap__list .sitemap__list { margin-block-start: var(--ddga-space-4); padding-inline-start: var(--ddga-space-4); }
.sitemap__list li::before { content: '•'; margin-inline-end: var(--ddga-space-1); color: var(--ddga-text-brand); }
.sitemap__list[data-depth]:not([data-depth='0']) li::before { content: '◦'; }
*/`;
