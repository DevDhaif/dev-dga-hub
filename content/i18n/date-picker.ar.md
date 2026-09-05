---
description: 'منتقي تاريخ متاح الوصول في React بتبديل داخل التقويم بين الهجري (أم القرى) والميلادي، وحدّين أدنى وأقصى، ودعم عربي. القيمة دائمًا Date.'
seoTitle: 'منتقي التاريخ: مكوّن DatePicker بالتقويمين الهجري والميلادي'
---

يختار DatePicker تاريخًا واحدًا مع تبديل بين التقويمين الميلادي والهجري داخل التقويم. القيمة دائمًا `Date | null`، والعرض الهجري للعرض فقط.

## When to use

استخدم DatePicker لتاريخ واحد مثل تاريخ الميلاد أو الموعد أو إصدار الوثيقة. تحتاج الخدمات السعودية غالبًا إلى التقويمين: فعّل العرض الهجري و`showSecondaryCalendar` ليظهر مع كل يوم مقابله.

قيّد النطاق بـ `minValue` و`maxValue` لمنع التواريخ غير الصالحة. لبداية ونهاية استخدم DateRangePicker.

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

## Accessibility

يتّبع التقويم نمط الشبكة من React Aria: مفاتيح الأسهم تتحرّك بين الأيام، وPage Up وPage Down يغيّران الشهر، وEscape يغلق اللوحة. تُربط تسمية الحقل والنص المساعد والخطأ كما في TextInput، ولزر تبديل التقويم اسم متاح.

تُعلن التواريخ بنظام التقويم النشط، فيسمع مستخدمو الهجري تواريخ هجرية.
