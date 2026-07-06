---
title: Structured List
slug: structured-list
category: Data display
status: stable
description: 'A light table for header and text rows.'
---

StructuredList is lighter than Table: no sorting or filtering. Add `selectable` for per-row checkboxes that toggle on row click.

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
    <StructuredList aria-label="Users" style={{ maxWidth: 560 }}>
      <StructuredListHeader>
        <StructuredListRow>
          <StructuredListHead>Name</StructuredListHead>
          <StructuredListHead>Email</StructuredListHead>
          <StructuredListHead>Role</StructuredListHead>
        </StructuredListRow>
      </StructuredListHeader>
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell>Sara Al-Otaibi</StructuredListCell>
          <StructuredListCell>sara@dev-dga.com</StructuredListCell>
          <StructuredListCell>Admin</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>Khalid Nasser</StructuredListCell>
          <StructuredListCell>khalid@dev-dga.com</StructuredListCell>
          <StructuredListCell>Editor</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>Maha Yusuf</StructuredListCell>
          <StructuredListCell>maha@dev-dga.com</StructuredListCell>
          <StructuredListCell>Viewer</StructuredListCell>
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
  { email: 'sara@dev-dga.com', name: 'Sara Al-Otaibi', role: 'Admin' },
  { email: 'khalid@dev-dga.com', name: 'Khalid Nasser', role: 'Editor' },
  { email: 'maha@dev-dga.com', name: 'Maha Yusuf', role: 'Viewer' },
];

export default function Demo() {
  const [selected, setSelected] = useState<Record<string, boolean>>({
    'khalid@dev-dga.com': true,
  });
  return (
    <StructuredList aria-label="Users" selectable contained style={{ maxWidth: 480 }}>
      <StructuredListHeader>
        <StructuredListRow>
          <StructuredListHead>Name</StructuredListHead>
          <StructuredListHead>Role</StructuredListHead>
        </StructuredListRow>
      </StructuredListHeader>
      <StructuredListBody>
        {rows.map((r) => (
          <StructuredListRow
            key={r.email}
            selected={Boolean(selected[r.email])}
            selectionLabel={`Select ${r.name}`}
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
      aria-label="Application summary"
      compact
      contained
      rowDivider={false}
      colDivider={false}
      style={{ maxWidth: 420 }}
    >
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell>Reference</StructuredListCell>
          <StructuredListCell align="end">APP-2026-00412</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>Service</StructuredListCell>
          <StructuredListCell align="end">Commercial registration</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell>Submitted</StructuredListCell>
          <StructuredListCell align="end">2 hours ago</StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredList>
  );
}
```

## Example: Arabic (RTL)

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
    <div dir="rtl">
      <StructuredList aria-label="المستخدمون" contained style={{ maxWidth: 480 }}>
        <StructuredListHeader>
          <StructuredListRow>
            <StructuredListHead>الاسم</StructuredListHead>
            <StructuredListHead>الدور</StructuredListHead>
          </StructuredListRow>
        </StructuredListHeader>
        <StructuredListBody>
          <StructuredListRow>
            <StructuredListCell>سارة العتيبي</StructuredListCell>
            <StructuredListCell>مدير</StructuredListCell>
          </StructuredListRow>
          <StructuredListRow>
            <StructuredListCell>خالد ناصر</StructuredListCell>
            <StructuredListCell>محرر</StructuredListCell>
          </StructuredListRow>
        </StructuredListBody>
      </StructuredList>
    </div>
  );
}
```
