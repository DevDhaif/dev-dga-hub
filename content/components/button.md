---
title: Button
slug: button
category: Actions & buttons
status: stable
description: 'The primary interactive control for actions.'
---

Button triggers an action. Pick a `variant` and `size`, add `startIcon`/`endIcon` or `loading`, and use `asChild` to render a link that looks like a button.

## Example: Variants

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="black">Black</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
```

## Example: Sizes

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
```

## Example: Icons & loading

```tsx
import { Button } from '@dev-dga/react';

const Download = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button startIcon={<Download />}>Download</Button>
      <Button variant="outline" loading>
        Saving
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}
```

## Example: Arabic label

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button>تأكيد الطلب</Button>
      <Button variant="secondary">إلغاء</Button>
    </div>
  );
}
```

## Example: As a link (asChild)

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Button asChild>
      <a href="https://github.com/DevDhaif/dev-dga-hub" target="_blank" rel="noreferrer">
        Open the repository
      </a>
    </Button>
  );
}
```
