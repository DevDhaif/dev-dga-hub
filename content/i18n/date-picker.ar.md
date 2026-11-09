---
description: 'منتقي تاريخ متاح الوصول في React يدعم التبديل داخل التقويم بين الهجري (أم القرى) والميلادي، الحدين الأدنى والأقصى، والعربية. القيمة دائماً Date.'
seoTitle: 'منتقي التاريخ: مكون DatePicker بالتقويمين الهجري والميلادي'
---

يختار DatePicker تاريخاً واحداً، ويتيح التبديل بين التقويمين الميلادي والهجري داخل التقويم. تبقى القيمة دائماً `Date | null`، ويقتصر العرض الهجري على إظهار التاريخ.

## When to use

استخدم DatePicker لتاريخ واحد مثل تاريخ الميلاد، الموعد، أو تاريخ إصدار الوثيقة. تحتاج الخدمات السعودية غالباً إلى التقويمين: فعل العرض الهجري و`showSecondaryCalendar` ليظهر مع كل يوم مقابله.

قيد النطاق بـ `minValue` و`maxValue` لمنع التواريخ غير الصالحة. لتاريخي بداية ونهاية، استخدم DateRangePicker.

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
        المحدد: {value ? value.toISOString().slice(0, 10) : '-'}
      </small>
    </div>
  );
}
```

## Accessibility

يتبع التقويم نموذج الشبكة من React Aria. تتنقل مفاتيح الأسهم بين الأيام، ويغير Page Up وPage Down الشهر. ويغلق Escape اللوحة المنبثقة. ترتبط تسمية الحقل، النص المساعد، ورسالة الخطأ بالحقل كما في TextInput. ولزر تبديل التقويم اسم متاح الوصول.

يعلن قارئ الشاشة التواريخ بنظام التقويم النشط، لذا يسمع مستخدمو التقويم الهجري تواريخ هجرية.
