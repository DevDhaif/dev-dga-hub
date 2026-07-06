---
title: Drawer
slug: drawer
category: Overlays
status: stable
description: 'A panel that slides in from the edge of the screen.'
---

Drawer slides a panel from the screen edge, with the same focus and ESC behavior as Modal. `side` is logical, so `start`/`end` flip with direction.

## Example: Settings drawer

```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open settings</Button>
      </DrawerTrigger>
      <DrawerContent side="end">
        <DrawerHeader>
          <DrawerTitle>Account settings</DrawerTitle>
          <DrawerDescription>Slides in from the inline-end edge.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          The header and footer stay pinned while this middle region scrolls. Drop any content here
, a form, a summary, a list of records.
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button>Save changes</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
```

## Example: Bottom sheet

```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </DrawerTrigger>
      <DrawerContent side="bottom" size="lg">
        <DrawerHeader>
          <DrawerTitle>Service details</DrawerTitle>
          <DrawerDescription>The canonical mobile-sheet pattern.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          `side="bottom"` with `size="lg"` gives a tall sheet that rises from the bottom edge,
          ideal on small viewports.
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
```

## Example: Filter form (Arabic)

```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
  Button,
  RadioGroup,
  Radio,
  TextInput,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">الفلاتر</Button>
      </DrawerTrigger>
      <DrawerContent side="end" closeLabel="إغلاق">
        <DrawerHeader>
          <DrawerTitle>تصفية النتائج</DrawerTitle>
          <DrawerDescription>ضيِّق القائمة حسب الفئة والتاريخ.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <RadioGroup label="الفئة" defaultValue="all">
              <Radio value="all" label="الكل" />
              <Radio value="docs" label="المستندات" />
              <Radio value="media" label="الوسائط" />
            </RadioGroup>
            <TextInput label="من تاريخ" type="date" />
            <TextInput label="إلى تاريخ" type="date" />
          </div>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">إعادة</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button>تطبيق</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
```
