---
title: Toggle
slug: toggle
category: Actions & buttons
status: stable
description: 'Two-state React toggle button for toolbars and formatting controls, with variants and sizes. Exposes aria-pressed and supports icon-only use with a label.'
seoTitle: 'Toggle: React pressed-state toggle button (aria-pressed)'
---

Toggle holds pressed state, like a formatting or pin button. Icon-only toggles need an `aria-label`; for settings use Switch.

## When to use

Use Toggle for a control that is either pressed or not and takes effect immediately, like bold in an editor or pinning an item. For a setting that reads as on or off, use Switch. For picking one of several views, use ContentSwitcher or Tabs.

Group related toggles in a toolbar so users understand they act on the same content.

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

## Accessibility

Toggle is a native button that exposes its state through `aria-pressed`, so screen readers announce "pressed" or "not pressed". Space and Enter flip the state.

Icon-only toggles need an `aria-label` that names the control, not the state; the state comes from `aria-pressed`. The pressed state changes the fill as well as the color, so it does not depend on color alone.
