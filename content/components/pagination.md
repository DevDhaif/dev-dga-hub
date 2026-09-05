---
title: Pagination
slug: pagination
category: Navigation
status: stable
description: 'Accessible React pagination with previous and next, page links, an underline-bar current page, ellipses, and the paginationRange helper for a stable width.'
seoTitle: 'Pagination: accessible React pagination control'
---

Mark the current page with `isActive`, and use the `paginationRange` helper to keep the pager a stable width across pages.

## When to use

Use Pagination under tables and lists that page on the server, such as request archives. Keep the pager the same width across pages with `paginationRange` so controls do not move under the cursor.

For infinite feeds, load more on scroll instead. Show the total count nearby.

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
          <PaginationPrevious href="?page=1" label="Previous" />
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
          <PaginationNext href="?page=3" label="Next" />
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
              <PaginationPrevious href="#" label="Previous" />
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
              <PaginationNext href="#" label="Next" />
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
            label="Previous"
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
            label="Next"
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

Pagination renders a `<nav>` with an `aria-label` and a list of links. The active page carries `aria-current="page"`, and disabled previous and next controls expose `aria-disabled`.

Previous and next have accessible names, and their icons flip in RTL so they point the right way.
