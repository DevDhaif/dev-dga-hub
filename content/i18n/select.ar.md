---
description: 'حقل اختيار واحد مع تسمية وحالات خطأ.'
---

ركب `Select` مع عناصر `SelectItem`، لكل منها `value` ثابتة. ترث القائمة الوضع الداكن وRTL من الموفر.

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
