---
title: Checkbox
slug: checkbox
category: Form inputs
status: stable
description: 'A labelled checkbox with helper and error states.'
---

Checkbox toggles a single option. It supports `label`, `helperText`, `errorMessage`, an indeterminate state, and three sizes.

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
