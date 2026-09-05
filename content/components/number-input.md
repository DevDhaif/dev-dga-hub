---
title: NumberInput
slug: number-input
category: Form inputs
status: stable
description: 'React numeric input with plus and minus steppers, min, max, step, and decimal support. Holds number or null, wires label and error states, and stays LTR in Arabic.'
seoTitle: 'NumberInput: React numeric field with stepper buttons'
---

NumberInput holds `number | null`. `min`/`max` clamp the value, `step` sizes the increment, and `hideControls` removes the buttons.

## When to use

Use NumberInput for quantities and counts the user might nudge: number of dependents, items, or years. `min` and `max` clamp the value and `step` sizes each increment, which suits fees and decimal amounts.

Use TextInput with `inputMode="numeric"` for identifiers such as national IDs or phone numbers, because those are digits, not numbers. Set `hideControls` when steppers add noise in dense forms.

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

## Accessibility

The label, helper text, and error message are wired the same way as TextInput. The ArrowUp and ArrowDown keys change the value by `step`, and the stepper buttons carry accessible names.

Values are clamped rather than rejected, so users do not lose their input. Digits remain left to right inside Arabic layouts so the number reads correctly.
