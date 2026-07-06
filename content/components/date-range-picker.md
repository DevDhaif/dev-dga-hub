---
title: DateRangePicker
slug: date-range-picker
category: Form inputs
status: new
description: 'Start and end date selection on one calendar.'
---

DateRangePicker selects a `{ start, end }` range and highlights the days between. It shares the Gregorian/Hijri toggle and calendar core with DatePicker.

## Example: Basic

```tsx
import { DateRangePicker } from '@dev-dga/react';

export default function Demo() {
  return <DateRangePicker label="Trip dates" helperText="Pick a start and end date." />;
}
```

## Example: Presets (composition recipe)

```tsx
import { useState } from 'react';
import { DateRangePicker, Button, type DateRange } from '@dev-dga/react';

const atMidnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const today = atMidnight(new Date());
const daysAgo = (n: number) => {
  const d = atMidnight(new Date());
  d.setDate(d.getDate() - n);
  return d;
};

const presets: { label: string; range: DateRange }[] = [
  { label: 'Today', range: { start: today, end: today } },
  { label: 'Last 7 days', range: { start: daysAgo(6), end: today } },
  { label: 'Last 30 days', range: { start: daysAgo(29), end: today } },
  {
    label: 'This month',
    range: { start: new Date(today.getFullYear(), today.getMonth(), 1), end: today },
  },
];

export default function Demo() {
  const [value, setValue] = useState<DateRange | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {presets.map((p) => (
          <Button key={p.label} variant="secondary" size="sm" onClick={() => setValue(p.range)}>
            {p.label}
          </Button>
        ))}
      </div>
      <DateRangePicker label="Reporting period" value={value} onChange={setValue} />
    </div>
  );
}
```

## Example: Hijri calendar (Arabic)

```tsx
import { DateRangePicker } from '@dev-dga/react';

export default function Demo() {
  return <DateRangePicker label="تواريخ الرحلة" defaultCalendar="hijri" showSecondaryCalendar />;
}
```
