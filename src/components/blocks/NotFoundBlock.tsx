'use client';

import type { CSSProperties } from 'react';
import { Button } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

const GLYPHS = {
  x: 'M18 6 6 18M6 6l12 12',
  xThin: 'M17 7 7 17M7 7l10 10',
  xCircle: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z|m14.5 9.5-5 5m0-5 5 5',
  xSquare:
    'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z|m14.5 9.5-5 5m0-5 5 5',
  blocked: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z|M5.6 5.6l12.8 12.8',
  searchX: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z|m20 20-4-4|m13 9-4 4m0-4 4 4',
  alert:
    'M10.3 4 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 4a2 2 0 0 0-3.4 0Z|M12 9v4|M12 16.5h.01',
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
        {MARKS.map(([glyph, x, y, size], i) => (
          <svg
            key={i}
            className="block-notfound__mark"
            data-size={size}
            style={
              {
                left: `${(x / W) * 100}%`,
                top: `${(y / H) * 100}%`,
                width: `${(size / W) * 100}%`,
              } as CSSProperties
            }
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
          >
            {GLYPHS[glyph].split('|').map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
        ))}
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
