---
description: 'مخططات بيانية SVG في React بلا اعتماديات، تستخدم لوحة ألوان الهيئة الفئوية: BarChart، LineChart، وPieChart. لكل مخطط جدول بديل متاح الوصول ودعم للاتجاه العربي.'
seoTitle: 'الرسوم البيانية: مخططات أعمدة وخطوط ودوائر في React (SVG)'
---

تتشارك المخططات الثلاثة واجهة واحدة: مرر `data` للمخطط الدائري، أو `series` مع `categories` لمخطط الأعمدة والخطوط. يعرض كل مخطط جدول بيانات بديلاً لتسهيل الوصول.

## When to use

استخدم BarChart لمقارنة الفئات، LineChart لتتبع التغير عبر الزمن، وPieChart لعرض حصص قليلة من مجموع واحد. مرر `series` و`categories` لمخطط الأعمدة والخطوط، أو `data` للمخطط الدائري.

أبق عدد السلاسل قليلاً لتبقى الألوان الفئوية متمايزة. لرقم رئيسي واحد، استخدم Metric.

## Example: Bar chart

```tsx
import { BarChart } from '@dev-dga/react';

export default function Demo() {
  return (
    <BarChart
      title="الطلبات حسب القناة"
      categories={['البوابة', 'التطبيق', 'الكشك', 'الهاتف']}
      series={[{ label: 'هذا الربع', data: [420, 310, 90, 160] }]}
      legend
      style={{ maxWidth: 520 }}
    />
  );
}
```

## Example: Line chart

```tsx
import { LineChart } from '@dev-dga/react';

export default function Demo() {
  return (
    <LineChart
      title="المستخدمون النشطون شهرياً"
      categories={['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو']}
      series={[
        { label: 'المواطنون', data: [12, 19, 22, 30, 36, 44] },
        { label: 'المنشآت', data: [8, 11, 13, 16, 21, 25] },
      ]}
      legend
      style={{ maxWidth: 520 }}
    />
  );
}
```

## Example: Pie chart

```tsx
import { PieChart } from '@dev-dga/react';

export default function Demo() {
  return (
    <PieChart
      title="مصادر الزيارات"
      donut
      data={[
        { label: 'مباشر', value: 45 },
        { label: 'بحث', value: 30 },
        { label: 'إحالة', value: 15 },
        { label: 'وسائل التواصل', value: 10 },
      ]}
      legend
    />
  );
}
```

## Accessibility

يعرض كل مخطط `role="img"` مع اسم متاح الوصول وجدول بيانات مخفي بصرياً، مما يتيح لمستخدمي قارئات الشاشة الوصول إلى القيم الفعلية.

تأتي الألوان من مقياس الهيئة الفئوي، وتستخدم مفاتيح المخطط تسميات نصية إلى جانب اللون. تتبع المحاور والتسميات اتجاه الصفحة في العربية.
