---
description: 'رابط نصي بثلاث درجات لونية وحجمين.'
---

Link للتنقل، وButton للإجراءات. فعل `inline` للروابط داخل النص لتبقى مسطرة، و`external` للروابط الخارجية.

## Example: In-text links

```tsx
import { Link } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ maxWidth: '46ch', lineHeight: 1.7 }}>
      اطّلع على{' '}
      <Link href="#docs" inline>
        توثيق الخدمة
      </Link>{' '}
      قبل أن تبدأ، أو تصفّح{' '}
      <Link href="#guides" inline>
        الأدلة
      </Link>
      .
    </p>
  );
}
```

## Example: Tones

```tsx
import { Link } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Link href="#" tone="primary">
        أساسي، الأخضر السعودي
      </Link>
      <Link href="#" tone="neutral">
        محايد، رمادي
      </Link>
      <div style={{ background: 'var(--ddga-color-primary)', padding: 16, borderRadius: 8 }}>
        <Link href="#" tone="onColor">
          على اللون، أبيض على الأخضر السعودي
        </Link>
      </div>
    </div>
  );
}
```

## Example: External link

```tsx
import { Link } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ maxWidth: '46ch', lineHeight: 1.7 }}>
      اطّلع على{' '}
      <Link href="https://design.dga.gov.sa" inline external target="_blank">
        نظام تصميم هيئة الحكومة الرقمية
      </Link>{' '}
      الرسمي للاطّلاع على المواصفة المصدرية.
    </p>
  );
}
```
