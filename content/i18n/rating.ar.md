---
description: 'تقييم بالنجوم تفاعلي أو للعرض فقط.'
---

يجمع Rating تقييمًا بالنجوم أو يعرضه. استخدم `readOnly` للعرض فقط و`allowHalf` لأنصاف النجوم و`tone="brand"` للأخضر السعودي.

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
