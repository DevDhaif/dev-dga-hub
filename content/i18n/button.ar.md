---
description: 'عنصر التحكم الأساسي لتنفيذ الإجراءات.'
---

ينفذ Button إجراء عند الضغط عليه. اختر `variant` و`size`، وأضف `startIcon`/`endIcon` أو `loading`، واستخدم `asChild` لعرض رابط بمظهر زر.

## Example: Variants

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button>أساسي</Button>
      <Button variant="secondary">ثانوي</Button>
      <Button variant="black">أسود</Button>
      <Button variant="outline">محدّد</Button>
      <Button variant="ghost">شفاف</Button>
      <Button variant="destructive">حذف</Button>
    </div>
  );
}
```

## Example: Sizes

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">صغير</Button>
      <Button size="md">متوسط</Button>
      <Button size="lg">كبير</Button>
    </div>
  );
}
```

## Example: Icons & loading

```tsx
import { Button } from '@dev-dga/react';

const Download = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button startIcon={<Download />}>تنزيل</Button>
      <Button variant="outline" loading>
        جارٍ الحفظ
      </Button>
      <Button disabled>معطّل</Button>
    </div>
  );
}
```

## Example: As a link (asChild)

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Button asChild>
      <a href="https://github.com/DevDhaif/dev-dga-hub" target="_blank" rel="noreferrer">
        افتح المستودع
      </a>
    </Button>
  );
}
```
