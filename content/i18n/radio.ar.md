---
description: 'مجموعة أزرار اختيار متاحة الوصول في React: تسمية مشتركة، نص مساعد، حالة خطأ، تخطيط أفقي، ودعم عربي. لاختيار خيار واحد من مجموعة صغيرة ظاهرة.'
seoTitle: 'زر اختيار: مكون Radio لمجموعة اختيار مفرد متاحة الوصول'
---

ضع الخيارات داخل `RadioGroup`، واستخدم `Radio` لكل خيار. تملك المجموعة التسمية، النص المساعد، وحالة الخطأ.

## When to use

استخدم RadioGroup حين يجب على المستخدم اختيار خيار واحد من 2 إلى 5 خيارات ظاهرة، مثل نوع مقدم الطلب أو طريقة التوصيل. تساعد رؤية الخيارات كلها المستخدم على الاختيار. لعدد أكبر من الخيارات، استخدم Select. إذا جاز اختيار أكثر من خيار، استخدم Checkbox.

أعط المجموعة تسمية تطرح السؤال، ولا تضبط قيمة افتراضية إلا حين يكون خيار واحد هو المعتاد بوضوح.

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

تملك RadioGroup تسمية المجموعة، النص المساعد، ورسالة الخطأ، لذلك يعلن قارئ الشاشة المجموعة كلها سؤالاً واحداً. ينقل مفتاح Tab التركيز إلى داخل المجموعة، وتنقله مفاتيح الأسهم بين الخيارات تبعاً لاتجاه القراءة في العربية.

يختار مفتاح Space أو Enter الخيار الذي عليه التركيز. عند وجود خطأ، تحمل المجموعة `aria-invalid`.
