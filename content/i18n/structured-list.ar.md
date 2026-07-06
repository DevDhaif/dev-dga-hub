---
description: 'جدول خفيف لصفوف العناوين والنصوص.'
---

StructuredList أخف من Table: بلا فرز أو تصفية. أضف `selectable` لخانات اختيار في الصفوف تتبدل بالنقر على الصف.

## Example: Basic list

```tsx
import {
  StructuredList,
  StructuredListHeader,
  StructuredListBody,
  StructuredListRow,
  StructuredListHead,
  StructuredListCell,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <StructuredList aria-label="المستخدمون" style={{ maxWidth: 560 }}>
      <StructuredListHeader>
        <StructuredListRow>
          <StructuredListHead>الاسم</StructuredListHead>
          <StructuredListHead>البريد الإلكتروني</StructuredListHead>
          <StructuredListHead>الدور</StructuredListHead>
        </StructuredListRow>
      </StructuredListHeader>
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell>سارة العتيبي</StructuredListCell>
          <StructuredListCell>sara@dev-dga.com</StructuredListCell>
          <StructuredListCell>مدير</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>خالد ناصر</StructuredListCell>
          <StructuredListCell>khalid@dev-dga.com</StructuredListCell>
          <StructuredListCell>محرر</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>مها يوسف</StructuredListCell>
          <StructuredListCell>maha@dev-dga.com</StructuredListCell>
          <StructuredListCell>مشاهِد</StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredList>
  );
}
```

## Example: Selectable rows

```tsx
import { useState } from 'react';
import {
  StructuredList,
  StructuredListHeader,
  StructuredListBody,
  StructuredListRow,
  StructuredListHead,
  StructuredListCell,
} from '@dev-dga/react';

const rows = [
  { email: 'sara@dev-dga.com', name: 'سارة العتيبي', role: 'مدير' },
  { email: 'khalid@dev-dga.com', name: 'خالد ناصر', role: 'محرر' },
  { email: 'maha@dev-dga.com', name: 'مها يوسف', role: 'مشاهِد' },
];

export default function Demo() {
  const [selected, setSelected] = useState<Record<string, boolean>>({
    'khalid@dev-dga.com': true,
  });
  return (
    <StructuredList aria-label="المستخدمون" selectable contained style={{ maxWidth: 480 }}>
      <StructuredListHeader>
        <StructuredListRow>
          <StructuredListHead>الاسم</StructuredListHead>
          <StructuredListHead>الدور</StructuredListHead>
        </StructuredListRow>
      </StructuredListHeader>
      <StructuredListBody>
        {rows.map((r) => (
          <StructuredListRow
            key={r.email}
            selected={Boolean(selected[r.email])}
            selectionLabel={`تحديد ${r.name}`}
            onSelectedChange={(v) => setSelected((s) => ({ ...s, [r.email]: v }))}
          >
            <StructuredListCell>{r.name}</StructuredListCell>
            <StructuredListCell>{r.role}</StructuredListCell>
          </StructuredListRow>
        ))}
      </StructuredListBody>
    </StructuredList>
  );
}
```

## Example: Compact, no dividers

```tsx
import {
  StructuredList,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <StructuredList
      aria-label="ملخّص الطلب"
      compact
      contained
      rowDivider={false}
      colDivider={false}
      style={{ maxWidth: 420 }}
    >
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell>المرجع</StructuredListCell>
          <StructuredListCell align="end">APP-2026-00412</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>الخدمة</StructuredListCell>
          <StructuredListCell align="end">السجل التجاري</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>تاريخ التقديم</StructuredListCell>
          <StructuredListCell align="end">قبل ساعتين</StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredList>
  );
}
```
