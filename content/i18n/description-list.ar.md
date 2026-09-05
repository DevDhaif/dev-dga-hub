---
description: 'قائمة مفتاح وقيمة في React تعرض عناصر dl وdt وdd الحقيقية لشاشات المراجعة والملخّص، أفقية أو عمودية، بقيم غنيّة ودعم عربي.'
seoTitle: 'قائمة وصف: مكوّن DescriptionList لشاشات المراجعة'
---

يعرض DescriptionList بنية `<dl>` حقيقية. يجمع كل `DescriptionItem` تسمية مع قيمتها، أفقيًا أو رأسيًا.

## When to use

استخدم DescriptionList لعرض حقول سجل قبل الإرسال أو في صفحة التفاصيل: اسم مقدّم الطلب، ورقم الطلب، والحالة، والتواريخ. استخدم التخطيط الأفقي للقراءة السريعة والعمودي في الشاشات الضيّقة أو حين تطول القيم.

للمقارنات الجدولية عبر سجلات كثيرة، استخدم Table.

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

## Accessibility

تعرض القائمة عناصر `<dl>` و`<dt>` و`<dd>` الأصلية، فيعلن قارئ الشاشة كل مصطلح مع وصفه.

أبقِ المصطلحات قصيرة وفريدة، وضع المحتوى الغني مثل StatusTag داخل التفاصيل لا المصطلح.
