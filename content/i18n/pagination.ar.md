---
description: 'ترقيم صفحات متاح الوصول في React: زرا السابق والتالي، روابط الصفحات، صفحة حالية بشريط سفلي، علامات حذف، ودالة paginationRange المساعدة لعرض ثابت.'
seoTitle: 'ترقيم الصفحات: مكون Pagination متاح الوصول'
---

حدد الصفحة الحالية بـ `isActive`، واستخدم الدالة `paginationRange` ليحافظ شريط الترقيم على عرض ثابت بين الصفحات.

## When to use

استخدم Pagination أسفل الجداول والقوائم التي يقسمها الخادم إلى صفحات، مثل أرشيف الطلبات. أبق شريط الترقيم بالعرض نفسه عبر الصفحات باستخدام `paginationRange`، حتى لا تتحرك الأدوات تحت المؤشر.

في الموجزات اللانهائية، استخدم التحميل عند التمرير بدل Pagination. اعرض العدد الإجمالي في مكان قريب.

## Example: Static pager

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="?page=1" label="السابق" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=2" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=99">99</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="?page=3" label="التالي" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

## Example: Sizes

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Pagination key={size} size={size}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" label="السابق" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" label="التالي" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ))}
    </div>
  );
}
```

## Example: Stateful pager with paginationRange

```tsx
import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationOverflow,
  paginationRange,
} from '@dev-dga/react';

export default function Demo() {
  const pageCount = 20;
  const [page, setPage] = useState(1);
  const slots = paginationRange(page, pageCount);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            label="السابق"
            aria-disabled={page === 1}
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.max(1, p - 1));
            }}
          />
        </PaginationItem>
        {slots.map((slot, i) => {
          if (slot === 'ellipsis') {
            const prev = slots[i - 1] as number;
            const next = slots[i + 1] as number;
            const hidden = Array.from({ length: next - prev - 1 }, (_, k) => prev + 1 + k);
            return (
              <PaginationItem key={`overflow-${i}`}>
                <PaginationOverflow
                  pages={hidden}
                  current={hidden.includes(page) ? page : undefined}
                  onSelect={setPage}
                />
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={slot}>
              <PaginationLink
                href="#"
                isActive={slot === page}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(slot);
                }}
              >
                {slot}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            href="#"
            label="التالي"
            aria-disabled={page === pageCount}
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.min(pageCount, p + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

## Accessibility

يعرض Pagination عنصر `<nav>` بـ `aria-label` وقائمة روابط. تحمل الصفحة الحالية `aria-current="page"`، ويحمل زرا السابق والتالي `aria-disabled` عند تعطيلهما.

لزري السابق والتالي أسماء متاحة، وتنعكس أيقوناتهما في الاتجاه من اليمين إلى اليسار لتشير إلى الجهة الصحيحة.
