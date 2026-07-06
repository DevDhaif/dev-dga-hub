---
description: 'حاوية تمرير بأشرطة منسقة مع السمة.'
---

يحتاج ScrollArea إلى ارتفاع أو عرض محدد ليعمل التمرير، تمامًا كالسلوك الأصلي. مرر `aria-label` لتسمية المنطقة القابلة للتركيز.

## Example: Vertical

```tsx
import { ScrollArea } from '@dev-dga/react';

export default function Demo() {
  return (
    <ScrollArea
      aria-label="عن الهيئة"
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
          تنظّم هيئة الحكومة الرقمية قطاع الحكومة الرقمية في المملكة العربية السعودية.
        </p>
        <p style={{ margin: 0 }}>
          وتضع السياسات والمعايير والأُطر التي تتبعها الجهات الحكومية لتقديم الخدمات الرقمية.
        </p>
        <p style={{ margin: 0 }}>
          ويشمل نطاق عملها الحوكمة والتمكين والرقابة على أجندة التحوّل الرقمي الوطني.
        </p>
        <p style={{ margin: 0 }}>
          تُبقي مناطق التمرير كهذه المحتوى الطويل محصورًا مع بقائه متاحًا عبر لوحة المفاتيح.
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
  'الحوكمة',
  'التمكين',
  'الرقابة',
  'البيانات',
  'الأمن',
  'التشغيل البيني',
  'التجربة',
  'الابتكار',
];

export default function Demo() {
  return (
    <ScrollArea
      aria-label="الوسوم"
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
      aria-label="شبكة"
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
