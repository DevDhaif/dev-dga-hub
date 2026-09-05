---
title: Link
slug: link
category: Actions & buttons
status: stable
description: 'Accessible React text link in three tones and two sizes, with inline and external modes for Saudi government sites. Mirrors its trailing icon in RTL.'
seoTitle: 'Link: accessible React text link with external indicator'
---

Link is for navigation; use Button for actions. Set `inline` for links inside prose so they stay underlined, and `external` for outbound links.

## When to use

Use Link to move the user somewhere: another page, an anchor, or an external site. Use Button for actions that change state.

Set `inline` for links inside paragraphs so they stay underlined and readable in body text. Set `external` for outbound links so the user knows they are leaving the service. Standalone links with a trailing arrow work well for "View all" patterns in dashboards.

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

## Accessibility

Link renders a native `<a>`, so it is keyboard focusable and announced as a link. External links show a visual indicator; the icon is `aria-hidden`, so add context in the link text when the destination is not obvious.

Directional icons flip in RTL so the arrow still points along the reading direction. Write link text that describes the destination rather than "click here".
