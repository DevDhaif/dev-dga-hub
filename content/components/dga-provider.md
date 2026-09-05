---
title: DgaProvider
slug: dga-provider
category: Provider & utilities
status: stable
description: 'DgaProvider is the root of every @dev-dga app: it sets direction, dark mode, and the brand theme, and hosts the portal so overlays inherit them. Wrap once.'
seoTitle: 'DgaProvider: root provider for theme, direction, and dark mode'
---

Import the stylesheet once (`import '@dev-dga/css'`) and wrap your app in one `DgaProvider`. It supplies direction, dark mode, and theme to every component, including overlays.

## When to use

Use DgaProvider once at the root of your application, after importing `@dev-dga/css`. Set `dir="rtl"` for Arabic, `mode="dark"` for dark mode, and `theme` to pick the brand palette. Every component, including modals and menus rendered in portals, reads these values from the provider.

Nested providers are possible for a preview that differs from the page, such as the examples on this site.

## Example: Brand theme

```tsx
import { DgaProvider, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <DgaProvider
      theme={{ primary: 'lavender' }}
      style={{ padding: 24, borderRadius: 12, background: 'var(--ddga-color-background)' }}
    >
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button>Themed action</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </DgaProvider>
  );
}
```

## Example: Dark mode

```tsx
import { DgaProvider, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <DgaProvider
      mode="dark"
      style={{
        padding: 24,
        borderRadius: 12,
        background: 'var(--ddga-color-background)',
        color: 'var(--ddga-color-foreground)',
      }}
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <span>Everything inside inherits dark mode.</span>
        <Button>Confirm</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </DgaProvider>
  );
}
```

## Example: RTL with Arabic

```tsx
import { DgaProvider, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <DgaProvider
      dir="rtl"
      locale="ar"
      style={{ padding: 24, borderRadius: 12, background: 'var(--ddga-color-background)' }}
    >
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button>تأكيد الطلب</Button>
        <Button variant="secondary">إلغاء</Button>
      </div>
    </DgaProvider>
  );
}
```

## Accessibility

The provider sets the `dir` attribute so the browser's bidirectional algorithm and assistive technology follow the reading direction. Set `lang` on the document yourself so screen readers switch voices for Arabic.

Overlays render inside the provider's portal, so they inherit direction, theme, and contrast settings rather than falling back to the document defaults.
