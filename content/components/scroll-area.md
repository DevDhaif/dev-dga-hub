---
title: Scroll Area
slug: scroll-area
category: Navigation
status: stable
description: 'React scroll area with themed cross-browser scrollbars for vertical, horizontal, or both axes. Bounded like native overflow and keyboard scrollable when named.'
seoTitle: 'ScrollArea: React custom scroll container'
---

ScrollArea needs a bounded height or width to scroll, exactly like native overflow. Pass `aria-label` to name the focusable region.

## When to use

Use ScrollArea for bounded panels that scroll independently of the page. Examples: a sidebar menu, a long list inside a card, or a wide table on narrow screens. Give it a fixed height or width, exactly as you would with native overflow.

For page-level scrolling, rely on the browser.

## Example: Vertical

```tsx
import { ScrollArea } from '@dev-dga/react';

export default function Demo() {
  return (
    <ScrollArea
      aria-label="About the authority"
      type="always"
      style={{
        blockSize: '12rem',
        inlineSize: '20rem',
        maxWidth: '100%',
        border: '1px solid var(--ddga-color-border)',
        borderRadius: 'var(--ddga-radius-md)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1rem' }}>
        <p style={{ margin: 0 }}>
          The Digital Government Authority regulates the digital government sector in the Kingdom of
          Saudi Arabia.
        </p>
        <p style={{ margin: 0 }}>
          It sets the policies, standards, and frameworks that government entities follow to deliver
          digital services.
        </p>
        <p style={{ margin: 0 }}>
          Its mandate covers governance, enablement, and oversight of the national digital
          transformation agenda.
        </p>
        <p style={{ margin: 0 }}>
          Scroll regions like this keep long content contained while staying keyboard accessible.
        </p>
      </div>
    </ScrollArea>
  );
}
```

## Example: Horizontal

```tsx
import { ScrollArea } from '@dev-dga/react';

const TAGS = [
  'Governance',
  'Enablement',
  'Oversight',
  'Data',
  'Security',
  'Interoperability',
  'Experience',
  'Innovation',
];

export default function Demo() {
  return (
    <ScrollArea
      aria-label="Tags"
      orientation="horizontal"
      type="always"
      style={{
        inlineSize: '20rem',
        maxWidth: '100%',
        border: '1px solid var(--ddga-color-border)',
        borderRadius: 'var(--ddga-radius-md)',
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', padding: '0.75rem', width: 'max-content' }}>
        {TAGS.map((tag) => (
          <span
            key={tag}
            style={{
              whiteSpace: 'nowrap',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--ddga-radius-full)',
              background: 'var(--ddga-color-muted)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </ScrollArea>
  );
}
```

## Example: Both axes

```tsx
import { ScrollArea } from '@dev-dga/react';

export default function Demo() {
  const cells = Array.from({ length: 120 }, (_, i) => i + 1);
  return (
    <ScrollArea
      aria-label="Grid"
      orientation="both"
      type="always"
      style={{
        blockSize: '12rem',
        inlineSize: '20rem',
        maxWidth: '100%',
        border: '1px solid var(--ddga-color-border)',
        borderRadius: 'var(--ddga-radius-md)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 4rem)',
          gap: '0.5rem',
          padding: '0.75rem',
          width: 'max-content',
        }}
      >
        {cells.map((n) => (
          <div
            key={n}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              blockSize: '3rem',
              borderRadius: 'var(--ddga-radius-sm)',
              background: 'var(--ddga-color-muted)',
            }}
          >
            {n}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
```

## Accessibility

Pass `aria-label` or `aria-labelledby` to name the region; the viewport then becomes focusable so keyboard users can scroll it with the arrow keys.

The custom scrollbars are visual only. Content inside stays in the normal reading order.
