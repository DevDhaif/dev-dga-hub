---
description: 'مربّع اختيار متاح الوصول في React مع تسمية ونص مساعد وحالة خطأ ووضع غير محدّد وثلاثة أحجام. مبني على Radix، ومربوط بالنماذج، وجاهز للاتجاه العربي.'
seoTitle: 'مربّع اختيار: مكوّن Checkbox متاح الوصول بحالة غير محدّدة'
---

يبدل Checkbox خيارًا واحدًا. يدعم `label` و`helperText` و`errorMessage` وحالة `indeterminate` وثلاثة أحجام.

## When to use

استخدم Checkbox لخيار يوافق عليه المستخدم ويُرسل لاحقًا، مثل إقرار الموافقة أو اختيار عدّة عناصر من قائمة. استخدم Switch حين يسري التغيير فورًا. استخدم الحالة غير المحدّدة لمربّع أب يعكس مجموعة محدّدة جزئيًا.

لاختيار واحد من مجموعة، استخدم RadioGroup.

## Example: Consent checkbox

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return <Checkbox label="أوافق على الشروط والأحكام" />;
}
```

## Example: Required & error states

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="أوافق على الشروط والأحكام" required />
      <Checkbox
        label="أوافق على الشروط والأحكام"
        error
        errorMessage="يجب قبول الشروط للمتابعة."
      />
    </div>
  );
}
```

## Example: Sizes, styles & indeterminate

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="صغير جدًا (16px)" size="xs" defaultChecked />
      <Checkbox label="صغير (20px)" size="sm" defaultChecked />
      <Checkbox label="متوسط (24px)" size="md" defaultChecked />
      <Checkbox label="نمط محايد" variant="neutral" defaultChecked />
      <Checkbox label="تحديد كل العناصر" checked="indeterminate" />
    </div>
  );
}
```

## Accessibility

Checkbox مبني على Radix ويعرض دور مربّع الاختيار بحالات محدّد وغير محدّد ومختلط. التسمية مرتبطة فالنقر عليها يبدّل المربّع، ويُعلن النص المساعد والخطأ. يبدّل مفتاح Space الحالة.

اجعل نص الموافقة قصيرًا وضع الشروط الكاملة خلف Link لتبقى التسمية مقروءة.
