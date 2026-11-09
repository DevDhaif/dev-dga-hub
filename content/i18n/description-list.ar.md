---
description: 'قائمة مفتاح وقيمة في React تعرض عناصر dl، dt، وdd الحقيقية لشاشات المراجعة والملخص. تأتي أفقية أو عمودية، وتدعم القيم الغنية والعربية.'
seoTitle: 'قائمة وصف: مكون DescriptionList لشاشات المراجعة'
---

يعرض DescriptionList بنية `<dl>` حقيقية. يجمع كل `DescriptionItem` مصطلحاً مع قيمته، أفقياً أو عمودياً.

## When to use

استخدم DescriptionList لعرض حقول سجل قبل الإرسال أو في صفحة التفاصيل: اسم مقدم الطلب، رقم الطلب، الحالة، والتواريخ. استخدم التخطيط الأفقي للقراءة السريعة، والتخطيط العمودي في الشاشات الضيقة أو حين تطول القيم.

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
            <Tag variant="success-subtle">موافق عليه</Tag>
          </DescriptionDetails>
        </DescriptionItem>
      </DescriptionList>
    </div>
  );
}
```

## Accessibility

تعرض القائمة عناصر `<dl>`، `<dt>`، و`<dd>` الأصلية، مما يتيح لقارئ الشاشة إعلان كل مصطلح مع قيمته.

أبق المصطلحات قصيرة وفريدة، وضع المحتوى الغني مثل StatusTag داخل القيمة بدلاً من المصطلح.
