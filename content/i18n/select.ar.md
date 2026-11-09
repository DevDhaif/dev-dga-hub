---
description: 'حقل اختيار مفرد متاح الوصول في React مبني على Radix، مع تسمية، نص مساعد، حالة خطأ، نص نائب، وخيارات معطلة. يرث الوضع الداكن والاتجاه من اليمين إلى اليسار.'
seoTitle: 'قائمة اختيار: مكون Select متاح الوصول (Radix)'
---

استخدم `Select` مع عناصر `SelectItem`، ولكل عنصر `value` ثابتة. ترث القائمة الوضع الداكن وRTL من المزود.

## When to use

استخدم Select حين يختار المستخدم خياراً واحداً من قائمة معروفة فيها 5 إلى 15 عنصر تقريباً، مثل المنطقة أو نوع الوثيقة. للقوائم الطويلة التي تحتاج بحثاً، أو للاختيار المتعدد، استخدم Dropdown. مع 4 خيارات أو أقل، يكون RadioGroup أسرع في القراءة.

مرر `placeholder` يصف الاختيار، واكتب التعليمات خارجه.

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
      <SelectItem value="om">عمان</SelectItem>
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
      helperText="يستخدم لتوجيه طلبك."
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
      errorMessage="يرجى اختيار دولتك."
    >
      <SelectItem value="sa">المملكة العربية السعودية</SelectItem>
      <SelectItem value="ae">الإمارات العربية المتحدة</SelectItem>
      <SelectItem value="bh">البحرين</SelectItem>
    </Select>
  );
}
```

## Accessibility

المشغل زر مرتبط بالتسمية `label` الظاهرة، ويفتح قائمة listbox بتنقل لوحة المفاتيح من Radix. تنقل مفاتيح الأسهم التركيز بين الخيارات، وتنقله الكتابة إلى الخيار المطابق. يختار مفتاح Enter الخيار، ويغلق مفتاح Escape القائمة.

يعلن قارئ الشاشة النص المساعد والخطأ عبر `aria-describedby` و`aria-invalid`. تظهر القائمة المفتوحة داخل بوابة المزود، لذلك ترث الاتجاه والوضع الداكن.
