---
title: StatusTag
slug: status-tag
category: Data display
status: stable
description: 'A dot-and-label pill for showing state.'
---

StatusTag pairs a colored dot with a short label. Set `tone` for the meaning and `status` for the fill; use Tag for categories instead.

## Example: Tones

```tsx
import { StatusTag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <StatusTag tone="success">Active</StatusTag>
      <StatusTag tone="warning">Pending</StatusTag>
      <StatusTag tone="error">Failed</StatusTag>
      <StatusTag tone="info">In progress</StatusTag>
      <StatusTag tone="neutral">Draft</StatusTag>
    </div>
  );
}
```

## Example: Status styles

```tsx
import { StatusTag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <StatusTag tone="success" status="subtle">
        Subtle
      </StatusTag>
      <StatusTag tone="success" status="ghost">
        Ghost
      </StatusTag>
      <StatusTag tone="success" status="inverted">
        Inverted
      </StatusTag>
    </div>
  );
}
```

## Example: Sizes (Arabic)

```tsx
import { StatusTag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div dir="rtl" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <StatusTag tone="info" size="sm">
        قيد المراجعة
      </StatusTag>
      <StatusTag tone="info" size="md">
        قيد المراجعة
      </StatusTag>
      <StatusTag tone="info" size="lg">
        قيد المراجعة
      </StatusTag>
    </div>
  );
}
```
