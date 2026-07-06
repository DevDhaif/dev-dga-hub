---
title: Link
slug: link
category: Actions & buttons
status: stable
description: 'A text link in three tones and two sizes.'
---

Link is for navigation; use Button for actions. Set `inline` for links inside prose so they stay underlined, and `external` for outbound links.

## Example: In-text links

```tsx
import { Link } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ maxWidth: '46ch', lineHeight: 1.7 }}>
      Read the{' '}
      <Link href="#docs" inline>
        service documentation
      </Link>{' '}
      before you begin, or browse{' '}
      <Link href="#guides" inline>
        the guides
      </Link>
      .
    </p>
  );
}
```

## Example: Tones

```tsx
import { Link } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Link href="#" tone="primary">
        Primary - SA green
      </Link>
      <Link href="#" tone="neutral">
        Neutral - gray
      </Link>
      <div style={{ background: 'var(--ddga-color-primary)', padding: 16, borderRadius: 8 }}>
        <Link href="#" tone="onColor">
          On-color - white on the brand green
        </Link>
      </div>
    </div>
  );
}
```

## Example: External link

```tsx
import { Link } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ maxWidth: '46ch', lineHeight: 1.7 }}>
      See the official{' '}
      <Link href="https://design.dga.gov.sa" inline external target="_blank">
        DGA design system
      </Link>{' '}
      for the source specification.
    </p>
  );
}
```

## Example: Standalone with a trailing icon (RTL-aware)

```tsx
import { Link } from '@dev-dga/react';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <Link href="#more" iconFlip endIcon={<Arrow />}>
      اعرف المزيد
    </Link>
  );
}
```
