---
description: 'مفتاح تشغيل وإيقاف يسري فورًا.'
---

يبدل Switch قيمة واحدة تسري فورًا. أما الخيار الذي يعتمد عند الإرسال فاستخدم له Checkbox.

## Example: Setting toggle

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return <Switch label="تفعيل الإشعارات" />;
}
```

## Example: On by default, with a hint

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return (
    <Switch
      label="الاشتراك في النشرة البريدية"
      helperText="يرسل إشعارًا عند وصول بريد جديد."
      defaultChecked
    />
  );
}
```

## Example: States

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Switch label="المصادقة الثنائية" required defaultChecked />
      <Switch label="وضع الصيانة" disabled />
      <Switch label="مشاركة الموقع" error errorMessage="هذا مطلوب للمتابعة." />
    </div>
  );
}
```
