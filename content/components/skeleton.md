---
title: Skeleton
slug: skeleton
category: Feedback
status: stable
description: 'A placeholder shown while content loads.'
---

Skeleton fakes the shape of loading content. It is `aria-hidden`, so mark the loading surface itself with `aria-busy="true"`.

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
