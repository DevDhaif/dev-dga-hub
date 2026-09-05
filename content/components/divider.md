---
title: Divider
slug: divider
category: Data display
status: stable
description: 'React divider for horizontal or vertical separation, with optional inline label, tones, and a decorative mode. Uses the separator role.'
seoTitle: 'Divider: React horizontal and vertical separator'
---

Divider separates content, horizontally or vertically. Pass children for an inline label, or `decorative` when it is purely visual.

## When to use

Use Divider to separate sections inside a card, a form, or a toolbar. Add a label for "or" style separators between alternative actions.

Prefer spacing over dividers when the layout already reads well; too many lines add noise.

## Example: Horizontal and vertical

```tsx
import { Divider } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320 }}>
      <p style={{ margin: 0 }}>National registry</p>
      <Divider style={{ margin: '12px 0' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 24 }}>
        <span>Home</span>
        <Divider orientation="vertical" />
        <span>Settings</span>
        <Divider orientation="vertical" />
        <span>Logout</span>
      </div>
    </div>
  );
}
```

## Example: Labeled

```tsx
import { Divider } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Divider>or continue with</Divider>
      <Divider labelPosition="start">Recent</Divider>
      <Divider variant="dashed">drop files here</Divider>
    </div>
  );
}
```

## Example: Tones

```tsx
import { Divider } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Divider tone="neutral" />
      <Divider tone="primary" />
      <div style={{ background: 'var(--ddga-color-primary)', padding: 16, borderRadius: 8 }}>
        <Divider tone="white" />
      </div>
    </div>
  );
}
```

## Accessibility

Divider renders `role="separator"` with `aria-orientation` so assistive technology knows its direction. Pass `decorative` for purely visual lines to render `role="none"` and keep them out of the accessibility tree.

A labelled divider reads its label as text.
