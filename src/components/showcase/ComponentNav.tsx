'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/catalog';
import { useCopy } from '@/lib/i18n';
import { componentName } from '@/lib/component-names';

export function ComponentNav({ current }: { current: string }) {
  const { c, locale } = useCopy();
  const railRef = useRef<HTMLElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const active = activeRef.current;
    if (!rail || !active) return;
    rail.scrollTop = Math.max(
      0,
      active.offsetTop - rail.clientHeight / 2 + active.clientHeight / 2,
    );
  }, [current]);

  return (
    <aside className="cmp-nav" aria-label={c.chrome.navPrimary} ref={railRef}>
      <nav>
        {CATEGORIES.map((cat) => {
          const t = c.categories[cat.id as keyof typeof c.categories];
          return (
            <div className="cmp-nav__group" key={cat.id}>
              <p className="cmp-nav__label">{t?.title ?? cat.title}</p>
              {cat.components.map((comp) => {
                const isActive = comp.slug === current;
                return (
                  <Link
                    key={comp.slug}
                    href={`/components/${comp.slug}`}
                    className="cmp-nav__link"
                    aria-current={isActive ? 'page' : undefined}
                    ref={isActive ? activeRef : undefined}
                  >
                    {componentName(comp.slug, comp.name, locale)}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
