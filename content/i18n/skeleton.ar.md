---
description: 'عنصر بديل يظهر أثناء تحميل المحتوى.'
---

يحاكي Skeleton شكل المحتوى أثناء تحميله. وهو `aria-hidden`، لذا علم السطح الجاري تحميله بـ `aria-busy="true"`.

## Example: Inline placeholder

```tsx
import { Skeleton } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ fontSize: '1.25rem', maxWidth: 420 }}>
      مرحبًا بعودتك، <Skeleton shape="text" width="6ch" style={{ display: 'inline-block' }} />! يجري
      تحميل ملفك الشخصي.
    </p>
  );
}
```
