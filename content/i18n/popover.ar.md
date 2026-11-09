---
description: 'لوحة منبثقة في React مبنية على Radix لمحتوى غني مثبت على مشغل: نماذج تحرير مضمنة، مرشحات، ومعاينات، مع سهم اختياري وحصر للتركيز في وضع modal.'
seoTitle: 'لوحة منبثقة: مكون Popover مثبت على مشغل لا يحجب الصفحة'
---

يعرض Popover محتوى غنياً مثبتاً على مشغل. تحمل اللوحة `role="dialog"`، لذلك أعطها `aria-label`. مرر `modal` لحصر التركيز.

## When to use

استخدم Popover حين تحتاج أداة إلى لوحة صغيرة من المحتوى التفاعلي بجانبها: نموذج تحرير مضمن، قائمة تواريخ جاهزة، أو مرشح سريع. استخدم Tooltip للتلميحات المخصصة للقراءة فقط، وModal للمهام التي يجب أن تحجب الصفحة.

مرر `modal` حين تحوي اللوحة نموذجاً يجب على المستخدم إنهاؤه.

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
        <p style={{ margin: 0 }}>تحمل اللوحات المنبثقة محتوى غنياً وتفاعلياً مثبتاً إلى عنصر مشغل.</p>
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

تحمل اللوحة `role="dialog"`، لذلك أعطها `aria-label` أو `aria-labelledby`. يغلق مفتاح Escape اللوحة، ويعود التركيز إلى المشغل. عند تمرير `modal`، يبقى التركيز محصوراً داخل اللوحة.

اربط اللوحة بمشغل قابل للتركيز ليفتحها مستخدم لوحة المفاتيح.
