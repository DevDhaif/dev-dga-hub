---
description: 'شريط وحلقة لعرض التقدم.'
---

`Progress` شريط خطي و`CircularProgress` حلقة. مرر `value`، أو أغفلها للحالة غير المحددة؛ وتحتاج الحلقة إلى `aria-label`.

## Example: Linear bar

```tsx
import { Progress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <Progress value={20} size="sm" label="صغير" />
      <Progress value={50} size="md" label="متوسط" />
      <Progress value={75} size="lg" label="كبير" />
    </div>
  );
}
```

## Example: Feedback states

```tsx
import { Progress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <Progress value={40} label="جارٍ الرفع" helperText="نص مساعد" />
      <Progress value={100} state="success" label="جارٍ الرفع" helperText="اكتمل" />
      <Progress value={0} state="error" label="جارٍ الرفع" helperText="فشل الرفع" />
    </div>
  );
}
```

## Example: Circular ring

```tsx
import { CircularProgress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
      <CircularProgress value={50} size="sm" aria-label="المستخدمون النشطون" />
      <CircularProgress value={50} size="md" aria-label="المستخدمون النشطون" />
      <CircularProgress value={72} size="lg" description="المستخدمون النشطون" aria-label="المستخدمون النشطون" />
    </div>
  );
}
```
