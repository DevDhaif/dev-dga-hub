---
description: 'منتقي نطاق تاريخ متاح الوصول في React لتاريخي البداية والنهاية على تقويم واحد. يدعم الإعدادات الجاهزة، العرضين الهجري والميلادي، والحدود، ويشارك DatePicker نواته.'
seoTitle: 'منتقي نطاق التاريخ: مكون DateRangePicker بدعم التقويم الهجري'
---

يحدد DateRangePicker نطاقاً `{ start, end }` ويظلل الأيام بينهما. يتشارك مع DatePicker زر التبديل بين الميلادي والهجري ونواة التقويم.

## When to use

استخدم DateRangePicker لفترات التقارير، طلبات الإجازة، نوافذ الحجز، أو أي عامل تصفية ببداية ونهاية. وفر إعدادات جاهزة مثل "آخر 30 يوماً" للنطاقات الشائعة. إذا كفى تاريخ واحد، استخدم DatePicker.

يتشارك المنتقيان زر التبديل الهجري، مما يتيح استخدام النطاق نفسه مع تقويم أم القرى.

## Example: Basic

```tsx
import { DateRangePicker } from '@dev-dga/react';

export default function Demo() {
  return <DateRangePicker label="تواريخ الرحلة" helperText="اختر تاريخ البداية والنهاية." />;
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
  { label: 'اليوم', range: { start: today, end: today } },
  { label: 'آخر 7 أيام', range: { start: daysAgo(6), end: today } },
  { label: 'آخر 30 يوماً', range: { start: daysAgo(29), end: today } },
  {
    label: 'هذا الشهر',
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
      <DateRangePicker label="فترة التقرير" value={value} onChange={setValue} />
    </div>
  );
}
```

## Accessibility

يستخدم تقويم النطاق نموذج لوحة المفاتيح نفسه في DatePicker. تتنقل مفاتيح الأسهم بين الأيام، ويغير Page Up وPage Down الشهر. ويختار Enter البداية ثم النهاية. يعلن قارئ الشاشة النطاق المحدد.

ترتبط تسمية الحقل، النص المساعد، ورسالة الخطأ بالحقل كما في TextInput. تعمل الإعدادات الجاهزة كأزرار عادية، لذا يصل إليها مستخدم لوحة المفاتيح.
