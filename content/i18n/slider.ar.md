---
description: 'شريط تمرير متاح الوصول في React لقيمة واحدة أو نطاق بمقبضين، مع عرض حي للقيمة وتنسيق مخصص وأحجام وربط للحقل. يعمل بلوحة المفاتيح وفي الاتجاه من اليمين إلى اليسار.'
seoTitle: 'شريط تمرير: مكون Slider متاح الوصول بقيمة حية'
---

مرر `number` لمقبض واحد أو `number[]` لنطاق. تضيف `showValue` عرضاً حياً للقيمة، وتنسقه `formatValue`.

## When to use

استخدم Slider حين يهم موضع القيمة في نطاق أكثر من الرقم الدقيق، مثل نطاق الميزانية أو درجة الرضا. مرر مصفوفة لنطاق بمقبضين. إذا كان على المستخدم إدخال قيمة دقيقة، اقرن Slider بـ NumberInput أو استخدم NumberInput وحده.

فعّل `showValue` لتظهر القيمة الحالية دون تخمين.

## Example: Single value with readout

```tsx
import { useState } from 'react';
import { Slider, type SliderValue } from '@dev-dga/react';

export default function Demo() {
  const [value, setValue] = useState<SliderValue>(40);
  return <Slider label="مستوى الصوت" value={value} onValueChange={setValue} showValue />;
}
```

## Example: Range (two thumbs)

```tsx
import { useState } from 'react';
import { Slider, type SliderValue } from '@dev-dga/react';

export default function Demo() {
  const [value, setValue] = useState<SliderValue>([20, 70]);
  return (
    <Slider
      label="نطاق السعر"
      value={value}
      onValueChange={setValue}
      thumbLabels={['الحد الأدنى', 'الحد الأقصى']}
      showValue
    />
  );
}
```

## Example: Percentage format

```tsx
import { useState } from 'react';
import { Slider, type SliderValue } from '@dev-dga/react';

export default function Demo() {
  const [value, setValue] = useState<SliderValue>(60);
  return (
    <Slider
      label="التكبير"
      value={value}
      onValueChange={setValue}
      formatValue={(n) => `${n}%`}
      showValue
    />
  );
}
```

## Example: Small and disabled

```tsx
import { Slider } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 360 }}>
      <Slider label="السطوع" defaultValue={40} size="sm" showValue />
      <Slider label="مقفل" defaultValue={70} disabled showValue />
    </div>
  );
}
```

## Accessibility

يحمل كل مقبض الدور `slider` مع قيمته الحالية، ويأخذ `aria-valuetext` من `formatValue`. لذا يسمع مستخدم قارئ الشاشة "25 بالمئة" بدل رقم خام. تحرك مفاتيح الأسهم المقبض بمقدار `step`، ويحركه Page Up وPage Down أسرع. ينقله Home وEnd إلى الحدين.

سمّ المقابض المتعددة بـ `thumbLabels`. ينعكس المسار في الاتجاه من اليمين إلى اليسار لتبقى حركة مفاتيح الأسهم طبيعية.
