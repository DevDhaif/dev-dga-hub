---
title: Rating
slug: rating
category: Form inputs
status: stable
description: 'A star rating, interactive or read-only.'
---

Rating collects or displays a star score. Use `readOnly` for display, `allowHalf` for half stars, and `tone="brand"` for SA green.

## Example: Rate a service

```tsx
import { Rating } from '@dev-dga/react';

export default function Demo() {
  return <Rating label="Rate this service" defaultValue={3} />;
}
```

## Example: Half-star precision

```tsx
import { Rating } from '@dev-dga/react';

export default function Demo() {
  return <Rating label="Quality" defaultValue={3.5} allowHalf />;
}
```

## Example: Read-only average

```tsx
import { Rating } from '@dev-dga/react';

export default function Demo() {
  return (
    <Rating
      label="متوسط التقييم"
      value={4.5}
      tone="brand"
      allowHalf
      readOnly
      helperText="مبني على 248 تقييمًا"
    />
  );
}
```

## Example: Sizes

```tsx
import { Rating } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Rating label="Small" defaultValue={3} size="sm" />
      <Rating label="Medium" defaultValue={3} size="md" />
      <Rating label="Large" defaultValue={3} size="lg" />
    </div>
  );
}
```
