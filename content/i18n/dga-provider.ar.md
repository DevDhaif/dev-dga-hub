---
description: 'الموفر الجذري الذي يلف التطبيق مرة واحدة.'
---

استورد ملف الأنماط مرة واحدة (`import '@dev-dga/css'`) ولف تطبيقك بـ `DgaProvider` واحد. يوفر الاتجاه والوضع الداكن والسمة لكل المكونات بما فيها النوافذ العائمة.

## Example: Brand theme

```tsx
import { DgaProvider, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <DgaProvider
      theme={{ primary: 'lavender' }}
      style={{ padding: 24, borderRadius: 12, background: 'var(--ddga-color-background)' }}
    >
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button>إجراء بالثيم</Button>
        <Button variant="secondary">ثانوي</Button>
        <Button variant="outline">محدّد</Button>
      </div>
    </DgaProvider>
  );
}
```

## Example: Dark mode

```tsx
import { DgaProvider, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <DgaProvider
      mode="dark"
      style={{
        padding: 24,
        borderRadius: 12,
        background: 'var(--ddga-color-background)',
        color: 'var(--ddga-color-foreground)',
      }}
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <span>كل ما بالداخل يرِث الوضع الداكن.</span>
        <Button>تأكيد</Button>
        <Button variant="secondary">إلغاء</Button>
      </div>
    </DgaProvider>
  );
}
```
