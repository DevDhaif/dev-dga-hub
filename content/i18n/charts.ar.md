---
description: 'مخططات SVG بسيطة دون تبعيات - `PieChart` و`LineChart` و`BarChart`.'
---

تتشارك المخططات الثلاثة واجهة واحدة: مرر `data` للمخطط الدائري، أو `series` مع `categories` للأعمدة والخطوط. ويعرض كل منها جدول بيانات بديلًا لتسهيل الوصول.

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
