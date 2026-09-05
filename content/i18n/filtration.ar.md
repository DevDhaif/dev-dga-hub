---
description: 'لوحة مرشّحات متعدّدة الأوجه في React، منبثقة أو مضمّنة، بأقسام ومرشّحات مربّعات اختيار وعدّاد نتائج وزرَي تطبيق ومسح. تبقى الحالة في كودك.'
seoTitle: 'تصفية: مكوّن Filtration لوحة مرشّحات متعدّدة بتطبيق مرحلي'
---

تفتح Filtration لوحة أقسام تصفية يغلقها زرا التطبيق والمسح. الحالة ملكك: كل قسم يغلف عنصرًا خاضعًا للتحكم.

## When to use

استخدم Filtration فوق نتائج البحث والجداول وأدلّة الخدمات حين يجمع المستخدم عدّة معايير: الحالة والمنطقة والتاريخ والفئة. اجمع التغييرات وطبّقها معًا حتى لا تقفز النتائج بعد كل نقرة.

استخدم اللوحة المضمّنة في الشاشات العريضة والمنبثقة في الجوال. لمرشّح واحد يكفي Select أو صف من Chip.

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
      <FiltrationResults aria-label="الفلاتر المطبّقة">
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

كل قسم `role="group"` مسمّى بعنوانه، ويعرض مشغّل اللوحة المنبثقة `aria-expanded` و`aria-controls`. المرشّحات داخلها مربّعات اختيار وحقول حقيقية بتسميات.

زرا التطبيق والمسح زران، وعدّاد النتائج نص فيقرأ قارئ الشاشة عدد المطابقات المتبقّية.
