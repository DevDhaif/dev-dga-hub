---
description: 'تقييم بالنجوم متاح الوصول في React، يصلح حقلاً للإدخال أو عرضاً للقراءة فقط: دقة نصف نجمة، أحجام، درجة العلامة، ودعم كامل للوحة المفاتيح.'
seoTitle: 'تقييم: مكون Rating بالنجوم متاح الوصول'
---

يجمع Rating تقييماً بالنجوم أو يعرضه. استخدم `readOnly` للعرض فقط، `allowHalf` لأنصاف النجوم، و`tone="brand"` للأخضر السعودي.

## When to use

استخدم Rating لقياس رضا المستفيد بعد تقديم الخدمة، أو لعرض متوسط الدرجات. فعّل `readOnly` للعرض، و`allowHalf` حين تحتاج المتوسطات دقة أكبر. أبق المقياس على 5 نجوم لأن المستخدمين يعرفونه.

لسؤال بخيارات مسماة، مثل "ما مدى سهولة الخدمة؟"، يعطي RadioGroup إجابات أوضح.

## Example: Rate a service

```tsx
import { Rating } from '@dev-dga/react';

export default function Demo() {
  return <Rating label="قيم هذه الخدمة" defaultValue={3} />;
}
```

## Example: Half-star precision

```tsx
import { Rating } from '@dev-dga/react';

export default function Demo() {
  return <Rating label="الجودة" defaultValue={3.5} allowHalf />;
}
```

## Example: Sizes

```tsx
import { Rating } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Rating label="صغير" defaultValue={3} size="sm" />
      <Rating label="متوسط" defaultValue={3} size="md" />
      <Rating label="كبير" defaultValue={3} size="lg" />
    </div>
  );
}
```

## Accessibility

يحمل التقييم التفاعلي الدور `slider`. تغير مفاتيح الأسهم الدرجة، وينقلها مفتاحا Home وEnd إلى الطرفين. يعلن `aria-valuetext` القيمة مع تسميتها. يعرض التقييم للقراءة فقط صورةً باسم متاح، ليعلنه قارئ الشاشة دون أن يقبل التركيز.

أعط الأداة اسماً عبر `label` أو `aria-label`، واستخدم رسالة الخطأ لشرح التقييم الناقص.
