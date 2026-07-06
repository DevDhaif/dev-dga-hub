'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Chip, SearchBox, Tag } from '@dev-dga/react';
import { CATEGORIES, COMPONENT_COUNT } from '@/lib/catalog';
import { useCopy } from '@/lib/i18n';
import { ArrowRight } from '@/components/icons';
import { componentName } from '@/lib/component-names';
import { componentIllustrations, categoryIllustrations } from '@/lib/illustrations.generated';
import { enrichIllustration } from '@/lib/illustration-motion';
import { demoRegistry } from '../../../demos/registry.generated';
import { arBlurbs } from '../../../content/ar-meta.generated';
import './gallery.css';
import './illustration-motion.css';

const CATEGORY_IDS = new Set(CATEGORIES.map((c) => c.id));
const exampleCount = (slug: string) => demoRegistry[slug]?.length ?? 0;

const PLACEHOLDER_ART =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96" fill="none">' +
  '<rect x="40" y="35" width="48" height="7" rx="2" fill="currentColor" fill-opacity="0.25"/>' +
  '<rect x="40" y="44.5" width="48" height="7" rx="2" fill="currentColor" fill-opacity="0.4"/>' +
  '<rect x="40" y="54" width="48" height="7" rx="2" fill="var(--ddga-color-primary)"/>' +
  '</svg>';

// Markup is first-party and SVGO-sanitized at build time, safe for dangerouslySetInnerHTML.
function TileArt({ slug }: { slug: string }) {
  const entry = componentIllustrations[slug];
  const svg = entry?.svg ?? PLACEHOLDER_ART;
  const art = useMemo(() => enrichIllustration(svg, slug), [svg, slug]);
  return (
    <span
      className={entry?.flip ? 'tile__art rtl-flip-x' : 'tile__art'}
      data-motion={art.motion}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: art.html }}
    />
  );
}

function CategoryArt({ id }: { id: string }) {
  const entry = categoryIllustrations[id];
  const art = useMemo(() => (entry ? enrichIllustration(entry.svg, id) : null), [entry, id]);
  if (!entry || !art) return null;
  return (
    <span
      className={entry.flip ? 'gallery__group-emblem rtl-flip-x' : 'gallery__group-emblem'}
      data-motion={art.motion}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: art.html }}
    />
  );
}

export function Gallery() {
  const { c, locale } = useCopy();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<string | null>(() => {
    const cat = searchParams.get('category');
    return cat && CATEGORY_IDS.has(cat) ? cat : null;
  });

  const q = query.trim().toLowerCase();

  const catTitle = (id: string) => c.categories[id as keyof typeof c.categories]?.title ?? id;
  const catDesc = (id: string) => c.categories[id as keyof typeof c.categories]?.description ?? '';

  const groups = useMemo(() => {
    return CATEGORIES.map((cat) => ({
      ...cat,
      components: cat.components.filter((comp) => {
        if (!q) return true;

        const locName = componentName(comp.slug, comp.name, locale).toLowerCase();
        const locBlurb = (
          locale === 'ar' ? (arBlurbs[comp.slug] ?? comp.blurb) : comp.blurb
        ).toLowerCase();

        return (
          comp.name.toLowerCase().includes(q) ||
          comp.blurb.toLowerCase().includes(q) ||
          comp.slug.toLowerCase().includes(q) ||
          locName.includes(q) ||
          locBlurb.includes(q)
        );
      }),
    })).filter((cat) => (active ? cat.id === active : true) && cat.components.length > 0);
  }, [q, active, locale]);

  const total = groups.reduce((n, g) => n + g.components.length, 0);

  return (
    <div className="gallery">
      <header className="gallery__intro">
        <p className="eyebrow">{c.gallery.eyebrow}</p>
        <h1 className="cmp-title" style={{ marginBlock: '0.75rem 0.5rem' }}>
          {c.gallery.title}
        </h1>
        <p className="cmp-desc">{c.gallery.lead}</p>
      </header>

      <div className="gallery__filters">
        <div className="gallery__filters-top">
          <SearchBox
            aria-label={c.gallery.searchPlaceholder}
            placeholder={c.gallery.searchPlaceholder}
            voiceSearch={false}
            size="md"
            value={query}
            onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
            onClear={() => setQuery('')}
            className="gallery__search max-h-10"
          />
          <p className="gallery__count" aria-live="polite">
            {q || active
              ? `${total} ${c.gallery.of} ${COMPONENT_COUNT}`
              : `${COMPONENT_COUNT} ${c.gallery.components}`}
          </p>
        </div>
        <div className="gallery__chips" role="group" aria-label={c.gallery.title}>
          <Chip
            variant="neutral"
            selected={active === null}
            onSelectedChange={() => setActive(null)}
          >
            {c.gallery.all}
          </Chip>
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat.id}
              variant="neutral"
              selected={active === cat.id}
              onSelectedChange={() => setActive((a) => (a === cat.id ? null : cat.id))}
            >
              {catTitle(cat.id)}
            </Chip>
          ))}
        </div>
      </div>

      {groups.length === 0 ? (
        <p className="preview__missing" style={{ marginBlockStart: '2rem' }}>
          {c.gallery.noMatch} “{query}”.
        </p>
      ) : (
        groups.map((cat) => (
          <section key={cat.id} className="gallery__group" aria-labelledby={`cat-${cat.id}`}>
            <div className="gallery__group-head">
              <CategoryArt id={cat.id} />
              <div className="gallery__group-heading">
                <h2 id={`cat-${cat.id}`} className="gallery__group-title">
                  {catTitle(cat.id)}
                </h2>
                <p className="gallery__group-desc">{catDesc(cat.id)}</p>
              </div>
            </div>
            <div className="gallery__grid">
              {cat.components.map((comp) => {
                const n = exampleCount(comp.slug);
                const name = componentName(comp.slug, comp.name, locale);
                const blurb = locale === 'ar' ? (arBlurbs[comp.slug] ?? comp.blurb) : comp.blurb;
                return (
                  <Link key={comp.slug} href={`/components/${comp.slug}`} className="tile">
                    <TileArt slug={comp.slug} />
                    <div className="tile__body">
                      <div className="tile__head">
                        <span className="tile__name">{name}</span>
                        {comp.status === 'new' && (
                          <Tag variant="primary-subtle" size="sm">
                            {locale === 'ar' ? 'جديد' : 'New'}
                          </Tag>
                        )}
                      </div>
                      {locale === 'ar' && (
                        <span className="tile__api" dir="ltr">
                          {comp.name}
                        </span>
                      )}
                      <p className="tile__blurb">{blurb}</p>
                      <div className="tile__foot">
                        {n > 0 && (
                          <span className="tile__count">
                            {n} {c.gallery.examples}
                          </span>
                        )}
                        <span className="tile__go" aria-hidden>
                          <ArrowRight width={16} height={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
