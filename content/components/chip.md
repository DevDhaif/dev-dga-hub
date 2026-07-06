---
title: Chip
slug: chip
category: Form inputs
status: new
description: 'A selectable pill for filters and multi-select.'
---

Chip is a toggle button for filter bars and multi-select lists. For a static label use Tag instead.

## Example: Variants

```tsx
import { Chip } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="primary" defaultSelected>
        Primary
      </Chip>
      <Chip variant="neutral">Neutral</Chip>
      <Chip variant="neutral" defaultSelected>
        Neutral
      </Chip>
    </div>
  );
}
```

## Example: Filter bar (controlled)

```tsx
import { useState } from 'react';
import { Chip } from '@dev-dga/react';

const STATUSES = ['All', 'Open', 'In progress', 'Closed', 'Archived'];

export default function Demo() {
  const [active, setActive] = useState<string[]>(['Open']);

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
        Verified
      </Chip>
      <Chip variant="neutral" trailingIcon={<Check />}>
        Selected
      </Chip>
    </div>
  );
}
```

## Example: Rounded (Arabic)

```tsx
import { Chip } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip rounded defaultSelected>
        الكل
      </Chip>
      <Chip rounded>مفتوحة</Chip>
      <Chip rounded>قيد المعالجة</Chip>
      <Chip rounded>مغلقة</Chip>
    </div>
  );
}
```
