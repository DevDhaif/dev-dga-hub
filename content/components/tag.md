---
title: Tag
slug: tag
category: Data display
status: stable
description: 'A compact label for categories and keywords.'
---

Tag labels content. Pick a tone (the `*-subtle` fills are the SDGA set), add icons, or make it removable with `dismissible`.

## Example: Variants

```tsx
import { Tag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag variant="secondary-subtle">Neutral</Tag>
      <Tag variant="success-subtle">Approved</Tag>
      <Tag variant="warning-subtle">Pending</Tag>
      <Tag variant="destructive-subtle">Rejected</Tag>
      <Tag variant="info-subtle">In review</Tag>
      <Tag variant="primary-subtle">Featured</Tag>
    </div>
  );
}
```

## Example: Sizes and shape

```tsx
import { Tag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <Tag size="sm" variant="info-subtle">
        Small
      </Tag>
      <Tag size="md" variant="info-subtle">
        Medium
      </Tag>
      <Tag size="lg" variant="info-subtle">
        Large
      </Tag>
      <Tag shape="squared" variant="info-subtle">
        Squared
      </Tag>
      <Tag outlined variant="info-subtle">
        Outlined
      </Tag>
    </div>
  );
}
```

## Example: With icons

```tsx
import { Tag } from '@dev-dga/react';

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    aria-hidden
  >
    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <Tag variant="success-subtle" startIcon={<Check />}>
        Verified
      </Tag>
      <Tag iconOnly size="md" variant="warning-subtle" aria-label="Warning">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
          <circle cx="12" cy="12" r="10" />
        </svg>
      </Tag>
    </div>
  );
}
```

## Example: Dismissible (Arabic)

```tsx
import { Tag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div dir="rtl" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag dismissible variant="primary-subtle" closeLabel="إزالة">
        الرياض
      </Tag>
      <Tag dismissible variant="success-subtle" closeLabel="إزالة">
        جدة
      </Tag>
      <Tag dismissible variant="info-subtle" closeLabel="إزالة">
        مكة المكرمة
      </Tag>
    </div>
  );
}
```
