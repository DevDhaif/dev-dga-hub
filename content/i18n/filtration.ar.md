---
description: 'لوحة مرشحات متعددة الأوجه في React، منبثقة أو مضمنة، مع أقسام، مرشحات بمربعات اختيار، عداد نتائج، وزري التطبيق والمسح. تبقى الحالة في كودك.'
seoTitle: 'تصفية: مكون Filtration للوحة مرشحات متعددة بتطبيق مرحلي'
---

يفتح Filtration لوحة من أقسام التصفية، ويغلقها زرا التطبيق والمسح. تبقى الحالة في كودك: يغلف كل قسم عنصراً خاضعاً للتحكم.

## When to use

استخدم Filtration فوق نتائج البحث، الجداول، وأدلة الخدمات حين يجمع المستخدم عدة معايير: الحالة، المنطقة، التاريخ، والفئة. اجمع التغييرات وطبقها دفعة واحدة حتى لا تتبدل النتائج مع كل نقرة.

استخدم اللوحة المضمنة في الشاشات العريضة، واللوحة المنبثقة في الجوال. لمرشح واحد، يكفي Select أو صف من Chip.

## Example: Overlay filter (controlled)

```tsx
import { useState } from 'react';
import {
  Filtration,
  FiltrationTrigger,
  FiltrationResults,
  FiltrationPanel,
  FiltrationSection,
  FiltrationCheckboxFilter,
  FiltrationOptionList,
  FiltrationOption,
  FiltrationFooter,
  Tag,
} from '@dev-dga/react';

const TYPE_OPTIONS = [
  { value: 'datasets', label: 'مجموعات البيانات', count: 128 },
  { value: 'apis', label: 'واجهات برمجة التطبيقات', count: 64 },
  { value: 'reports', label: 'التقارير', count: 40 },
  { value: 'services', label: 'الخدمات', count: 22 },
];

const labelOf = (value: string) => TYPE_OPTIONS.find((o) => o.value === value)?.label ?? value;

export default function Demo() {
  const [type, setType] = useState<string[]>(['datasets', 'apis']);
  const [sort, setSort] = useState('newest');
  const [applied, setApplied] = useState<string[]>(['datasets', 'apis']);

  const remove = (value: string) => {
    setApplied((prev) => prev.filter((v) => v !== value));
    setType((prev) => prev.filter((v) => v !== value));
  };

  return (
    <Filtration>
      <FiltrationTrigger>تصفية</FiltrationTrigger>
      <FiltrationResults aria-label="الفلاتر المطبقة">
        {applied.map((value) => (
          <Tag
            key={value}
            variant="primary"
            dismissible
            closeLabel={`إزالة ${labelOf(value)}`}
            onDismiss={() => remove(value)}
          >
            {labelOf(value)}
          </Tag>
        ))}
      </FiltrationResults>
      <FiltrationPanel aria-label="الفلاتر">
        <FiltrationSection label="النوع" count={type.length}>
          <FiltrationCheckboxFilter
            aria-label="النوع"
            options={TYPE_OPTIONS}
            value={type}
            onValueChange={setType}
            searchable
            searchLabel="ابحث في الأنواع"
            collapseAfter={3}
          />
        </FiltrationSection>
        <FiltrationSection label="الترتيب">
          <FiltrationOptionList aria-label="الترتيب" value={sort} onValueChange={setSort}>
            <FiltrationOption value="newest">الأحدث أولاً</FiltrationOption>
            <FiltrationOption value="oldest">الأقدم أولاً</FiltrationOption>
          </FiltrationOptionList>
        </FiltrationSection>
        <FiltrationFooter
          appliedCount={applied.length}
          onApply={() => setApplied(type)}
          onClear={() => {
            setType([]);
            setApplied([]);
          }}
        />
      </FiltrationPanel>
    </Filtration>
  );
}
```

## Accessibility

يحمل كل قسم `role="group"` ويأخذ اسمه من عنوانه. ويعرض مشغل اللوحة المنبثقة `aria-expanded` و`aria-controls`. المرشحات داخل اللوحة مربعات اختيار وحقول حقيقية لها تسميات.

زرا التطبيق والمسح زران حقيقيان. ويظهر عداد النتائج نصاً، مما يتيح لقارئ الشاشة قراءة عدد النتائج المطابقة المتبقية.
