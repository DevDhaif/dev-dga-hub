---
description: 'شريحة قابلة للاختيار في React لأشرطة التصفية، قوائم الاختيار المتعدد، والرموز القابلة للإزالة. تدعم الأنماط، الأيقونات، والشكل الدائري، وتعرض aria-pressed.'
seoTitle: 'شريحة: مكون Chip للتصفية والاختيار'
---

يعمل Chip كزر تبديل يناسب أشرطة التصفية وقوائم الاختيار المتعدد. للتسمية الثابتة، استخدم Tag بدلاً منه.

## When to use

استخدم Chip حين يجب أن تبقى مجموعة الخيارات ظاهرة وتتبدل باللمس، مثل عوامل التصفية فوق قائمة، الفئات في صفحة بحث، أو القيم المختارة القابلة للإزالة. استخدم Tag للتسمية الثابتة بلا تفاعل.

أبق الشرائح في سطر واحد، ورتبها حسب تكرار الاستخدام.

## Example: Variants

```tsx
import { Chip } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Chip variant="primary">أساسي</Chip>
      <Chip variant="primary" defaultSelected>
        أساسي
      </Chip>
      <Chip variant="neutral">محايد</Chip>
      <Chip variant="neutral" defaultSelected>
        محايد
      </Chip>
    </div>
  );
}
```

## Example: Filter bar (controlled)

```tsx
import { useState } from 'react';
import { Chip } from '@dev-dga/react';

const STATUSES = ['الكل', 'مفتوحة', 'قيد المعالجة', 'مغلقة', 'مؤرشفة'];

export default function Demo() {
  const [active, setActive] = useState<string[]>(['مفتوحة']);

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 420 }}>
      {STATUSES.map((status) => (
        <Chip
          key={status}
          selected={active.includes(status)}
          onSelectedChange={(sel) =>
            setActive((prev) => (sel ? [...prev, status] : prev.filter((s) => s !== status)))
          }
        >
          {status}
        </Chip>
      ))}
    </div>
  );
}
```

## Example: With icons

```tsx
import { Chip } from '@dev-dga/react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Chip leadingIcon={<Check />} defaultSelected>
        موثقة
      </Chip>
      <Chip variant="neutral" trailingIcon={<Check />}>
        محددة
      </Chip>
    </div>
  );
}
```

## Accessibility

يعمل Chip كزر تبديل يحمل `aria-pressed`، مما يتيح لقارئ الشاشة إعلان حالة اختياره. يبدل مفتاحا Space وEnter حالته، وتستخدم الشرائح المعطلة `aria-disabled` لتبقى في ترتيب القراءة.

تغير حالة الاختيار التعبئة والحدود إلى جانب اللون. ولزر الإغلاق في الشريحة القابلة للإزالة اسم متاح الوصول خاص به.
