'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ContentSwitcher,
  ContentSwitcherItem,
  LineChart,
  Metric,
  MetricChart,
  MetricGroup,
  PieChart,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  TimelineTime,
  TimelineTitle,
  type TimelineStatus,
} from '@dev-dga/react';
import { useCopy, type Locale } from '@/lib/i18n';

const MONTHS: Record<Locale, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
};
const TIMES: Record<Locale, string[]> = {
  en: ['2 min', '1 hr', '3 hr', '1 day'],
  ar: ['دقيقتان', 'ساعة', '3 ساعات', 'يوم'],
};
const VS = { en: 'vs last month', ar: 'مقارنةً بالشهر الماضي' };
const STATUSES: TimelineStatus[] = ['success', 'info', 'warning', 'default'];

export function AnalyticsBlock() {
  const { c, locale } = useCopy();
  const d = c.blocks.demo;
  const s = c.masar.stats;
  const ch = c.masar.charts;
  const act = c.masar.activity;
  const [range, setRange] = useState('30');

  return (
    <div className="block-dash">
      <div className="block-dash__bar">
        <h3 className="block-dash__title">{d.analyticsTitle}</h3>
        <div className="block-dash__controls">
          <ContentSwitcher
            size="sm"
            aria-label={d.analyticsTitle}
            value={range}
            onValueChange={(v) => v && setRange(v)}
          >
            <ContentSwitcherItem value="7">{d.range7}</ContentSwitcherItem>
            <ContentSwitcherItem value="30">{d.range30}</ContentSwitcherItem>
            <ContentSwitcherItem value="12">{d.range12}</ContentSwitcherItem>
          </ContentSwitcher>
          <Button variant="outline" size="md">
            {d.exportBtn}
          </Button>
        </div>
      </div>

      <MetricGroup columns={3}>
        <Metric
          label={s.requests}
          value="1,284"
          change="+12%"
          trend="up"
          changeLabel={VS[locale]}
          chart={<MetricChart data={[8, 10, 9, 12, 11, 14, 13, 16]} trend="up" />}
        />
        <Metric
          label={s.completed}
          value="18,592"
          change="+8%"
          trend="up"
          changeLabel={VS[locale]}
          chart={<MetricChart data={[12, 13, 12, 15, 16, 15, 18, 19]} trend="up" />}
        />
        <Metric
          label={s.satisfaction}
          value="96%"
          change="+3%"
          trend="up"
          changeLabel={VS[locale]}
          chart={<MetricChart data={[88, 90, 91, 92, 93, 94, 95, 96]} trend="up" />}
        />
      </MetricGroup>

      <div className="block-dash__grid">
        <Card variant="outline" padding="lg" className="block-dash__panel">
          <CardHeader>
            <CardTitle>{ch.trend}</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              title={ch.trend}
              categories={MONTHS[locale]}
              series={[
                { label: ch.citizens, data: [820, 932, 901, 1094, 1230, 1284] },
                { label: ch.business, data: [420, 480, 510, 560, 610, 690] },
              ]}
            />
          </CardContent>
        </Card>

        <Card variant="outline" padding="lg" className="block-dash__panel">
          <CardHeader>
            <CardTitle>{ch.channels}</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart
              donut
              title={ch.channels}
              data={[
                { label: ch.portal, value: 44 },
                { label: ch.app, value: 30 },
                { label: ch.kiosk, value: 14 },
                { label: ch.phone, value: 12 },
              ]}
            />
          </CardContent>
        </Card>
      </div>

      <Card variant="outline" padding="lg">
        <CardHeader>
          <CardTitle>{act.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Timeline>
            {act.items.map((item, i) => (
              <TimelineItem key={item}>
                <TimelineMarker status={STATUSES[i]} />
                <TimelineContent>
                  <TimelineTitle>{item}</TimelineTitle>
                  <TimelineTime>{`${TIMES[locale][i]} ${act.ago}`}</TimelineTime>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </div>
  );
}

export const analyticsCode = `import {
  Button, Card, CardContent, CardHeader, CardTitle, ContentSwitcher, ContentSwitcherItem,
  LineChart, Metric, MetricChart, MetricGroup, PieChart,
  Timeline, TimelineContent, TimelineItem, TimelineMarker, TimelineTime, TimelineTitle,
} from '@dev-dga/react';
import { useState } from 'react';

export function AnalyticsDashboard() {
  const [range, setRange] = useState('30');
  return (
    <div style={{ display: 'grid', gap: '1.25rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.75rem' }}>
        <h3>Performance overview</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <ContentSwitcher size="sm" aria-label="Range" value={range} onValueChange={(v) => v && setRange(v)}>
            <ContentSwitcherItem value="7">7 days</ContentSwitcherItem>
            <ContentSwitcherItem value="30">30 days</ContentSwitcherItem>
            <ContentSwitcherItem value="12">12 months</ContentSwitcherItem>
          </ContentSwitcher>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      <MetricGroup columns={3}>
        <Metric label="Open requests" value="1,284" change="+12%" trend="up"
          chart={<MetricChart data={[8, 10, 9, 12, 11, 14, 13, 16]} trend="up" />} />
        <Metric label="Completed" value="18,592" change="+8%" trend="up"
          chart={<MetricChart data={[12, 13, 12, 15, 16, 15, 18, 19]} trend="up" />} />
        <Metric label="Satisfaction" value="96%" change="+3%" trend="up"
          chart={<MetricChart data={[88, 90, 91, 92, 93, 94, 95, 96]} trend="up" />} />
      </MetricGroup>

      <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Card variant="outline" padding="lg">
          <CardHeader><CardTitle>Requests over time</CardTitle></CardHeader>
          <CardContent>
            <LineChart
              title="Requests over time"
              categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
              series={[
                { label: 'Citizens', data: [820, 932, 901, 1094, 1230, 1284] },
                { label: 'Business', data: [420, 480, 510, 560, 610, 690] },
              ]}
            />
          </CardContent>
        </Card>
        <Card variant="outline" padding="lg">
          <CardHeader><CardTitle>Channel mix</CardTitle></CardHeader>
          <CardContent>
            <PieChart donut title="Channel mix" data={[
              { label: 'Portal', value: 44 }, { label: 'App', value: 30 },
              { label: 'Kiosk', value: 14 }, { label: 'Phone', value: 12 },
            ]} />
          </CardContent>
        </Card>
      </div>

      <Card variant="outline" padding="lg">
        <CardHeader><CardTitle>Activity</CardTitle></CardHeader>
        <CardContent>
          <Timeline>
            <TimelineItem>
              <TimelineMarker status="success" />
              <TimelineContent>
                <TimelineTitle>Request #4821 was approved</TimelineTitle>
                <TimelineTime>2 min ago</TimelineTime>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>
    </div>
  );
}`;
