---
description: 'حاوية نسبة أبعاد في React تثبّت المحتوى على نسبة مثل 16/9، فلا تتزحزح الصور والخرائط والتضمينات أثناء التحميل.'
seoTitle: 'نسبة الأبعاد: مكوّن AspectRatio حاوية بنسبة ثابتة'
---

يثبّت AspectRatio العنصر داخله على نسبة محددة، فلا يتحرك التخطيط أثناء تحميل الوسائط. مرر `ratio` مثل `"16/9"` وحدد العرض، والارتفاع يتبعه.

## When to use

استخدم AspectRatio حول الصور والفيديو والخرائط وإطارات iframe لتُحجز المساحة قبل تحميل الوسائط. مرّر `ratio` واضبط العرض؛ يتبعه الارتفاع.

استخدم `asChild` لتطبيق النسبة على عنصر الصورة مباشرة.

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
          نسبة 16 / 9
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
            النسبة {ratio}
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
        <img src={imgSrc} alt="صورة نائبة" />
      </AspectRatio>
    </div>
  );
}
```

## Accessibility

لا يضيف AspectRatio دلالات خاصة به. تحتاج الوسائط داخله إلى نص `alt` أو عنوان.

حجز المساحة يمنع القفزات في التخطيط التي تربك ذوي ضعف البصر أو الحساسية للحركة.
