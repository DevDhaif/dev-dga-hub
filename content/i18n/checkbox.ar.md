---
description: 'مربع اختيار متاح الوصول في React يدعم التسمية، النص المساعد، حالة الخطأ، الحالة غير المحددة، وثلاثة أحجام. مبني على Radix، مربوط بالنماذج، وجاهز للاتجاه العربي.'
seoTitle: 'مربع اختيار: مكون Checkbox متاح الوصول بحالة غير محددة'
---

يبدل Checkbox حالة خيار واحد. يدعم `label`، `helperText`، `errorMessage`، حالة `indeterminate`، وثلاثة أحجام.

## When to use

استخدم Checkbox لخيار يوافق عليه المستخدم ويرسله لاحقاً، مثل إقرار الموافقة أو اختيار عدة عناصر من قائمة. استخدم Switch حين يسري التغيير فوراً. استخدم الحالة غير المحددة لمربع أب يعكس مجموعة محددة جزئياً.

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
      <Checkbox label="صغير جداً (16px)" size="xs" defaultChecked />
      <Checkbox label="صغير (20px)" size="sm" defaultChecked />
      <Checkbox label="متوسط (24px)" size="md" defaultChecked />
      <Checkbox label="نمط محايد" variant="neutral" defaultChecked />
      <Checkbox label="تحديد كل العناصر" checked="indeterminate" />
    </div>
  );
}
```

## Accessibility

يعتمد Checkbox على Radix، ويعرض دور مربع الاختيار بثلاث حالات: محدد، فارغ، ومختلط. ترتبط التسمية بالمربع، لذا يبدل النقر عليها حالته. ويعلن قارئ الشاشة النص المساعد ورسالة الخطأ. يبدل مفتاح Space الحالة.

اجعل نص الموافقة قصيراً، وضع الشروط الكاملة خلف Link لتبقى التسمية مقروءة.
