---
title: Rating
slug: rating
category: Form inputs
status: stable
description: 'Accessible React star rating that works as an input or a read-only display, with half-star precision, sizes, brand tone, and full keyboard support.'
seoTitle: 'Rating: accessible React star rating input'
---

Rating collects or displays a star score. Use `readOnly` for display, `allowHalf` for half stars, and `tone="brand"` for SA green.

## When to use

Use Rating to collect satisfaction after a service is delivered, or to display an average score. Set `readOnly` for display and `allowHalf` when averages need finer precision. Keep the scale at five stars; users know it.

For a question with labelled options, such as "How easy was this?", a RadioGroup gives clearer answers.

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

## Accessibility

The interactive Rating is a `slider` role: arrow keys change the score, Home and End jump to the extremes, and `aria-valuetext` announces the value with its label. A read-only Rating renders as an image with an accessible name, so it is announced but not focusable.

Label the control through `label` or `aria-label`, and use the error message to explain a missing rating.
