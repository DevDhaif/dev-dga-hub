---
title: Skeleton
slug: skeleton
category: Feedback
status: stable
description: 'React skeleton placeholder that mimics the shape of loading content: text lines, circles, cards, and inline shapes, with a shimmer that respects reduced motion.'
seoTitle: 'Skeleton: React loading placeholder with shimmer'
---

Skeleton fakes the shape of loading content. It is `aria-hidden`, so mark the loading surface itself with `aria-busy="true"`.

## When to use

Use Skeleton when the layout of incoming content is known, such as a list of cards or a profile header. The page then keeps its shape while data loads. Match the skeleton to the final layout to avoid a jump.

For an unknown or short wait, a Spinner is enough. Do not show skeletons for more than a few seconds without feedback.

## Example: Shapes

```tsx
import { Skeleton } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, width: 480 }}>
      <Skeleton shape="circle" width={48} />
      <Skeleton shape="square" width={48} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <Skeleton shape="text" width="60%" />
        <Skeleton shape="text" width="80%" />
        <Skeleton shape="text" width="40%" />
      </div>
      <Skeleton shape="rectangle" width={120} height={80} />
    </div>
  );
}
```

## Example: Card placeholder

```tsx
import { Skeleton } from '@dev-dga/react';

export default function Demo() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading service"
      style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 280 }}
    >
      <Skeleton shape="square" width="100%" height={160} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Skeleton shape="text" />
        <Skeleton shape="text" />
        <Skeleton shape="text" width="60%" />
      </div>
      <Skeleton shape="rectangle" width={96} height={40} />
    </div>
  );
}
```

## Example: Inline placeholder

```tsx
import { Skeleton } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ fontSize: '1.25rem', maxWidth: 420 }}>
      Welcome back, <Skeleton shape="text" width="6ch" style={{ display: 'inline-block' }} />! Your
      profile is loading.
    </p>
  );
}
```

## Accessibility

Skeleton is `aria-hidden`, so it is invisible to screen readers. Mark the loading surface with `aria-busy="true"` and announce completion through a live region when the content arrives.

The shimmer animation is disabled when the user prefers reduced motion.
