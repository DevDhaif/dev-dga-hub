'use client';

import Link from 'next/link';
import { useCopy } from '@/lib/i18n';
import { useHref } from '@/lib/use-href';
import './theming-topic-nav.css';

type TopicPage = 'guide' | 'studio';

const PAGES: { id: TopicPage; href: string }[] = [
  { id: 'guide', href: '/theming' },
  { id: 'studio', href: '/theme' },
];

// /theming (the guide) and /theme (the tool) are one topic: each page opens with this pair.
export function ThemingTopicNav({ current }: { current: TopicPage }) {
  const { c } = useCopy();
  const hrefFor = useHref();
  const t = c.topics;
  const copy: Record<TopicPage, { name: string; desc: string }> = {
    guide: { name: t.guide, desc: t.guideDesc },
    studio: { name: t.studio, desc: t.studioDesc },
  };

  return (
    <nav className="topic-nav" aria-label={t.label}>
      {PAGES.map((page) => {
        const active = page.id === current;
        return (
          <Link
            key={page.id}
            href={hrefFor(page.href)}
            className="topic-nav__item"
            data-active={active}
            aria-current={active ? 'page' : undefined}
          >
            <span className="topic-nav__name">{copy[page.id].name}</span>
            <span className="topic-nav__desc">{copy[page.id].desc}</span>
          </Link>
        );
      })}
    </nav>
  );
}
