---
title: Metric
slug: metric
category: Data display
status: stable
description: 'React KPI metric card with label, value, change delta, trend, an optional sparkline, icon, and action slots. Group tiles with MetricGroup for dashboards.'
seoTitle: 'Metric: React KPI card with trend and sparkline'
---

Metric shows a stat from slots: `icon`, `label`, `value`, `change` with `trend`, and an optional `MetricChart` sparkline. Arrange cards with `MetricGroup`.

## When to use

Use Metric for the headline numbers of a dashboard: requests this month, average processing time, satisfaction score. Show the change against a period so numbers have context. Arrange several with `MetricGroup`.

For a full series, use Charts instead of a sparkline.

## Example: Label, value, change

```tsx
import { Metric } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Metric label="Total revenue" value="SAR 1.2M" />
      <Metric
        label="Active users"
        value="3,204"
        change="+12.5%"
        trend="up"
        changeLabel="vs last month"
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
        label="Revenue"
        value="SAR 1.2M"
        change="+18%"
        trend="up"
        changeLabel="vs last month"
        chart={<MetricChart data={[22, 30, 26, 38, 34, 52, 44, 40, 48]} trend="up" />}
      />
      <Metric
        label="Churn"
        value="6.4%"
        change="-12%"
        trend="down"
        changeLabel="vs last month"
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
        label="Active users"
        value="3,204"
        change="+12.5%"
        trend="up"
        changeLabel="vs last month"
        chart={<MetricChart data={rising} trend="up" />}
      />
      <Metric
        label="New applications"
        value="1,829"
        change="+4.1%"
        trend="up"
        changeLabel="vs last month"
        chart={<MetricChart data={rising} trend="up" />}
      />
      <Metric
        label="Error rate"
        value="0.4%"
        change="-0.2%"
        trend="down"
        changeLabel="vs last month"
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
      label="24h Views"
      action={
        <Button variant="ghost" size="icon-md" aria-label="More">
          <MoreVertical />
        </Button>
      }
      value="50%"
      change="+100%"
      trend="up"
      changeType="01"
      changeLabel="vs last month"
      chart={<MetricChart data={[22, 30, 26, 38, 34, 52, 44, 40, 48]} trend="up" />}
      footer={
        <Button variant="outline" size="sm">
          View report
        </Button>
      }
    />
  );
}
```

## Accessibility

The label and value are text, so they read in order. The trend icon is decorative; the `change` text must include the direction, such as "+12%", so it is not conveyed by color or icon alone.

The sparkline is hidden from assistive technology and the value carries the meaning. Separators between tiles use `role="separator"`.
