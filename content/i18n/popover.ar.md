---
description: 'لوحة عائمة بمحتوى تفاعلي.'
---

يثبت Popover محتوى غنيًا عند مشغل. يعرض `role="dialog"` لذا أعطه `aria-label`، ومرر `modal` لحصر التركيز.

## Example: Default

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverClose, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>افتح اللوح المنبثق</Button>
      </PopoverTrigger>
      <PopoverContent aria-label="التفاصيل">
        <PopoverClose closeLabel="إغلاق" />
        <p style={{ margin: 0 }}>تحمل اللوحات المنبثقة محتوى غنياً وتفاعلياً مثبّتاً إلى عنصر مُشغِّل.</p>
      </PopoverContent>
    </Popover>
  );
}
```

## Example: With arrow

```tsx
import { Popover, PopoverTrigger, PopoverContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">مع سهم</Button>
      </PopoverTrigger>
      <PopoverContent arrow aria-label="ملاحظة">
        <p style={{ margin: 0 }}>يشير السهم إلى عنصر التشغيل.</p>
      </PopoverContent>
    </Popover>
  );
}
```
