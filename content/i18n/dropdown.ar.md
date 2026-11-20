---
description: 'حقل قائمة منسدلة في React باختيار مفرد ومتعدد، بحث داخل اللوحة، خيارات مجمعة، وربط كامل للحقل. مبني على cmdk للتصفية السريعة بالعربية والإنجليزية.'
seoTitle: 'قائمة منسدلة: مكون Dropdown مع بحث واختيار متعدد'
---

يتكون حقل الاختيار Dropdown من عناصر `DropdownItem`. أضف `multiple` للاختيار المتعدد، أو `searchable` لإضافة بحث داخل اللوحة.

## When to use

استخدم Dropdown حين يحتاج حقل الاختيار إلى بحث أو قيم متعددة أو خيارات مجمعة: اختيار عدة خدمات، أو التصفية بحسب مدن كثيرة، أو الاختيار من قائمة مرجعية طويلة. استخدم Select للاختيار المفرد البسيط، وChip لمجموعة مرشحات ظاهرة.

وفر `emptyMessage` لتظهر رسالة توضيحية حين لا يجد البحث نتائج.

مرر `leadingIcon` لإظهار أيقونة بحجم 20px قبل القيمة، مثل أيقونة تقويم في حقل اختيار السنة. يبدل `helperIcon` الأيقونة التي تسبق النص المساعد، ويخفيها `null`.

## Example: Single select

```tsx
import { Dropdown, DropdownItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ width: 320 }}>
      <Dropdown label="المدينة" placeholder="اختر مدينة">
        <DropdownItem value="riyadh">الرياض</DropdownItem>
        <DropdownItem value="jeddah">جدة</DropdownItem>
        <DropdownItem value="dammam">الدمام</DropdownItem>
        <DropdownItem value="mecca">مكة</DropdownItem>
      </Dropdown>
    </div>
  );
}
```

## Example: Searchable

```tsx
import { Dropdown, DropdownItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ width: 320 }}>
      <Dropdown
        searchable
        label="الدولة"
        placeholder="اختر دولة"
        searchPlaceholder="بحث…"
        emptyMessage="لا توجد دولة."
      >
        <DropdownItem value="sa" keywords={['Saudi Arabia']}>
          المملكة العربية السعودية
        </DropdownItem>
        <DropdownItem value="ae" keywords={['United Arab Emirates']}>
          الإمارات العربية المتحدة
        </DropdownItem>
        <DropdownItem value="eg" keywords={['Egypt']}>
          مصر
        </DropdownItem>
        <DropdownItem value="jo" keywords={['Jordan']}>
          الأردن
        </DropdownItem>
      </Dropdown>
    </div>
  );
}
```

## Example: Multi-select

```tsx
import { Dropdown, DropdownItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ width: 320 }}>
      <Dropdown multiple label="الخدمات" placeholder="اختر الخدمات" defaultValue={['passport']}>
        <DropdownItem value="passport">تجديد جواز السفر</DropdownItem>
        <DropdownItem value="id">الهوية الوطنية</DropdownItem>
        <DropdownItem value="license">رخصة القيادة</DropdownItem>
        <DropdownItem value="visa">خدمات التأشيرات</DropdownItem>
      </Dropdown>
    </div>
  );
}
```

## Example: Grouped options

```tsx
import { Dropdown, DropdownItem, DropdownGroup, DropdownSeparator } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ width: 320 }}>
      <Dropdown label="حزمة التقنيات" placeholder="اختر أداة">
        <DropdownGroup heading="الواجهة الأمامية">
          <DropdownItem value="react">React</DropdownItem>
          <DropdownItem value="vue">Vue</DropdownItem>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownGroup heading="الواجهة الخلفية">
          <DropdownItem value="node">Node.js</DropdownItem>
          <DropdownItem value="go">Go</DropdownItem>
        </DropdownGroup>
      </Dropdown>
    </div>
  );
}
```

## Example: Leading icon

```tsx
import { Dropdown, DropdownItem } from '@dev-dga/react';

const Calendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ maxWidth: 320 }}>
      <Dropdown leadingIcon={<Calendar />} label="السنة المالية" placeholder="اختر سنة">
        <DropdownItem value="2025">2025</DropdownItem>
        <DropdownItem value="2026">2026</DropdownItem>
      </Dropdown>
    </div>
  );
}
```

## Accessibility

يعرض المشغل `aria-haspopup`، وتستخدم تسمية الحقل، النص المساعد، ورسالة الخطأ الربط نفسه المستخدم في TextInput. داخل اللوحة، يتبع حقل البحث وقائمة الخيارات نمط combobox من cmdk، ويدعمان هذه المفاتيح: الأسهم للتنقل بين الخيارات، Enter لتبديل الخيار المظلل، وEscape للإغلاق.

تعلن التقنيات المساعدة القيم المختارة. وفي وضع الاختيار المتعدد، يبقى كل اختيار ظاهراً في المشغل.
