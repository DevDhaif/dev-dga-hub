---
description: 'قائمة مفتاح وقيمة لشاشات المراجعة والملخصات.'
---

يعرض DescriptionList بنية `<dl>` حقيقية. يجمع كل `DescriptionItem` تسمية مع قيمتها، أفقيًا أو رأسيًا.

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
        <DescriptionItem>
          <DescriptionTerm>تاريخ التقديم</DescriptionTerm>
          <DescriptionDetails>21 مايو 2026</DescriptionDetails>
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
          <DescriptionTerm>الخدمة</DescriptionTerm>
          <DescriptionDetails>تجديد جواز السفر</DescriptionDetails>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTerm>الحالة</DescriptionTerm>
          <DescriptionDetails>
            <Tag variant="success-subtle">موافَق عليه</Tag>
          </DescriptionDetails>
        </DescriptionItem>
      </DescriptionList>
    </div>
  );
}
```
