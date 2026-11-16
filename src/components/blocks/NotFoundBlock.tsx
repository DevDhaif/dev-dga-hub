'use client';

import type { CSSProperties } from 'react';
import { Button } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import {
  Alert02Icon,
  Cancel01Icon,
  Cancel02Icon,
  CancelCircleIcon,
  CancelSquareIcon,
  SearchRemoveIcon,
  UnavailableIcon,
} from './dga-icons';

const GLYPHS = {
  x: Cancel01Icon,
  xThin: Cancel02Icon,
  xCircle: CancelCircleIcon,
  xSquare: CancelSquareIcon,
  blocked: UnavailableIcon,
  searchX: SearchRemoveIcon,
  alert: Alert02Icon,
} as const;

// DGA Page Not Found: 15 marks on the 458 × 324 illustration frame (x, y, size in px).
const MARKS: [keyof typeof GLYPHS, number, number, 24 | 16][] = [
  ['x', 81, 278, 24],
  ['xCircle', 205, 29, 24],
  ['xSquare', 434, 117, 24],
  ['xSquare', 395, 269, 24],
  ['xThin', 57, 67, 24],
  ['blocked', 257, 297, 24],
  ['blocked', 351, 25, 24],
  ['searchX', 1, 214, 24],
  ['alert', 434, 29, 16],
  ['alert', 316, 265, 16],
  ['x', 16, 131, 16],
  ['xCircle', 145, 308, 16],
  ['xThin', 281, 0, 16],
  ['blocked', 442, 198, 16],
  ['searchX', 105, 21, 16],
];

const W = 458;
const H = 324;

export function NotFoundBlock() {
  const { c } = useCopy();
  const n = c.blocks.notFound;

  return (
    <section className="block-notfound" aria-labelledby="block-notfound-title">
      <div className="block-notfound__art" aria-hidden>
        <span className="block-notfound__digits">404</span>
        {MARKS.map(([glyph, x, y, size], i) => {
          const Mark = GLYPHS[glyph];
          return (
            <Mark
              key={i}
              className="block-notfound__mark"
              data-size={size}
              focusable="false"
              style={
                {
                  left: `${(x / W) * 100}%`,
                  top: `${(y / H) * 100}%`,
                  width: `${(size / W) * 100}%`,
                } as CSSProperties
              }
            />
          );
        })}
      </div>
      <div className="block-notfound__content">
        <div className="block-notfound__message">
          <h2 id="block-notfound-title" className="block-notfound__title">
            {n.title}
          </h2>
          <p className="block-notfound__body">{n.body}</p>
        </div>
        <Button asChild size="lg">
          <a href="#">{n.cta}</a>
        </Button>
      </div>
    </section>
  );
}

export const notFoundCode = `import { Button } from '@dev-dga/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__art" aria-hidden>
        <span className="not-found__digits">404</span>
        {/* Decorative marks: absolutely positioned SVGs, gray-400 (24px) and gray-300 (16px). */}
      </div>
      <h1 id="not-found-title">Something went wrong</h1>
      <p>Sorry, we can’t find the page you’re looking for.</p>
      <Button asChild size="lg">
        <Link href="/">Back to home</Link>
      </Button>
    </section>
  );
}

/* not-found.css: DGA Page Not Found. The 404 is 200/300 bold on a 458px frame.
.not-found { display: grid; justify-items: center; gap: var(--ddga-space-8); padding: var(--ddga-space-20); text-align: center; }
.not-found__art { position: relative; inline-size: min(100%, 458px); aspect-ratio: 458 / 324; container-type: inline-size; }
.not-found__digits { position: absolute; inset: 0; font-size: 43.7cqi; line-height: 1.5; font-weight: 700;
  letter-spacing: var(--ddga-font-tracking-display); color: var(--ddga-text-secondary); }
*/`;
