---
description: 'حقل رقمي في React بأزرار زيادة ونقصان، مع min، max، step، ودعم الكسور. يحمل رقماً أو null، ويربط التسمية وحالات الخطأ. يبقى من اليسار إلى اليمين في العربية.'
seoTitle: 'حقل رقمي: مكون NumberInput بأزرار زيادة ونقصان'
---

يحمل NumberInput قيمة `number | null`. يحد `min`/`max` القيمة، ويضبط `step` مقدار الزيادة. يزيل `hideControls` الزرين.

## When to use

استخدم NumberInput للكميات والأعداد التي قد يعدلها المستخدم خطوة خطوة: عدد التابعين، العناصر، أو السنوات. يحد `min` و`max` القيمة، ويضبط `step` مقدار كل زيادة. يناسب هذا الرسوم والمبالغ العشرية.

استخدم TextInput مع `inputMode="numeric"` للمعرفات مثل رقم الهوية أو الجوال، لأنها أرقام يكتبها المستخدم كما هي، ولا تدخل في أي حساب. فعّل `hideControls` حين تزيد الأزرار ازدحام النماذج الكثيفة.

## Example: Quantity

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return <NumberInput label="الكمية" defaultValue={1} min={0} />;
}
```

## Example: Bounded with helper text

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return <NumberInput label="العمر" defaultValue={30} min={0} max={120} helperText="0 إلى 120" />;
}
```

## Example: Decimal step & subtle steppers

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 240 }}>
      <NumberInput label="الوزن (كجم)" defaultValue={1.5} step={0.5} min={0} />
      <NumberInput label="الكمية" defaultValue={2} stepperVariant="subtle" />
    </div>
  );
}
```

## Example: Error & no steppers

```tsx
import { NumberInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 240 }}>
      <NumberInput label="الكمية" defaultValue={0} min={1} error errorMessage="الحد الأدنى 1" />
      <NumberInput label="الرمز السري" placeholder="0000" hideControls />
    </div>
  );
}
```

## Accessibility

يربط NumberInput التسمية، النص المساعد، ورسالة الخطأ بالحقل كما يفعل TextInput. يغير مفتاحا ArrowUp وArrowDown القيمة بمقدار `step`، ولأزرار الزيادة والنقصان أسماء متاحة.

يقيد NumberInput القيمة ضمن الحدود بدل رفضها، حتى لا يفقد المستخدم ما كتبه. تبقى الأرقام من اليسار إلى اليمين داخل التخطيطات العربية لتظهر بترتيبها الصحيح.
