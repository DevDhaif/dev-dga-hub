---
description: 'رمز الريال السعودي مع تنسيق صحيح للمبلغ.'
---

يثبت SaudiRiyal رمز الريال الرسمي قبل الرقم في الاتجاهين، ويبقي الأرقام من اليسار إلى اليمين، ويعلن العملة لقارئات الشاشة. مرر `number` ليتم تنسيقه.

## Example: Negative and written values

```tsx
import { SaudiRiyal } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
      <SaudiRiyal value={1500} decimals={2} size="xl" />
      <SaudiRiyal value={-320.5} decimals={2} size="xl" tone="error" />
      <SaudiRiyal value="1.2 مليون" size="xl" />
    </div>
  );
}
```

## Example: Inline in text

```tsx
import { SaudiRiyal } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ maxWidth: 460, fontSize: 16, lineHeight: 1.7, margin: 0 }}>
      جدِّد رخصة مركبتك مقابل{' '}
      <SaudiRiyal value={49.99} decimals={2} tone="brand" /> فقط، بدلًا من{' '}
      <SaudiRiyal value={99} decimals={2} tone="muted" />.
    </p>
  );
}
```
