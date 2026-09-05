---
description: 'لوح منبثق في React مبني على Radix لمحتوى غني مثبّت على مشغّل: نماذج تحرير مضمّنة، ومرشّحات، ومعاينات، مع سهم اختياري وحصر تركيز في الوضع المعطِّل.'
seoTitle: 'لوح منبثق: مكوّن Popover غير معطِّل مثبّت على مشغّل'
---

يثبت Popover محتوى غنيًا عند مشغل. يعرض `role="dialog"` لذا أعطه `aria-label`، ومرر `modal` لحصر التركيز.

## When to use

استخدم Popover حين تحتاج أداة إلى لوحة صغيرة من المحتوى التفاعلي بجانبها: نموذج تحرير مضمّن، أو قائمة إعدادات تاريخ جاهزة، أو مرشّح سريع. استخدم Tooltip للتلميحات للقراءة فقط وModal للمهام التي يجب أن تعطّل الصفحة.

مرّر `modal` حين تحوي اللوحة نموذجًا يجب على المستخدم إنهاؤه.

## Example: Default

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverClose, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>افتح اللوح المنبثق</Button>
      </PopoverTrigger>
      <PopoverContent aria-label="التفاصيل">
        <PopoverClose closeLabel="إغلاق" />
        <p style={{ margin: 0 }}>تحمل اللوحات المنبثقة محتوى غنياً وتفاعلياً مثبّتاً إلى عنصر مُشغِّل.</p>
      </PopoverContent>
    </Popover>
  );
}
```

## Example: With arrow

```tsx
import { Popover, PopoverTrigger, PopoverContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">مع سهم</Button>
      </PopoverTrigger>
      <PopoverContent arrow aria-label="ملاحظة">
        <p style={{ margin: 0 }}>يشير السهم إلى عنصر التشغيل.</p>
      </PopoverContent>
    </Popover>
  );
}
```

## Accessibility

تعرض اللوحة `role="dialog"`، فأعطها `aria-label` أو `aria-labelledby`. يغلقها Escape ويعود التركيز إلى المشغّل. مع `modal` يُحصر التركيز داخل اللوحة.

ثبّت اللوح على مشغّل قابل للتركيز ليفتحه مستخدم لوحة المفاتيح.
