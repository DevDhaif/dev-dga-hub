---
description: 'جدول بيانات مركب في React برأس وجسم وتذييل وتعليق وترويسات قابلة للفرز والتصفية وصفوف قابلة للاختيار وأحجام وتلوين متناوب للصفوف وترويسة ثابتة.'
seoTitle: 'جدول: مكون Table جدول بيانات متاح الوصول بترويسات قابلة للفرز'
---

ابن Table من أجزاء الرأس والجسم والصف والترويسة والخلية. تحتوي الخلية ما تركّبه أنت. تكتسب الترويسات خاصيتي `sortable` و`filterable`، ويبقى المنطق في كودك.

## When to use

استخدم Table للسجلات ذات الصفات المتعددة التي يقارنها المستخدم أو يفرزها أو يختارها: الطلبات والفواتير والمستخدمون. أبق المنطق في كودك واستخدم أدوات الترويسة لإظهاره.

استخدم StructuredList للقوائم البسيطة وDescriptionList للسجل الواحد.

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
    <Table aria-label="مستخدمو المنصة">
      <TableCaption>مستخدمو المنصة</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>الاسم</TableHead>
          <TableHead>البريد الإلكتروني</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>سارة العتيبي</TableCell>
          <TableCell>sara@dev-dga.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>خالد ناصر</TableCell>
          <TableCell>khalid@dev-dga.com</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>مستخدمان</TableCell>
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
  { id: 'SRV-01', service: 'التسجيل التجاري', status: 'نشط' },
  { id: 'SRV-02', service: 'تجديد تصريح العمل', status: 'نشط' },
  { id: 'SRV-03', service: 'تحديث العنوان', status: 'قيد الانتظار' },
];

export default function Demo() {
  return (
    <Table aria-label="الخدمات">
      <TableHeader>
        <TableRow>
          <TableHead align="center">
            <Checkbox size="sm" aria-label="تحديد كل الصفوف" />
          </TableHead>
          <TableHead>الخدمة</TableHead>
          <TableHead>النوع</TableHead>
          <TableHead>الحالة</TableHead>
          <TableHead filterable filterLabel="تصفية العمود" align="center" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r, i) => (
          <TableRow key={r.id}>
            <TableCell align="center">
              <Checkbox size="sm" aria-label={`تحديد الصف ${i + 1}`} />
            </TableCell>
            <TableCell>
              <Link href="#">{r.service}</Link>
            </TableCell>
            <TableCell>
              <Tag variant="secondary-subtle" shape="squared">
                رقمي
              </Tag>
            </TableCell>
            <TableCell>
              <StatusTag tone={r.status === 'نشط' ? 'success' : 'neutral'}>{r.status}</StatusTag>
            </TableCell>
            <TableCell align="center">
              <Button variant="ghost" size="icon-sm" aria-label={`عرض الصف ${i + 1}`}>
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

const columns = ['الاسم', 'التاريخ', 'الحالة'];
const data = [
  ['سارة العتيبي', '2026-06-01', 'نشط'],
  ['خالد ناصر', '2026-05-28', 'نشط'],
  ['مها يوسف', '2026-05-20', 'قيد الانتظار'],
];

export default function Demo() {
  const [sort, setSort] = useState<{ col: string; dir: 'asc' | 'desc' }>({
    col: 'الاسم',
    dir: 'asc',
  });

  const onSort = (col: string) => {
    setSort((s) =>
      s.col === col ? { col, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { col, dir: 'asc' },
    );
  };

  return (
    <Table aria-label="مستخدمون قابلون للفرز">
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead
              key={col}
              sortable
              sortDirection={sort.col === col ? sort.dir : false}
              sortLabel="فعل للفرز"
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
  { id: 1, name: 'سارة العتيبي', role: 'مسؤول' },
  { id: 2, name: 'خالد ناصر', role: 'محرر' },
  { id: 3, name: 'مها يوسف', role: 'مشاهد' },
];

export default function Demo() {
  const [selected, setSelected] = useState(new Set([2]));
  const allChecked = selected.size === rows.length;
  const someChecked = selected.size > 0 && !allChecked;

  return (
    <Table aria-label="مستخدمون قابلون للتحديد">
      <TableHeader>
        <TableRow>
          <TableHead align="center">
            <Checkbox
              size="sm"
              aria-label="تحديد كل الصفوف"
              checked={allChecked ? true : someChecked ? 'indeterminate' : false}
              onCheckedChange={(v) => setSelected(v ? new Set(rows.map((r) => r.id)) : new Set())}
            />
          </TableHead>
          <TableHead>الاسم</TableHead>
          <TableHead>الدور</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.id} selected={selected.has(r.id)}>
            <TableCell align="center">
              <Checkbox
                size="sm"
                aria-label={`تحديد ${r.name}`}
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
          <TableCell colSpan={2}>{selected.size} محدد</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
```

## Accessibility

يعرض Table عنصر `<table>` أصلياً. أضف `TableCaption` لتسميته. حين تحدد `aria-label`، يصبح غلاف التمرير منطقة `role="region"` قابلة للتركيز. بهذا يستطيع مستخدم لوحة المفاتيح تمرير الجداول العريضة.

تعرض الترويسات القابلة للفرز `aria-sort`، وتعلن أزرار التبديل حالتها. تستخدم الصفوف القابلة للاختيار مربعات اختيار حقيقية بتسميات.
