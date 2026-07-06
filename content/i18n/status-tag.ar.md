---
description: 'حبة بنقطة وتسمية لعرض الحالة.'
---

يجمع StatusTag نقطة ملونة مع تسمية قصيرة. حدد `tone` للمعنى و`status` للتعبئة، وللتصنيفات استخدم Tag.

## Example: Tones

```tsx
import { StatusTag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <StatusTag tone="success">نشِط</StatusTag>
      <StatusTag tone="warning">قيد الانتظار</StatusTag>
      <StatusTag tone="error">فاشل</StatusTag>
      <StatusTag tone="info">قيد التنفيذ</StatusTag>
      <StatusTag tone="neutral">مسودّة</StatusTag>
    </div>
  );
}
```

## Example: Status styles

```tsx
import { StatusTag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <StatusTag tone="success" status="subtle">
        خفيف
      </StatusTag>
      <StatusTag tone="success" status="ghost">
        شبحي
      </StatusTag>
      <StatusTag tone="success" status="inverted">
        معكوس
      </StatusTag>
    </div>
  );
}
```
