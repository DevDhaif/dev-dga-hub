---
description: 'يثبت المحتوى على نسبة عرض إلى ارتفاع محددة.'
---

يثبّت AspectRatio العنصر داخله على نسبة محددة، فلا يتحرك التخطيط أثناء تحميل الوسائط. مرر `ratio` مثل `"16/9"` وحدد العرض، والارتفاع يتبعه.

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
