---
description: 'حقل نصّي متعدّد الأسطر متاح الوصول في React يشارك TextInput عقد التسمية والنص المساعد والخطأ، مع rows والتحكّم في تغيير الحجم وأنماط التعبئة.'
seoTitle: 'منطقة نصّية: مكوّن Textarea متعدّد الأسطر متاح الوصول'
---

يتشارك Textarea عقد الحقول مع TextInput. حدد `rows` للارتفاع الابتدائي و`resize="none"` لتثبيته.

## When to use

استخدم Textarea للنص الذي يتجاوز سطرًا: تفاصيل شكوى، أو مبرّر طلب، أو ملاحظات. اضبط `rows` لإظهار الطول المتوقّع، ولا تستخدم `resize="none"` إلا حين لا يمكن للتخطيط أن يتمدّد. للقيمة القصيرة استخدم TextInput.

إن فرضت حدًّا أقصى للطول فاعرض العدد المتبقّي في `helperText` حتى لا يتفاجأ المستخدم عند الإرسال.

## Example: Message field

```tsx
import { Textarea } from '@dev-dga/react';

export default function Demo() {
  return (
    <Textarea
      label="رسالتك"
      placeholder="اكتب رسالتك…"
      helperText="اجعلها أقل من 500 حرف."
      maxLength={500}
    />
  );
}
```

## Example: Required & error states

```tsx
import { Textarea } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <Textarea label="ملاحظات" placeholder="اكتب رسالتك…" required />
      <Textarea label="ملاحظات" error errorMessage="هذا الحقل مطلوب." />
    </div>
  );
}
```

## Example: Fill styles & fixed height

```tsx
import { Textarea } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <Textarea label="افتراضي" variant="default" defaultValue="نص مُدخَل" />
      <Textarea label="تعبئة أفتح" variant="filled-lighter" defaultValue="نص مُدخَل" />
      <Textarea label="ارتفاع ثابت" resize="none" placeholder="لا يمكن تغيير حجم هذا الحقل." />
    </div>
  );
}
```

## Accessibility

تستخدم التسمية والنص المساعد ورسالة الخطأ الربط نفسه في TextInput: `htmlFor` للتسمية و`aria-describedby` للرسائل، مع `aria-invalid` عند الخطأ.

اجعل الارتفاع الافتراضي سخيًّا، لأن مستخدم لوحة المفاتيح لا يستطيع سحب مقبض تغيير الحجم. أعلن حدود الأحرف نصًّا لا لونًا.
