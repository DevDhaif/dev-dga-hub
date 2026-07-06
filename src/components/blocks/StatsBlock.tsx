'use client';

import { Metric, MetricChart, MetricGroup } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

const VS = { en: 'vs last month', ar: 'مقارنةً بالشهر الماضي' };

export function StatsBlock() {
  const { c, locale } = useCopy();
  const s = c.masar.stats;
  const vs = VS[locale];

  return (
    <MetricGroup>
      <Metric
        label={s.requests}
        value="1,284"
        change="+12%"
        trend="up"
        changeLabel={vs}
        chart={<MetricChart data={[8, 10, 9, 12, 11, 14, 13, 16]} trend="up" />}
      />
      <Metric
        label={s.completed}
        value="18,592"
        change="+8%"
        trend="up"
        changeLabel={vs}
        chart={<MetricChart data={[12, 13, 12, 15, 16, 15, 18, 19]} trend="up" />}
      />
      <Metric
        label={s.avgTime}
        value={`2.4 ${s.days}`}
        change="−0.5"
        trend="down"
        changeLabel={vs}
        chart={<MetricChart data={[5, 4.6, 4.1, 3.6, 3.2, 2.9, 2.6, 2.4]} trend="down" />}
      />
      <Metric
        label={s.satisfaction}
        value="96%"
        change="+3%"
        trend="up"
        changeLabel={vs}
        chart={<MetricChart data={[88, 90, 91, 92, 93, 94, 95, 96]} trend="up" />}
      />
    </MetricGroup>
  );
}

export const statsCode = `import { Metric, MetricChart, MetricGroup } from '@dev-dga/react';

export function StatsOverview() {
  return (
    <MetricGroup>
      <Metric
        label="Open requests"
        value="1,284"
        change="+12%"
        trend="up"
        changeLabel="vs last month"
        chart={<MetricChart data={[8, 10, 9, 12, 11, 14, 13, 16]} trend="up" />}
      />
      <Metric
        label="Completed this month"
        value="18,592"
        change="+8%"
        trend="up"
        changeLabel="vs last month"
        chart={<MetricChart data={[12, 13, 12, 15, 16, 15, 18, 19]} trend="up" />}
      />
      <Metric
        label="Avg. processing time"
        value="2.4 days"
        change="−0.5"
        trend="down"
        changeLabel="vs last month"
        chart={<MetricChart data={[5, 4.6, 4.1, 3.6, 3.2, 2.9, 2.6, 2.4]} trend="down" />}
      />
      <Metric
        label="Satisfaction"
        value="96%"
        change="+3%"
        trend="up"
        changeLabel="vs last month"
        chart={<MetricChart data={[88, 90, 91, 92, 93, 94, 95, 96]} trend="up" />}
      />
    </MetricGroup>
  );
}`;
