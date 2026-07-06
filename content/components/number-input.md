---
title: NumberInput
slug: number-input
category: Form inputs
status: stable
description: 'A numeric field with plus and minus steppers.'
---

NumberInput holds `number | null`. `min`/`max` clamp the value, `step` sizes the increment, and `hideControls` removes the buttons.

## Example: Quantity

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return <NumberInput label="Quantity" defaultValue={1} min={0} />;
}
```

## Example: Bounded with helper text

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return <NumberInput label="Age" defaultValue={30} min={0} max={120} helperText="0 to 120" />;
}
```

## Example: Decimal step & subtle steppers

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 240 }}>
      <NumberInput label="Weight (kg)" defaultValue={1.5} step={0.5} min={0} />
      <NumberInput label="Quantity" defaultValue={2} stepperVariant="subtle" />
    </div>
  );
}
```

## Example: Error & no steppers

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 240 }}>
      <NumberInput label="Quantity" defaultValue={0} min={1} error errorMessage="Minimum is 1" />
      <NumberInput label="PIN" placeholder="0000" hideControls />
    </div>
  );
}
```
