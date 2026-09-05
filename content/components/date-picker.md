---
title: DatePicker
slug: date-picker
category: Form inputs
status: new
description: 'Accessible React date picker with an in-calendar Hijri (Umm al-Qura) and Gregorian toggle, min and max bounds, and Arabic support. Value is always a Date.'
seoTitle: 'DatePicker: React date picker with Hijri and Gregorian calendars'
---

DatePicker selects a single date, with an in-calendar Gregorian/Hijri toggle. The value is always `Date | null`; the Hijri view is display only.

## When to use

Use DatePicker for a single date such as a birth date, an appointment, or a document issue date. Saudi services often need both calendars: enable the Hijri view and `showSecondaryCalendar` so each day shows its counterpart.

Bound the range with `minValue` and `maxValue` to prevent invalid dates. For a start and end, use DateRangePicker.

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

## Accessibility

The calendar follows the grid pattern from React Aria. Arrow keys move between days, Page Up and Page Down change the month, and Escape closes the popover. The field label, helper text, and error are wired like TextInput, and the calendar toggle has an accessible name.

Dates are announced in the active calendar system, so Hijri users hear Hijri dates.
