---
description: 'تقييم بالنجوم متاح الوصول في React يعمل كحقل إدخال أو عرض للقراءة فقط، بدقّة نصف نجمة وأحجام ودرجة العلامة ودعم كامل للوحة المفاتيح.'
seoTitle: 'تقييم: مكوّن Rating بالنجوم متاح الوصول'
---

يجمع Rating تقييمًا بالنجوم أو يعرضه. استخدم `readOnly` للعرض فقط و`allowHalf` لأنصاف النجوم و`tone="brand"` للأخضر السعودي.

## When to use

استخدم Rating لجمع رضا المستفيد بعد تقديم الخدمة، أو لعرض متوسّط الدرجات. فعّل `readOnly` للعرض و`allowHalf` حين تحتاج المتوسّطات دقّة أكبر. أبقِ المقياس على خمس نجوم؛ فالمستخدمون يعرفونه.

لسؤال بخيارات مسمّاة، مثل «ما مدى سهولة الخدمة؟»، يعطي RadioGroup إجابات أوضح.

## Example: Rate a service

```tsx
import { Rating } from '@dev-dga/react';

export default function Demo() {
  return <Rating label="قيّم هذه الخدمة" defaultValue={3} />;
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

التقييم التفاعلي يحمل الدور `slider`: مفاتيح الأسهم تغيّر الدرجة، وHome وEnd يقفزان إلى الطرفين، و`aria-valuetext` يعلن القيمة مع تسميتها. التقييم للقراءة فقط يُعرض صورةً باسم متاح، فيُعلن دون أن يكون قابلًا للتركيز.

سمِّ الأداة عبر `label` أو `aria-label`، واستخدم رسالة الخطأ لشرح التقييم الناقص.
