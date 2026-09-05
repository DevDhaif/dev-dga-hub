---
description: 'رسوم SVG في React بلا اعتماديات بلوحة ألوان الهيئة الفئوية: BarChart وLineChart وPieChart، لكلٍّ جدول بديل متاح الوصول ودعم للاتجاه العربي.'
seoTitle: 'الرسوم البيانية: مخطّطات أعمدة وخطوط ودوائر في React (SVG)'
---

تتشارك المخططات الثلاثة واجهة واحدة: مرر `data` للمخطط الدائري، أو `series` مع `categories` للأعمدة والخطوط. ويعرض كل منها جدول بيانات بديلًا لتسهيل الوصول.

## When to use

استخدم BarChart لمقارنة الفئات، وLineChart للتغيّر عبر الزمن، وPieChart لعدد صغير من الحصص من كل. مرّر `series` و`categories` للأعمدة والخطوط، أو `data` للدائري.

أبقِ عدد السلاسل قليلًا لتبقى الألوان الفئوية متمايزة. لرقم رئيسي واحد، استخدم Metric.

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
      title="المستخدمون النشطون شهريًّا"
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

يعرض كل رسم `role="img"` باسم متاح وجدول بيانات مخفي بصريًا، فيحصل مستخدم قارئ الشاشة على القيم الفعلية.

تأتي الألوان من مقياس الهيئة الفئوي، وتستخدم مفاتيح الرسم تسميات نصّية لا اللون وحده. تتبع المحاور والتسميات اتجاه الصفحة في العربية.
