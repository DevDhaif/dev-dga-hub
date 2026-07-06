---
description: 'حقل رقمي بزري زيادة ونقصان.'
---

يحمل NumberInput قيمة `number | null`. يحد `min`/`max` القيمة، ويضبط `step` مقدار الزيادة، ويزيل `hideControls` الزرين.

## Example: Quantity

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return <NumberInput label="الكمية" defaultValue={1} min={0} />;
}
```

## Example: Bounded with helper text

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return <NumberInput label="العمر" defaultValue={30} min={0} max={120} helperText="0 إلى 120" />;
}
```

## Example: Decimal step & subtle steppers

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 240 }}>
      <NumberInput label="الوزن (كجم)" defaultValue={1.5} step={0.5} min={0} />
      <NumberInput label="الكمية" defaultValue={2} stepperVariant="subtle" />
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
      <NumberInput label="الكمية" defaultValue={0} min={1} error errorMessage="الحد الأدنى 1" />
      <NumberInput label="الرمز السري" placeholder="0000" hideControls />
    </div>
  );
}
```
