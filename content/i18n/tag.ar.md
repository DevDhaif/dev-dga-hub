---
description: 'تسمية مدمجة للتصنيفات والكلمات المفتاحية.'
---

يسمي Tag المحتوى. اختر درجة لونية (تعبئات `*-subtle` هي مجموعة SDGA)، وأضف أيقونات، أو اجعله قابلًا للإزالة بـ `dismissible`.

## Example: Variants

```tsx
import { Tag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag variant="secondary-subtle">محايد</Tag>
      <Tag variant="success-subtle">موافَق عليه</Tag>
      <Tag variant="warning-subtle">قيد الانتظار</Tag>
      <Tag variant="destructive-subtle">مرفوض</Tag>
      <Tag variant="info-subtle">قيد المراجعة</Tag>
      <Tag variant="primary-subtle">مميّز</Tag>
    </div>
  );
}
```

## Example: Sizes and shape

```tsx
import { Tag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <Tag size="sm" variant="info-subtle">
        صغير
      </Tag>
      <Tag size="md" variant="info-subtle">
        متوسط
      </Tag>
      <Tag size="lg" variant="info-subtle">
        كبير
      </Tag>
      <Tag shape="squared" variant="info-subtle">
        مربّع
      </Tag>
      <Tag outlined variant="info-subtle">
        محدَّد
      </Tag>
    </div>
  );
}
```

## Example: With icons

```tsx
import { Tag } from '@dev-dga/react';

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    aria-hidden
  >
    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <Tag variant="success-subtle" startIcon={<Check />}>
        موثَّق
      </Tag>
      <Tag iconOnly size="md" variant="warning-subtle" aria-label="تحذير">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
          <circle cx="12" cy="12" r="10" />
        </svg>
      </Tag>
    </div>
  );
}
```
