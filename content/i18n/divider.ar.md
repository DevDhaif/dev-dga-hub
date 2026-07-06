---
description: 'خط فاصل بين المحتوى.'
---

يفصل Divider بين المحتوى أفقيًا أو رأسيًا. مرر نصًا داخله لعرض تسمية، أو `decorative` إذا كان شكليًا فقط.

## Example: Horizontal and vertical

```tsx
import { Divider } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320 }}>
      <p style={{ margin: 0 }}>السجل الوطني</p>
      <Divider style={{ margin: '12px 0' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 24 }}>
        <span>الرئيسية</span>
        <Divider orientation="vertical" />
        <span>الإعدادات</span>
        <Divider orientation="vertical" />
        <span>تسجيل الخروج</span>
      </div>
    </div>
  );
}
```

## Example: Labeled

```tsx
import { Divider } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Divider>أو تابِع باستخدام</Divider>
      <Divider labelPosition="start">الأخيرة</Divider>
      <Divider variant="dashed">أفلِت الملفات هنا</Divider>
    </div>
  );
}
```
