---
description: 'حبة قابلة للتحديد للمرشحات والتحديد المتعدد.'
---

Chip زر تبديل يناسب أشرطة التصفية والتحديد المتعدد. للتسمية الثابتة استخدم Tag بدلًا منه.

## Example: Variants

```tsx
import { Chip } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Chip variant="primary">أساسي</Chip>
      <Chip variant="primary" defaultSelected>
        أساسي
      </Chip>
      <Chip variant="neutral">محايد</Chip>
      <Chip variant="neutral" defaultSelected>
        محايد
      </Chip>
    </div>
  );
}
```

## Example: Filter bar (controlled)

```tsx
import { useState } from 'react';
import { Chip } from '@dev-dga/react';

const STATUSES = ['الكل', 'مفتوحة', 'قيد المعالجة', 'مغلقة', 'مؤرشفة'];

export default function Demo() {
  const [active, setActive] = useState<string[]>(['مفتوحة']);

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 420 }}>
      {STATUSES.map((status) => (
        <Chip
          key={status}
          selected={active.includes(status)}
          onSelectedChange={(sel) =>
            setActive((prev) => (sel ? [...prev, status] : prev.filter((s) => s !== status)))
          }
        >
          {status}
        </Chip>
      ))}
    </div>
  );
}
```

## Example: With icons

```tsx
import { Chip } from '@dev-dga/react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Chip leadingIcon={<Check />} defaultSelected>
        موثّقة
      </Chip>
      <Chip variant="neutral" trailingIcon={<Check />}>
        محدَّدة
      </Chip>
    </div>
  );
}
```
