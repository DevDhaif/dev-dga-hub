---
description: 'مجموعة أزرار اختيار متاحة الوصول في React بتسمية مشتركة ونص مساعد وحالة خطأ وتخطيط أفقي ودعم عربي. اختيار واحد من مجموعة صغيرة ظاهرة.'
seoTitle: 'زر اختيار: مكوّن Radio لمجموعة اختيار مفرد متاحة الوصول'
---

لف الخيارات داخل `RadioGroup` مع `Radio` لكل خيار. تملك المجموعة التسمية والنص المساعد وحالة الخطأ.

## When to use

استخدم RadioGroup حين يجب على المستخدم اختيار خيار واحد من اثنين إلى خمسة خيارات ظاهرة، ورؤيتها كلّها تساعده، مثل نوع مقدّم الطلب أو طريقة التوصيل. لخيارات أكثر استخدم Select. إن جاز اختيار أكثر من خيار فاستخدم Checkbox.

أعطِ المجموعة تسمية تطرح السؤال، ولا تضبط قيمة افتراضية إلا حين يكون خيار واحد هو المعتاد بوضوح.

## Example: Single choice

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <RadioGroup label="خطة الاشتراك" defaultValue="pro" name="plan">
      <Radio value="free" label="مجاني" />
      <Radio value="pro" label="احترافي" />
      <Radio value="enterprise" label="للمؤسسات" />
    </RadioGroup>
  );
}
```

## Example: Variants

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <RadioGroup label="أساسي (افتراضي)" defaultValue="a">
        <Radio value="a" label="الخيار أ" />
        <Radio value="b" label="الخيار ب" />
      </RadioGroup>
      <RadioGroup label="محايد" variant="neutral" defaultValue="a">
        <Radio value="a" label="الخيار أ" />
        <Radio value="b" label="الخيار ب" />
      </RadioGroup>
    </div>
  );
}
```

## Example: Horizontal with helper text

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <RadioGroup
      label="تكرار الإشعارات"
      orientation="horizontal"
      helperText="يمكنك تغيير ذلك في أي وقت من الإعدادات."
      defaultValue="daily"
    >
      <Radio value="instant" label="فوري" />
      <Radio value="daily" label="يومي" />
      <Radio value="weekly" label="أسبوعي" />
    </RadioGroup>
  );
}
```

## Accessibility

تملك RadioGroup تسمية المجموعة والنص المساعد والخطأ، فتُعلن المجموعة كلّها سؤالًا واحدًا. ينقل Tab التركيز إلى داخل المجموعة وتتحرّك مفاتيح الأسهم بين الخيارات تبعًا لاتجاه القراءة في العربية.

يختار Space أو Enter الخيار المركَّز عليه. يضبط الخطأ `aria-invalid` على المجموعة.
