---
description: 'مسار تنقل متاح الوصول في React يدعم الروابط، الصفحة الحالية، الفواصل المخصصة، وطي العناصر الوسطى. يستخدم معلم nav وaria-current.'
seoTitle: 'مسار التنقل: مكون Breadcrumb متاح الوصول'
---

يعرض Breadcrumb موقع الصفحة الحالية داخل الموقع. استخدم `BreadcrumbLink` للصفحات الأعلى و`BreadcrumbPage` للصفحة الحالية.

## When to use

استخدم Breadcrumb في الصفحات الأعمق من مستوى واحد في البوابة ليرى المستخدم موضعه ويصعد إلى المستويات الأعلى. اعرض المسار قرب أعلى الصفحة، واستخدم `BreadcrumbPage` للصفحة الحالية.

اطو العناصر الوسطى في المسارات الطويلة. لا تجعل مسار التنقل وسيلة التنقل الوحيدة.

## Example: Basic trail

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/services">الخدمات</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>تجديد جواز السفر</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

## Example: Custom separator

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/datasets">مجموعات البيانات</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>تعداد السكان</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

## Example: Collapsed middle

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/services/permits">التصاريح</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>رخصة البناء</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

## Accessibility

يعرض Breadcrumb عنصر `<nav>` يحمل `aria-label` ويحتوي على قائمة مرتبة، مما يجعله معلماً للتقنيات المساعدة. تحمل الصفحة الحالية `aria-current="page"`، وتبقى الفواصل مخفية عن التقنيات المساعدة.

تعمل علامة الحذف للعناصر المطوية كزر يكشف الروابط المخفية.
