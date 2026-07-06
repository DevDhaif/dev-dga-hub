'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  BarChart,
  Button,
  LineChart,
  Metric,
  MetricChart,
  PieChart,
  SearchBox,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  StatusTag,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { Wordmark } from '@/components/site/Wordmark';
import { ArrowLeft } from '@/components/icons';
import './masar.css';

const Icon = ({ d }: { d: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {d.split('|').map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);
const I = {
  overview: 'M3 11 12 3l9 8|M5 9v11h5v-6h4v6h5V9',
  services:
    'M14 3v4a1 1 0 0 0 1 1h4M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-4-5Z|M9 13h6M9 17h6',
  requests: 'M4 4h16v12H8l-4 4V4Z',
  reports: 'M4 20V10M10 20V4M16 20v-8M22 20H2',
  settings:
    'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z|M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.3 1a7 7 0 0 0-1.7-1L14.5 2h-5l-.4 2.9a7 7 0 0 0-1.7 1l-2.3-1-2 3.4 2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.3-1a7 7 0 0 0 1.7 1l.4 2.9h5l.4-2.9a7 7 0 0 0 1.7-1l2.3 1 2-3.4-2-1.6a7 7 0 0 0 .1-1Z',
  plus: 'M12 5v14M5 12h14',
};

export function MasarDashboard({ preview = false }: { preview?: boolean } = {}) {
  const { c, locale } = useCopy();
  const m = c.masar;
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);
  const [active, setActive] = useState('overview');

  const nav = [
    { id: 'overview', label: m.nav.overview, icon: I.overview },
    { id: 'services', label: m.nav.services, icon: I.services },
    { id: 'requests', label: m.nav.requests, icon: I.requests, badge: '8' },
    { id: 'reports', label: m.nav.reports, icon: I.reports },
    { id: 'settings', label: m.nav.settings, icon: I.settings },
  ];

  const rows = [
    {
      id: 'REG-4821',
      service: m.table.services.registration,
      who: t('Sara Al-Otaibi', 'سارة العتيبي'),
      status: 'approved' as const,
    },
    {
      id: 'PRM-4820',
      service: m.table.services.permit,
      who: t('Khalid Nasser', 'خالد ناصر'),
      status: 'active' as const,
    },
    {
      id: 'LIC-4817',
      service: m.table.services.license,
      who: t('Maha Yusuf', 'مها يوسف'),
      status: 'pending' as const,
    },
    {
      id: 'REN-4814',
      service: m.table.services.renewal,
      who: t('Omar Faisal', 'عمر فيصل'),
      status: 'approved' as const,
    },
  ];
  const statusTone = { approved: 'success', active: 'info', pending: 'warning' } as const;

  const dashboard = (
    <SidebarProvider className={preview ? 'masar masar--preview' : 'masar'}>
      <Sidebar aria-label={m.subtitle}>
        <SidebarHeader>
          <div className="masar__brand">
            <Wordmark size={22} />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>{m.subtitle}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {nav.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={active === item.id}
                      tooltip={item.label}
                      onClick={() => setActive(item.id)}
                    >
                      <Icon d={item.icon} />
                      <span>{item.label}</span>
                      {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenuButton tooltip="Sara">
            <Avatar size="sm">
              <AvatarFallback>{t('SA', 'سع')}</AvatarFallback>
            </Avatar>
            <span>{t('Sara Al-Otaibi', 'سارة العتيبي')}</span>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <div className="masar__scroll">
          <header className="masar__top">
            <div className="masar__top-start">
              <SidebarTrigger />
              <div>
                <h1 className="masar__greeting">{m.greeting}</h1>
                <p className="masar__greeting-sub">{m.greetingSub}</p>
              </div>
            </div>
            <div className="masar__top-end">
              <SearchBox
                aria-label={m.search}
                placeholder={m.search}
                voiceSearch={false}
                style={{ maxWidth: 220 }}
              />
              <Button startIcon={<Icon d={I.plus} />}>{m.newRequest}</Button>
            </div>
          </header>

          <section className="masar__stats">
            <Metric
              label={m.stats.requests}
              value="1,284"
              change="+8%"
              trend="up"
              chart={<MetricChart data={[20, 28, 24, 33, 30, 44, 40]} trend="up" />}
            />
            <Metric
              label={m.stats.completed}
              value="964"
              change="+12%"
              trend="up"
              chart={<MetricChart data={[14, 18, 22, 26, 30, 38, 44]} trend="up" />}
            />
            <Metric
              label={m.stats.avgTime}
              value={`3.4 ${m.stats.days}`}
              change="-6%"
              trend="down"
              chart={<MetricChart data={[48, 44, 40, 36, 34, 30, 28]} trend="down" />}
            />
            <Metric
              label={m.stats.satisfaction}
              value="98%"
              change="+2%"
              trend="up"
              chart={<MetricChart data={[90, 92, 91, 94, 95, 97, 98]} trend="up" />}
            />
          </section>

          <section className="masar__charts">
            <Panel>
              <BarChart
                title={m.charts.volume}
                categories={[m.charts.portal, m.charts.app, m.charts.kiosk, m.charts.phone]}
                series={[{ label: m.charts.volume, data: [420, 310, 90, 160] }]}
              />
            </Panel>
            <Panel>
              <LineChart
                title={m.charts.trend}
                categories={['1', '2', '3', '4', '5', '6']}
                series={[
                  { label: m.charts.citizens, data: [12, 19, 22, 30, 36, 44] },
                  { label: m.charts.business, data: [8, 11, 13, 16, 21, 25] },
                ]}
                legend
              />
            </Panel>
            <Panel>
              <PieChart
                title={m.charts.channels}
                donut
                data={[
                  { label: m.charts.portal, value: 52 },
                  { label: m.charts.app, value: 33 },
                  { label: m.charts.kiosk, value: 15 },
                ]}
                legend
              />
            </Panel>
          </section>

          <section className="masar__bottom">
            <Panel>
              <h2 className="masar__panel-title">{m.table.title}</h2>
              <Table aria-label={m.table.title}>
                <TableHeader>
                  <TableRow>
                    <TableHead>{m.table.id}</TableHead>
                    <TableHead>{m.table.service}</TableHead>
                    <TableHead>{m.table.applicant}</TableHead>
                    <TableHead>{m.table.status}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell dir="ltr">{r.id}</TableCell>
                      <TableCell>{r.service}</TableCell>
                      <TableCell>{r.who}</TableCell>
                      <TableCell>
                        <StatusTag tone={statusTone[r.status]}>
                          {m.table.statuses[r.status]}
                        </StatusTag>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Panel>
            <Panel>
              <h2 className="masar__panel-title">{m.activity.title}</h2>
              <ul className="masar__activity">
                {m.activity.items.map((item, i) => (
                  <li key={i}>
                    <span className="masar__activity-dot" aria-hidden />
                    <span className="masar__activity-text">{item}</span>
                    <span className="masar__activity-time mono">
                      {i + 1}h {m.activity.ago}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );

  if (preview) return dashboard;

  return (
    <div className="masar-page shell">
      <div className="masar-page__bar">
        <Link href="/" className="masar-page__back">
          <ArrowLeft className="rtl-flip-x" width={16} height={16} />
          {m.backToExamples}
        </Link>
        <span className="masar-page__built mono">{m.builtWith}</span>
      </div>
      {dashboard}
    </div>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return <div className="masar__panel">{children}</div>;
}
