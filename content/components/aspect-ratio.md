---
title: Aspect Ratio
slug: aspect-ratio
category: Data display
status: stable
description: 'Keeps content at a fixed width-to-height ratio.'
---

AspectRatio locks its child to a fixed ratio, so layouts do not shift while media loads. Pass `ratio` like `"16/9"` and set the width; the height follows.

## Example: 16 / 9 box

```tsx
import { AspectRatio } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ inlineSize: '24rem', maxInlineSize: '100%' }}>
      <AspectRatio ratio="16/9">
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            background: 'linear-gradient(135deg, var(--ddga-sa-500), var(--ddga-sa-700))',
            color: '#fff',
            fontWeight: 600,
          }}
        >
          16 / 9
        </div>
      </AspectRatio>
    </div>
  );
}
```

## Example: Common ratios

```tsx
import { AspectRatio } from '@dev-dga/react';

const ratios = ['1/1', '4/3', '16/9', '21/9'];

export default function Demo() {
  return (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
        inlineSize: '40rem',
        maxInlineSize: '100%',
      }}
    >
      {ratios.map((ratio) => (
        <AspectRatio key={ratio} ratio={ratio}>
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(135deg, var(--ddga-sa-500), var(--ddga-sa-700))',
              color: '#fff',
              fontWeight: 600,
            }}
          >
            {ratio}
          </div>
        </AspectRatio>
      ))}
    </div>
  );
}
```

## Example: On an image (asChild)

```tsx
import { AspectRatio } from '@dev-dga/react';

const imgSrc =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#25935F"/><stop offset="1" stop-color="#1c6f48"/></linearGradient></defs><rect width="320" height="180" fill="url(#g)"/></svg>',
  );

export default function Demo() {
  return (
    <div style={{ inlineSize: '24rem', maxInlineSize: '100%' }}>
      <AspectRatio asChild ratio="16/9">
        <img src={imgSrc} alt="Placeholder image" />
      </AspectRatio>
    </div>
  );
}
```
