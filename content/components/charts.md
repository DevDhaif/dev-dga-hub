---
title: Charts
slug: charts
category: Data visualization
status: new
description: 'Dependency-free React SVG charts using the DGA categorical palette: BarChart, LineChart, and PieChart, each with an accessible table fallback and RTL support.'
seoTitle: 'Charts: React bar, line, and pie charts (SVG)'
---

The three charts share one API: pass `data` for pie, or `series` + `categories` for bar and line. Each renders an accessible table fallback.

## When to use

Use BarChart to compare categories, LineChart for change over time, and PieChart for a small number of shares of a whole. Pass `series` and `categories` for bar and line, or `data` for pie.

Keep series counts low so the categorical colors stay distinguishable. For a single headline number, use Metric.

## Example: Bar chart

```tsx
import { BarChart } from '@dev-dga/react';

export default function Demo() {
  return (
    <BarChart
      title="Requests by channel"
      categories={['Portal', 'App', 'Kiosk', 'Phone']}
      series={[{ label: 'This quarter', data: [420, 310, 90, 160] }]}
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
      title="Monthly active users"
      categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      series={[
        { label: 'Citizens', data: [12, 19, 22, 30, 36, 44] },
        { label: 'Businesses', data: [8, 11, 13, 16, 21, 25] },
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
      title="Traffic sources"
      donut
      data={[
        { label: 'Direct', value: 45 },
        { label: 'Search', value: 30 },
        { label: 'Referral', value: 15 },
        { label: 'Social', value: 10 },
      ]}
      legend
    />
  );
}
```

## Accessibility

Each chart renders `role="img"` with an accessible name and a visually hidden data table, so screen reader users get the actual values.

Colors come from the DGA categorical scale, and legends use text labels, not color alone. Axes and labels follow the page direction in RTL.
