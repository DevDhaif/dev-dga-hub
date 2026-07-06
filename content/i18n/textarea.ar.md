---
description: 'حقل نصي متعدد الأسطر.'
---

يتشارك Textarea عقد الحقول مع TextInput. حدد `rows` للارتفاع الابتدائي و`resize="none"` لتثبيته.

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
