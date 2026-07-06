---
title: Popover
slug: popover
category: Overlays
status: stable
description: 'A floating panel with interactive content.'
---

Popover anchors rich content to a trigger. It renders `role="dialog"`, so give it an `aria-label`; pass `modal` to trap focus.

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
