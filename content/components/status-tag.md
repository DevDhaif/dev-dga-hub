---
title: StatusTag
slug: status-tag
category: Data display
status: stable
description: 'React status pill with a colored dot and label for request and process states: success, warning, error, info, and neutral tones in filled or subtle styles.'
seoTitle: 'StatusTag: React status pill for success, warning, error, info'
---

StatusTag pairs a colored dot with a short label. Set `tone` for the meaning and `status` for the fill; use Tag for categories instead.

## When to use

Use StatusTag wherever a record has a state: "Under review", "Approved", "Rejected", "Paid". Pick the `tone` for meaning and keep the wording consistent across screens so users learn the vocabulary.

Use Tag for categories that are not states.

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

## Accessibility

The state is carried by the text. The colored dot is decorative and `aria-hidden`, so meaning never depends on color alone.

Tones are chosen to meet contrast in both fills and both themes. Keep labels short and identical in every table and card that shows the same state.
