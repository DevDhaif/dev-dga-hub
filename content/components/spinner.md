---
title: Spinner
slug: spinner
category: Feedback
status: stable
description: 'An indeterminate loading indicator.'
---

Spinner shows work with no known duration. By default it is `1em` and follows `currentColor`, so it scales with the text around it.

## Example: Sizes

```tsx
import { Spinner } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Spinner size="sm" aria-label="Loading (small)" />
      <Spinner size="md" aria-label="Loading (medium)" />
      <Spinner size="lg" aria-label="Loading (large)" />
      <Spinner size="xl" aria-label="Loading (extra large)" />
    </div>
  );
}
```

## Example: Tones

```tsx
import { Spinner } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Spinner size="lg" tone="neutral" aria-label="Loading (neutral)" />
      <Spinner size="lg" tone="primary" aria-label="Loading (primary)" />
      <div
        style={{
          display: 'flex',
          padding: 12,
          borderRadius: 'var(--ddga-radius-md)',
          background: 'var(--ddga-color-primary)',
        }}
      >
        <Spinner size="lg" tone="onColor" aria-label="Loading (on color)" />
      </div>
    </div>
  );
}
```

## Example: Inherits size & color

```tsx
import { Spinner } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ fontSize: '1.25rem', color: 'var(--ddga-color-primary)' }}>
      <Spinner aria-hidden="true" style={{ verticalAlign: '-0.15em' }} /> Loading your dashboard…
    </p>
  );
}
```
