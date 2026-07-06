---
description: 'حقل نصي بسطر واحد مع تسمية وحالات خطأ.'
---

يملك TextInput تسميته وربط الحقل. استخدم `helperText` و`errorMessage` للحالات، و`startAdornment`/`endAdornment` لأيقونة أو وحدة داخل الحقل.

## Example: Labelled field

```tsx
import { TextInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <TextInput
      label="الاسم الكامل"
      placeholder="أدخل اسمك الكامل"
      helperText="كما يظهر في هويتك الوطنية."
    />
  );
}
```

## Example: Required & error states

```tsx
import { TextInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TextInput label="الهوية الوطنية" placeholder="هوية من 10 أرقام" required />
      <TextInput
        label="البريد الإلكتروني"
        type="email"
        defaultValue="not-an-email"
        error
        errorMessage="أدخل عنوان بريد إلكتروني صحيح."
      />
    </div>
  );
}
```

## Example: Fill styles

```tsx
import { TextInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TextInput label="افتراضي" variant="default" defaultValue="نص مُدخَل" />
      <TextInput label="تعبئة أفتح" variant="filled-lighter" defaultValue="نص مُدخَل" />
      <TextInput label="تعبئة أغمق" variant="filled-darker" defaultValue="نص مُدخَل" />
    </div>
  );
}
```

## Example: In-field prefix & suffix

```tsx
import { TextInput, TextInputAffix } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TextInput
        label="الموقع الإلكتروني"
        placeholder="my-service"
        startAdornment={<TextInputAffix>https://</TextInputAffix>}
      />
      <TextInput
        label="الرسوم"
        type="number"
        defaultValue="250"
        endAdornment={<TextInputAffix>ريال</TextInputAffix>}
      />
    </div>
  );
}
```
