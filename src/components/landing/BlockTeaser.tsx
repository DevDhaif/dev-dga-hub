'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, Tag } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { useHref } from '@/lib/use-href';
import { ArrowRight } from '@/components/icons';
import {
  BLOCK_COUNT,
  CATEGORIES,
  type BlockId,
  type CategoryId,
} from '@/components/blocks/categories';

// Wide previews would lose their edges under a 16:10 cover crop, so they are letterboxed instead.
const FEATURED: { id: BlockId; category: CategoryId; contain?: boolean }[] = [
  { id: 'hero', category: 'pages', contain: true },
  { id: 'search', category: 'pages' },
  { id: 'serviceForm', category: 'forms' },
  { id: 'multiStep', category: 'forms', contain: true },
  { id: 'chatbot', category: 'engagement', contain: true },
  { id: 'analytics', category: 'apps' },
];

export function BlockTeaser() {
  const { c, locale } = useCopy();
  const hrefFor = useHref();
  const t = c.blocksTeaser;
  const n = String(BLOCK_COUNT);

  return (
    <div className="blocks-teaser">
      <nav className="blocks-teaser__chips" aria-label={t.categories}>
        {CATEGORIES.map((cat) => (
          <Link key={cat.id} href={`${hrefFor('/blocks')}#${cat.id}`} className="blocks__chip">
            {c.blocks.categories[cat.id].title}
            <span className="blocks__chip-count">{cat.items.length}</span>
          </Link>
        ))}
      </nav>

      <ul className="showcase-grid">
        {FEATURED.map(({ id, category, contain }) => (
          <li key={id} className="showcase-tile">
            <div className="showcase-tile__media">
              <Image
                src={`/blocks/${id}-${locale}.jpg`}
                alt=""
                fill
                sizes="(min-width: 960px) 30vw, (min-width: 600px) 45vw, 50vw"
                className={
                  contain
                    ? 'showcase-tile__shot showcase-tile__shot--contain'
                    : 'showcase-tile__shot'
                }
              />
            </div>
            <div className="showcase-tile__body">
              <Tag className="showcase-tile__tag" variant="primary-subtle" size="sm">
                {c.blocks.categories[category].title}
              </Tag>
              <h3 className="showcase-tile__name">
                <Link className="showcase-tile__link" href={`${hrefFor('/blocks')}#${id}`}>
                  {c.blocks.items[id].name}
                </Link>
              </h3>
              <p className="showcase-tile__desc">{c.blocks.items[id].desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="template-more__all">
        <Button
          asChild
          variant="outline"
          size="md"
          endIcon={<ArrowRight width={16} height={16} className="blocks-teaser__arrow" />}
        >
          <Link href={hrefFor('/blocks')}>{t.all.replace('{n}', n)}</Link>
        </Button>
      </div>
    </div>
  );
}
