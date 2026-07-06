---
title: DgaProvider
slug: dga-provider
category: Provider & utilities
status: stable
description: 'The root provider every app must wrap once.'
---

Import the stylesheet once (`import '@dev-dga/css'`) and wrap your app in one `DgaProvider`. It supplies direction, dark mode, and theme to every component, including overlays.

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
