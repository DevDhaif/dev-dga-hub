---
title: Toggle
slug: toggle
category: Actions & buttons
status: stable
description: 'A two-state button, like a toolbar control.'
---

Toggle holds pressed state, like a formatting or pin button. Icon-only toggles need an `aria-label`; for settings use Switch.

## Example: Labeled toggle

```tsx
import { Toggle } from '@dev-dga/react';

export default function Demo() {
  return (
    <Toggle aria-label="Bold" defaultPressed>
      Bold
    </Toggle>
  );
}
```

## Example: Icon-only toggles

```tsx
import { Toggle } from '@dev-dga/react';

const BoldIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M6 4h7a4 4 0 0 1 0 8H6zM6 12h8a4 4 0 0 1 0 8H6z" strokeLinejoin="round" />
  </svg>
);

const ItalicIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M19 4h-9M14 20H5M15 4 9 20" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Toggle aria-label="Bold" defaultPressed>
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Italic">
        <ItalicIcon />
      </Toggle>
    </div>
  );
}
```

## Example: Variants

```tsx
import { Toggle } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Toggle aria-label="Bold" variant="default" defaultPressed>
        Default
      </Toggle>
      <Toggle aria-label="Bold" variant="outline" defaultPressed>
        Outline
      </Toggle>
    </div>
  );
}
```

## Example: Sizes

```tsx
import { Toggle } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Toggle aria-label="Small" size="sm" defaultPressed>
        Small
      </Toggle>
      <Toggle aria-label="Medium" size="md" defaultPressed>
        Medium
      </Toggle>
      <Toggle aria-label="Large" size="lg" defaultPressed>
        Large
      </Toggle>
    </div>
  );
}
```
