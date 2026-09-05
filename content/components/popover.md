---
title: Popover
slug: popover
category: Overlays
status: stable
description: 'React popover built on Radix for rich content anchored to a trigger: inline edit forms, filters, and previews, with an optional arrow and modal focus trapping.'
seoTitle: 'Popover: React non-modal popover anchored to a trigger'
---

Popover anchors rich content to a trigger. It renders `role="dialog"`, so give it an `aria-label`; pass `modal` to trap focus.

## When to use

Use Popover when a control needs a small panel of interactive content next to it. Examples: an inline edit form, a date preset list, or a quick filter. Use Tooltip for read-only hints and Modal for tasks that must block the page.

Pass `modal` when the panel holds a form the user must finish.

## Example: Default

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverClose, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent aria-label="Details">
        <PopoverClose closeLabel="Close" />
        <p style={{ margin: 0 }}>Popovers hold rich, interactive content anchored to a trigger.</p>
      </PopoverContent>
    </Popover>
  );
}
```

## Example: With arrow

```tsx
import { Popover, PopoverTrigger, PopoverContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">With arrow</Button>
      </PopoverTrigger>
      <PopoverContent arrow aria-label="Note">
        <p style={{ margin: 0 }}>An arrow points back at the trigger.</p>
      </PopoverContent>
    </Popover>
  );
}
```

## Example: Inline edit form (Arabic)

```tsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  Button,
  TextInput,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>تعديل الاسم</Button>
      </PopoverTrigger>
      <PopoverContent aria-label="تعديل الاسم">
        <PopoverClose closeLabel="إغلاق" />
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <TextInput label="الاسم المعروض" defaultValue="ليلى" />
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
            <PopoverClose asChild>
              <Button variant="secondary" size="sm">
                إلغاء
              </Button>
            </PopoverClose>
            <PopoverClose asChild>
              <Button size="sm" type="submit">
                حفظ
              </Button>
            </PopoverClose>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
```

## Accessibility

The panel renders `role="dialog"`, so give it an `aria-label` or `aria-labelledby`. Escape closes it and focus returns to the trigger. With `modal`, focus is trapped inside the panel.

Anchor the popover to a focusable trigger so keyboard users can open it.
