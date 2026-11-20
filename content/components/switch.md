---
title: Switch
slug: switch
category: Form inputs
status: stable
description: 'Accessible React switch for a single binary setting that applies immediately, with label, helper text, and states. Built on Radix and mirrored in RTL.'
seoTitle: 'Switch: accessible React on/off toggle switch'
---

Switch flips one boolean that takes effect right away. For a choice confirmed on submit, use Checkbox instead.

## When to use

Use Switch for a setting that takes effect the moment it changes: notifications on or off, dark mode, or showing archived items. If the choice is saved when a form is submitted, use Checkbox, because a switch implies an immediate result.

Label the setting, not the states. "Email alerts" is clearer than "On/Off".

In a settings list, pass `labelPosition="start"` so the label leads and the switch lines up at the end of each row. `checkIcon` shows the SDGA check inside the thumb while the switch is on.

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

## Example: Settings list (label first)

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 380 }}>
      <Switch label="Email alerts" helperText="Sends a summary every morning." labelPosition="start" defaultChecked />
      <Switch label="SMS alerts" labelPosition="start" />
    </div>
  );
}
```

## Example: Check icon

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return <Switch label="Enable notifications" checkIcon defaultChecked />;
}
```

## Accessibility

Switch exposes `role="switch"` with `aria-checked`, so screen readers announce it as a switch and read its state. Space toggles it, and the label is associated so clicking it works.

The thumb moves along the reading direction, so the on position sits at the inline end in RTL. The thumb position carries the state as well as the color.
