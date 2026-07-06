'use client';

import {
  Avatar,
  AvatarFallback,
  Button,
  SearchBox,
  StatusTag,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@dev-dga/react';
import { useCopy, type Locale } from '@/lib/i18n';

const NAMES: Record<Locale, string[]> = {
  en: ['Sara Al-Otaibi', 'Faisal Al-Mutairi', 'Noura Al-Qahtani', 'Omar Al-Harbi', 'Layla Al-Salem'],
  ar: ['سارة العتيبي', 'فيصل المطيري', 'نورة القحطاني', 'عمر الحربي', 'ليلى السالم'],
};
const INITIALS = ['SA', 'FM', 'NK', 'OH', 'LS'];
const SORT = { en: 'activate to sort', ar: 'فعّل للفرز' };

type Tone = 'success' | 'info' | 'warning';

export function RequestsBlock() {
  const { c, locale } = useCopy();
  const d = c.blocks.demo;
  const svc = c.masar.table.services;
  const st = c.masar.table.statuses;
  const names = NAMES[locale];

  const rows: { ref: string; name: string; initials: string; service: string; status: string; tone: Tone }[] =
    [
      { ref: 'REQ-4821', name: names[0], initials: INITIALS[0], service: svc.registration, status: st.approved, tone: 'success' },
      { ref: 'REQ-4820', name: names[1], initials: INITIALS[1], service: svc.permit, status: st.active, tone: 'info' },
      { ref: 'REQ-4817', name: names[2], initials: INITIALS[2], service: svc.license, status: st.pending, tone: 'warning' },
      { ref: 'REQ-4805', name: names[3], initials: INITIALS[3], service: svc.renewal, status: st.approved, tone: 'success' },
      { ref: 'REQ-4799', name: names[4], initials: INITIALS[4], service: svc.address, status: st.active, tone: 'info' },
    ];

  return (
    <div className="block-panel">
      <div className="block-panel__bar">
        <h3 className="block-panel__title">{d.requestsTitle}</h3>
        <div className="block-panel__tools">
          <SearchBox
            className="block-panel__search"
            placeholder={d.requestsSearch}
            aria-label={d.requestsSearch}
          />
          <Button size="md">{d.newRequest}</Button>
        </div>
      </div>

      <Table aria-label={d.requestsTitle}>
        <TableHeader>
          <TableRow>
            <TableHead sortable sortDirection="asc" sortLabel={SORT[locale]}>
              {d.colRef}
            </TableHead>
            <TableHead>{d.colApplicant}</TableHead>
            <TableHead>{d.colService}</TableHead>
            <TableHead align="end">{d.colStatus}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.ref}>
              <TableCell>
                <code className="block-panel__ref" dir="ltr">
                  {r.ref}
                </code>
              </TableCell>
              <TableCell>
                <span className="block-panel__applicant">
                  <Avatar size="sm">
                    <AvatarFallback colorScheme="primary">{r.initials}</AvatarFallback>
                  </Avatar>
                  {r.name}
                </span>
              </TableCell>
              <TableCell>{r.service}</TableCell>
              <TableCell align="end">
                <StatusTag tone={r.tone}>{r.status}</StatusTag>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="block-panel__foot">
        <span className="block-panel__count">{d.pageOf}</span>
        <div className="block-panel__pager">
          <Button variant="outline" size="sm" disabled>
            {d.prev}
          </Button>
          <Button variant="outline" size="sm">
            {d.next}
          </Button>
        </div>
      </div>
    </div>
  );
}

export const requestsCode = `import {
  Avatar, AvatarFallback, Button, SearchBox, StatusTag,
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@dev-dga/react';

const rows = [
  { ref: 'REQ-4821', name: 'Sara Al-Otaibi', initials: 'SA', service: 'Commercial registration', status: 'Approved', tone: 'success' },
  { ref: 'REQ-4820', name: 'Faisal Al-Mutairi', initials: 'FM', service: 'Building permit', status: 'In review', tone: 'info' },
  { ref: 'REQ-4817', name: 'Noura Al-Qahtani', initials: 'NK', service: 'Trade license', status: 'Pending', tone: 'warning' },
];

export function RequestsTable() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
        <h3>Recent requests</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <SearchBox placeholder="Search requests…" aria-label="Search requests" />
          <Button>New request</Button>
        </div>
      </div>

      <Table aria-label="Recent requests">
        <TableHeader>
          <TableRow>
            <TableHead sortable sortDirection="asc" sortLabel="activate to sort">Reference</TableHead>
            <TableHead>Applicant</TableHead>
            <TableHead>Service</TableHead>
            <TableHead align="end">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.ref}>
              <TableCell><code>{r.ref}</code></TableCell>
              <TableCell>
                <span style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Avatar size="sm"><AvatarFallback colorScheme="primary">{r.initials}</AvatarFallback></Avatar>
                  {r.name}
                </span>
              </TableCell>
              <TableCell>{r.service}</TableCell>
              <TableCell align="end"><StatusTag tone={r.tone}>{r.status}</StatusTag></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}`;
