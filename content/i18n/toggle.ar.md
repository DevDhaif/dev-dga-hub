---
description: 'زر بحالتين مثل أزرار أشرطة الأدوات.'
---

يحفظ Toggle حالة الضغط، مثل زر تنسيق أو تثبيت. الأزرار بأيقونة فقط تحتاج `aria-label`، وللإعدادات استخدم Switch.

## Example: Labeled toggle

```tsx
import { Toggle } from '@dev-dga/react';

export default function Demo() {
  return (
    <Toggle aria-label="عريض" defaultPressed>
      عريض
    </Toggle>
  );
}
```

## Example: Variants

```tsx
import { Toggle } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Toggle aria-label="عريض" variant="default" defaultPressed>
        افتراضي
      </Toggle>
      <Toggle aria-label="عريض" variant="outline" defaultPressed>
        محدّد
      </Toggle>
    </div>
  );
}
```

## Example: Sizes

```tsx
import { Toggle } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Toggle aria-label="صغير" size="sm" defaultPressed>
        صغير
      </Toggle>
      <Toggle aria-label="متوسط" size="md" defaultPressed>
        متوسط
      </Toggle>
      <Toggle aria-label="كبير" size="lg" defaultPressed>
        كبير
      </Toggle>
    </div>
  );
}
```
