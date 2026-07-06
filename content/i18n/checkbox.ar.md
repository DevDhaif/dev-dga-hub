---
description: 'خانة اختيار مع تسمية وحالات مساعدة وخطأ.'
---

يبدل Checkbox خيارًا واحدًا. يدعم `label` و`helperText` و`errorMessage` وحالة `indeterminate` وثلاثة أحجام.

## Example: Consent checkbox

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return <Checkbox label="أوافق على الشروط والأحكام" />;
}
```

## Example: Required & error states

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="أوافق على الشروط والأحكام" required />
      <Checkbox
        label="أوافق على الشروط والأحكام"
        error
        errorMessage="يجب قبول الشروط للمتابعة."
      />
    </div>
  );
}
```

## Example: Sizes, styles & indeterminate

```tsx
import { Checkbox } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="صغير جدًا (16px)" size="xs" defaultChecked />
      <Checkbox label="صغير (20px)" size="sm" defaultChecked />
      <Checkbox label="متوسط (24px)" size="md" defaultChecked />
      <Checkbox label="نمط محايد" variant="neutral" defaultChecked />
      <Checkbox label="تحديد كل العناصر" checked="indeterminate" />
    </div>
  );
}
```
