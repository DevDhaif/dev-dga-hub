---
description: 'منتقي تاريخ مع تبديل بين الميلادي والهجري.'
---

يختار DatePicker تاريخًا واحدًا مع تبديل بين التقويمين الميلادي والهجري داخل التقويم. القيمة دائمًا `Date | null`، والعرض الهجري للعرض فقط.

## Example: Basic

```tsx
import { DatePicker } from '@dev-dga/react';

export default function Demo() {
  return <DatePicker label="تاريخ الميلاد" helperText="الصيغة: dd/mm/yyyy" />;
}
```

## Example: Bounded range

```tsx
import { DatePicker } from '@dev-dga/react';

export default function Demo() {
  return (
    <DatePicker
      label="تاريخ الموعد"
      minValue={new Date(2024, 0, 1)}
      maxValue={new Date(2024, 11, 31)}
      helperText="اختر أي يوم في عام 2024."
    />
  );
}
```

## Example: Controlled with readout

```tsx
import { useState } from 'react';
import { DatePicker } from '@dev-dga/react';

export default function Demo() {
  const [value, setValue] = useState<Date | null>(new Date(2024, 0, 15));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <DatePicker label="تاريخ الزيارة" value={value} onChange={setValue} />
      <small style={{ color: 'var(--ddga-text-secondary)' }}>
        المحدَّد: {value ? value.toISOString().slice(0, 10) : '-'}
      </small>
    </div>
  );
}
```
