---
title: DatePicker
slug: date-picker
category: Form inputs
status: new
description: 'A date picker with a Gregorian and Hijri toggle.'
---

DatePicker selects a single date, with an in-calendar Gregorian/Hijri toggle. The value is always `Date | null`; the Hijri view is display only.

## Example: Basic

```tsx
import { DatePicker } from '@dev-dga/react';

export default function Demo() {
  return <DatePicker label="Date of birth" helperText="Format: dd/mm/yyyy" />;
}
```

## Example: Hijri calendar (Arabic)

```tsx
import { DatePicker } from '@dev-dga/react';

export default function Demo() {
  return (
    <DatePicker
      label="التاريخ"
      defaultCalendar="hijri"
      showSecondaryCalendar
      helperText="التقويم الهجري (أم القرى) مع التاريخ الميلادي أسفل كل يوم."
    />
  );
}
```

## Example: Bounded range

```tsx
import { DatePicker } from '@dev-dga/react';

export default function Demo() {
  return (
    <DatePicker
      label="Appointment date"
      minValue={new Date(2024, 0, 1)}
      maxValue={new Date(2024, 11, 31)}
      helperText="Choose any day in 2024."
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
      <DatePicker label="Visit date" value={value} onChange={setValue} />
      <small style={{ color: 'var(--ddga-text-secondary)' }}>
        Selected: {value ? value.toISOString().slice(0, 10) : '-'}
      </small>
    </div>
  );
}
```
