---
description: 'مؤشر تحميل غير محدد المدة.'
---

يعرض Spinner عملًا غير معروف مدته. حجمه الافتراضي `1em` ويتبع `currentColor`، فيتناسب مع النص المحيط به.

## Example: Inherits size & color

```tsx
import { Spinner } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ fontSize: '1.25rem', color: 'var(--ddga-color-primary)' }}>
      <Spinner aria-hidden="true" style={{ verticalAlign: '-0.15em' }} /> جارٍ تحميل لوحة التحكم…
    </p>
  );
}
```
