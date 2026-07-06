---
description: 'بطاقة مؤشر أداء بقيمة واتجاه ومخطط مصغر.'
---

يعرض Metric إحصائية عبر فتحات: `icon` و`label` و`value` و`change` مع `trend`، ومخطط `MetricChart` مصغر اختياري. رتب البطاقات بـ `MetricGroup`.

## Example: Label, value, change

```tsx
import { Metric } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Metric label="إجمالي الإيرادات" value="1.2 مليون ريال" />
      <Metric
        label="المستخدمون النشطون"
        value="3,204"
        change="+12.5%"
        trend="up"
        changeLabel="مقارنةً بالشهر الماضي"
      />
    </div>
  );
}
```

## Example: With a trend chart

```tsx
import { Metric, MetricChart } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Metric
        label="الإيرادات"
        value="1.2 مليون ريال"
        change="+18%"
        trend="up"
        changeLabel="مقارنةً بالشهر الماضي"
        chart={<MetricChart data={[22, 30, 26, 38, 34, 52, 44, 40, 48]} trend="up" />}
      />
      <Metric
        label="معدل التسرّب"
        value="6.4%"
        change="-12%"
        trend="down"
        changeLabel="مقارنةً بالشهر الماضي"
        chart={<MetricChart data={[34, 50, 42, 38, 30, 26, 22, 18, 14]} trend="down" />}
      />
    </div>
  );
}
```

## Example: Dashboard grid (MetricGroup)

```tsx
import { Metric, MetricChart, MetricGroup } from '@dev-dga/react';

const rising = [22, 30, 26, 38, 34, 52, 44, 40, 48];
const falling = [34, 50, 42, 38, 30, 26, 22, 18, 14];

export default function Demo() {
  return (
    <MetricGroup columns={3}>
      <Metric
        label="المستخدمون النشطون"
        value="3,204"
        change="+12.5%"
        trend="up"
        changeLabel="مقارنةً بالشهر الماضي"
        chart={<MetricChart data={rising} trend="up" />}
      />
      <Metric
        label="الطلبات الجديدة"
        value="1,829"
        change="+4.1%"
        trend="up"
        changeLabel="مقارنةً بالشهر الماضي"
        chart={<MetricChart data={rising} trend="up" />}
      />
      <Metric
        label="معدل الأخطاء"
        value="0.4%"
        change="-0.2%"
        trend="down"
        changeLabel="مقارنةً بالشهر الماضي"
        chart={<MetricChart data={falling} trend="down" />}
      />
    </MetricGroup>
  );
}
```

## Example: Full card with icon, action & footer

```tsx
import { Metric, MetricChart, Button } from '@dev-dga/react';

const TrendGlyph = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M16 7h6v6" />
    <path d="m22 7-8.5 8.5-5-5L2 17" />
  </svg>
);

const MoreVertical = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);

export default function Demo() {
  return (
    <Metric
      layout="large"
      icon={<TrendGlyph />}
      label="المشاهدات خلال 24 ساعة"
      action={
        <Button variant="ghost" size="icon-md" aria-label="المزيد">
          <MoreVertical />
        </Button>
      }
      value="50%"
      change="+100%"
      trend="up"
      changeType="01"
      changeLabel="مقارنةً بالشهر الماضي"
      chart={<MetricChart data={[22, 30, 26, 38, 34, 52, 44, 40, 48]} trend="up" />}
      footer={
        <Button variant="outline" size="sm">
          عرض التقرير
        </Button>
      }
    />
  );
}
```
