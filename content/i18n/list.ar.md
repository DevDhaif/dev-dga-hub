---
description: 'قوائم منسقة مرقمة ونقطية وبأيقونات.'
---

يعرض List قوائم نقطية أو مرقمة أو بأيقونات بالعنصر الصحيح `<ul>`/`<ol>`. يدعم `ListItem` مستوى ثانيًا من التداخل وأيقونة خاصة لكل عنصر.

## Example: Variants

```tsx
import { List, ListItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
      <List variant="unordered" aria-label="المدن">
        <ListItem>الرياض</ListItem>
        <ListItem>جدة</ListItem>
        <ListItem>مكة المكرمة</ListItem>
      </List>
      <List variant="ordered" aria-label="الخطوات">
        <ListItem>مراجعة بياناتك</ListItem>
        <ListItem>التأكيد والدفع</ListItem>
        <ListItem>طباعة الإيصال</ListItem>
      </List>
      <List variant="with-icon" aria-label="المزايا">
        <ListItem>سريع وموثوق</ListItem>
        <ListItem>آمن افتراضيًّا</ListItem>
        <ListItem>متاح على مدار الساعة</ListItem>
      </List>
    </div>
  );
}
```

## Example: Nesting levels and tone

```tsx
import { List, ListItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <List variant="ordered" tone="primary" aria-label="الخطوات">
      <ListItem>مراجعة بياناتك</ListItem>
      <ListItem level={2}>التحقق من المجموع</ListItem>
      <ListItem level={2}>تأكيد العنوان</ListItem>
      <ListItem>التأكيد والدفع</ListItem>
    </List>
  );
}
```

## Example: With custom icon

```tsx
import { List, ListItem } from '@dev-dga/react';

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  </svg>
);

export default function Demo() {
  return (
    <List variant="with-icon" tone="primary" aria-label="المزايا">
      <ListItem>سريع وموثوق</ListItem>
      <ListItem>آمن افتراضيًّا</ListItem>
      <ListItem icon={<Star />}>متاح على مدار الساعة</ListItem>
    </List>
  );
}
```
