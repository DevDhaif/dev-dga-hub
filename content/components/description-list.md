---
title: DescriptionList
slug: description-list
category: Data display
status: stable
description: 'React key-value list rendering real dl, dt, and dd markup for review and summary screens, horizontal or vertical, with rich values and Arabic support.'
seoTitle: 'DescriptionList: React key-value list for review screens'
---

DescriptionList renders real `<dl>` markup. Each `DescriptionItem` pairs a term with its details, horizontally or vertically.

## When to use

Use DescriptionList to show a record's fields before submission or on a details page: applicant name, request number, status, dates. Use the horizontal layout for scanning and the vertical layout on narrow screens or when values are long.

For tabular comparisons across many records, use Table.

## Example: Review summary

```tsx
import {
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ maxWidth: 480 }}>
      <DescriptionList divided>
        <DescriptionItem>
          <DescriptionTerm>Full name</DescriptionTerm>
          <DescriptionDetails>Ahmed Al-Otaibi</DescriptionDetails>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTerm>National ID</DescriptionTerm>
          <DescriptionDetails>1234567890</DescriptionDetails>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTerm>Service</DescriptionTerm>
          <DescriptionDetails>Passport renewal</DescriptionDetails>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTerm>Submitted</DescriptionTerm>
          <DescriptionDetails>21 May 2026</DescriptionDetails>
        </DescriptionItem>
      </DescriptionList>
    </div>
  );
}
```

## Example: Vertical with a rich value

```tsx
import {
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
  Tag,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ maxWidth: 480 }}>
      <DescriptionList orientation="vertical" divided>
        <DescriptionItem>
          <DescriptionTerm>Service</DescriptionTerm>
          <DescriptionDetails>Passport renewal</DescriptionDetails>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTerm>Status</DescriptionTerm>
          <DescriptionDetails>
            <Tag variant="success-subtle">Approved</Tag>
          </DescriptionDetails>
        </DescriptionItem>
      </DescriptionList>
    </div>
  );
}
```

## Example: Arabic (RTL)

```tsx
import {
  DescriptionList,
  DescriptionItem,
  DescriptionTerm,
  DescriptionDetails,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <div dir="rtl" style={{ maxWidth: 480 }}>
      <DescriptionList divided>
        <DescriptionItem>
          <DescriptionTerm>الاسم الكامل</DescriptionTerm>
          <DescriptionDetails>أحمد العتيبي</DescriptionDetails>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTerm>رقم الهوية</DescriptionTerm>
          <DescriptionDetails>1234567890</DescriptionDetails>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTerm>الخدمة</DescriptionTerm>
          <DescriptionDetails>تجديد جواز السفر</DescriptionDetails>
        </DescriptionItem>
      </DescriptionList>
    </div>
  );
}
```

## Accessibility

The list renders native `<dl>`, `<dt>`, and `<dd>` elements, so screen readers announce each term with its description.

Keep terms short and unique, and put rich content such as StatusTag inside the details rather than the term.
