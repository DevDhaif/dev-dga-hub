---
title: Spinner
slug: spinner
category: Feedback
status: stable
description: 'React indeterminate loading spinner that follows the current text size and color, with sizes, tones, and an accessible label by default.'
seoTitle: 'Spinner: React loading spinner in several sizes'
---

Spinner shows work with no known duration. By default it is `1em` and follows `currentColor`, so it scales with the text around it.

## When to use

Use Spinner while something loads and the duration is unknown: fetching a list, submitting a request, checking a status. Inside a Button, use the `loading` prop instead, which places the spinner for you.

When the duration or progress is known, use Progress. For content placeholders, use Skeleton.

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

## Accessibility

Spinner announces "Loading" by default through `aria-label`; pass your own label to say what is loading. Inside a control that already has a label, pass `aria-hidden="true"` to avoid a double announcement.

Pair the spinner with `aria-busy="true"` on the region that is loading so the state is exposed to assistive technology.
