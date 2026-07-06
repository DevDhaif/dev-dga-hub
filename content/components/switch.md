---
title: Switch
slug: switch
category: Form inputs
status: stable
description: 'An on/off toggle that applies immediately.'
---

Switch flips one boolean that takes effect right away. For a choice confirmed on submit, use Checkbox instead.

## Example: Setting toggle

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return <Switch label="Enable notifications" />;
}
```

## Example: On by default, with a hint

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return (
    <Switch
      label="Subscribe to the newsletter"
      helperText="Sends a push when new mail arrives."
      defaultChecked
    />
  );
}
```

## Example: States

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Switch label="Two-factor authentication" required defaultChecked />
      <Switch label="Maintenance mode" disabled />
      <Switch label="Location sharing" error errorMessage="This is required to continue." />
    </div>
  );
}
```

## Example: Arabic label

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return <Switch label="تفعيل الإشعارات" defaultChecked />;
}
```
