---
description: 'حقل اختيار مفرد متاح الوصول في React مبني على Radix، مع تسمية ونص مساعد وحالة خطأ ونص نائب وخيارات معطّلة. يرث الوضع الداكن والاتجاه العربي.'
seoTitle: 'قائمة اختيار: مكوّن Select متاح الوصول (Radix)'
---

ركب `Select` مع عناصر `SelectItem`، لكل منها `value` ثابتة. ترث القائمة الوضع الداكن وRTL من الموفر.

## When to use

استخدم Select حين يختار المستخدم خيارًا واحدًا من قائمة معروفة من خمسة إلى خمسة عشر عنصرًا تقريبًا، مثل المنطقة أو نوع الوثيقة. للقوائم الطويلة التي تحتاج بحثًا، أو للاختيار المتعدّد، استخدم Dropdown. لأربعة خيارات أو أقل، RadioGroup أسرع في القراءة.

مرّر `placeholder` يصف الاختيار لا تعليمات.

## Example: Country picker

```tsx
import { Select, SelectItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <Select label="الدولة" placeholder="اختر دولة">
      <SelectItem value="sa">المملكة العربية السعودية</SelectItem>
      <SelectItem value="ae">الإمارات العربية المتحدة</SelectItem>
      <SelectItem value="bh">البحرين</SelectItem>
      <SelectItem value="kw">الكويت</SelectItem>
      <SelectItem value="qa">قطر</SelectItem>
      <SelectItem value="om">عُمان</SelectItem>
    </Select>
  );
}
```

## Example: Default value, helper & a disabled option

```tsx
import { Select, SelectItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <Select
      label="المنطقة"
      placeholder="اختر منطقة"
      defaultValue="riyadh"
      helperText="يُستخدَم لتوجيه طلبك."
    >
      <SelectItem value="riyadh">الرياض</SelectItem>
      <SelectItem value="makkah">مكة المكرمة</SelectItem>
      <SelectItem value="eastern" disabled>
        المنطقة الشرقية (غير متاحة)
      </SelectItem>
    </Select>
  );
}
```

## Example: Required & error

```tsx
import { Select, SelectItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <Select
      label="الدولة"
      placeholder="اختر دولة"
      required
      error
      errorMessage="يُرجى اختيار دولتك."
    >
      <SelectItem value="sa">المملكة العربية السعودية</SelectItem>
      <SelectItem value="ae">الإمارات العربية المتحدة</SelectItem>
      <SelectItem value="bh">البحرين</SelectItem>
    </Select>
  );
}
```

## Accessibility

المشغّل زر مرتبط بالتسمية `label` الظاهرة، وتفتح القائمة بوصفها listbox بتنقّل لوحة المفاتيح من Radix: مفاتيح الأسهم تتحرّك، والكتابة تقفز إلى الخيار المطابق، وEnter يختار، وEscape يغلق.

يُعلن النص المساعد والخطأ عبر `aria-describedby` و`aria-invalid`. تُعرض القائمة المفتوحة داخل بوّابة المزوّد، فترث الاتجاه والوضع الداكن.
