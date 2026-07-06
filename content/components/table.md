---
title: Table
slug: table
category: Data display
status: stable
description: 'A semantic table with sortable and filterable headers.'
---

Build a Table from Header, Body, Row, Head, and Cell parts. Cell content is whatever you compose; headers gain `sortable` and `filterable` affordances, with the logic in your code.

## Example: Minimal table

```tsx
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Table aria-label="Platform users">
      <TableCaption>Platform users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Sara Al-Otaibi</TableCell>
          <TableCell>sara@dev-dga.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Khalid Nasser</TableCell>
          <TableCell>khalid@dev-dga.com</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>2 users</TableCell>
          <TableCell />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
```

## Example: Composed cells

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Link,
  Tag,
  StatusTag,
  Checkbox,
  Button,
} from '@dev-dga/react';

const ArrowRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

const rows = [
  { id: 'SRV-01', service: 'Commercial registration', status: 'Active' },
  { id: 'SRV-02', service: 'Work permit renewal', status: 'Active' },
  { id: 'SRV-03', service: 'Address update', status: 'Pending' },
];

export default function Demo() {
  return (
    <Table aria-label="Services">
      <TableHeader>
        <TableRow>
          <TableHead align="center">
            <Checkbox size="sm" aria-label="Select all rows" />
          </TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead filterable filterLabel="Filter column" align="center" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r, i) => (
          <TableRow key={r.id}>
            <TableCell align="center">
              <Checkbox size="sm" aria-label={`Select row ${i + 1}`} />
            </TableCell>
            <TableCell>
              <Link href="#">{r.service}</Link>
            </TableCell>
            <TableCell>
              <Tag variant="secondary-subtle" shape="squared">
                Digital
              </Tag>
            </TableCell>
            <TableCell>
              <StatusTag tone={r.status === 'Active' ? 'success' : 'neutral'}>{r.status}</StatusTag>
            </TableCell>
            <TableCell align="center">
              <Button variant="ghost" size="icon-sm" aria-label={`View row ${i + 1}`}>
                <ArrowRight />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

## Example: Sortable columns

```tsx
import { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@dev-dga/react';

const columns = ['Name', 'Date', 'Status'];
const data = [
  ['Sara Al-Otaibi', '2026-06-01', 'Active'],
  ['Khalid Nasser', '2026-05-28', 'Active'],
  ['Maha Yusuf', '2026-05-20', 'Pending'],
];

export default function Demo() {
  const [sort, setSort] = useState<{ col: string; dir: 'asc' | 'desc' }>({
    col: 'Name',
    dir: 'asc',
  });

  const onSort = (col: string) => {
    setSort((s) =>
      s.col === col ? { col, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { col, dir: 'asc' },
    );
  };

  return (
    <Table aria-label="Sortable users">
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead
              key={col}
              sortable
              sortDirection={sort.col === col ? sort.dir : false}
              sortLabel="activate to sort"
              onClick={() => onSort(col)}
            >
              {col}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row[0]}>
            {row.map((cell, i) => (
              <TableCell key={i}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

## Example: Selectable rows (controlled)

```tsx
import { useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  Checkbox,
} from '@dev-dga/react';

const rows = [
  { id: 1, name: 'Sara Al-Otaibi', role: 'Admin' },
  { id: 2, name: 'Khalid Nasser', role: 'Editor' },
  { id: 3, name: 'Maha Yusuf', role: 'Viewer' },
];

export default function Demo() {
  const [selected, setSelected] = useState(new Set([2]));
  const allChecked = selected.size === rows.length;
  const someChecked = selected.size > 0 && !allChecked;

  return (
    <Table aria-label="Selectable users">
      <TableHeader>
        <TableRow>
          <TableHead align="center">
            <Checkbox
              size="sm"
              aria-label="Select all rows"
              checked={allChecked ? true : someChecked ? 'indeterminate' : false}
              onCheckedChange={(v) => setSelected(v ? new Set(rows.map((r) => r.id)) : new Set())}
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.id} selected={selected.has(r.id)}>
            <TableCell align="center">
              <Checkbox
                size="sm"
                aria-label={`Select ${r.name}`}
                checked={selected.has(r.id)}
                onCheckedChange={(v) =>
                  setSelected((prev) => {
                    const next = new Set(prev);
                    if (v) next.add(r.id);
                    else next.delete(r.id);
                    return next;
                  })
                }
              />
            </TableCell>
            <TableCell>{r.name}</TableCell>
            <TableCell>{r.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell align="center" />
          <TableCell colSpan={2}>{selected.size} selected</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
```
