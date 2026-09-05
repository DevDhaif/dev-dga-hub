---
title: Checkbox
slug: checkbox
category: Form inputs
status: stable
description: 'Accessible React checkbox with label, helper text, error state, indeterminate mode, and three sizes. Built on Radix, wired for forms, and RTL ready.'
seoTitle: 'Checkbox: accessible React checkbox with indeterminate state'
---

Checkbox toggles a single option. It supports `label`, `helperText`, `errorMessage`, an indeterminate state, and three sizes.

## When to use

Use Checkbox for an option the user opts into and submits later, such as a consent statement or selecting several items in a list. Use Switch when the change applies immediately. Use the indeterminate state for a parent checkbox that reflects a partially selected group.

For a single choice from a set, use RadioGroup.

## Example: Consent checkbox

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return <Checkbox label="I agree to the terms and conditions" />;
}
```

## Example: Required & error states

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="I agree to the terms and conditions" required />
      <Checkbox
        label="I agree to the terms and conditions"
        error
        errorMessage="You must accept the terms to continue."
      />
    </div>
  );
}
```

## Example: Sizes, styles & indeterminate

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="x Small (16px)" size="xs" defaultChecked />
      <Checkbox label="Small (20px)" size="sm" defaultChecked />
      <Checkbox label="Medium (24px)" size="md" defaultChecked />
      <Checkbox label="Neutral style" variant="neutral" defaultChecked />
      <Checkbox label="Select all items" checked="indeterminate" />
    </div>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return <Checkbox label="أوافق على الشروط والأحكام" defaultChecked />;
}
```

## Accessibility

Checkbox is built on Radix and exposes the checkbox role with checked, unchecked, and mixed states. The label is associated so clicking it toggles the box, and helper text and errors are announced. Space toggles the state.

Keep consent text short and put the full terms behind a Link so the label stays readable.
