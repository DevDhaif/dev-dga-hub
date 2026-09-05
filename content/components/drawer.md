---
title: Drawer
slug: drawer
category: Overlays
status: stable
description: 'React drawer that slides in from the inline start, inline end, or bottom for settings, detail panels, and filter forms. Same focus handling as Modal, RTL-aware sides.'
seoTitle: 'Drawer: React side sheet and bottom sheet'
---

Drawer slides a panel from the screen edge, with the same focus and ESC behavior as Modal. `side` is logical, so `start`/`end` flip with direction.

## When to use

Use Drawer for secondary flows that need more room than a Modal: editing settings, viewing a record's details, or a filter form. Use the bottom sheet on mobile for short pickers.

Because `side` is logical, `start` and `end` swap in RTL. Keep the page behind it visible so users keep their context.

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

## Accessibility

Drawer is built on the same Dialog base as Modal: focus is trapped inside, Escape closes it, and focus returns to the trigger. Title and description parts give the panel its accessible name.

The close button has an accessible name, and the panel follows the page direction so it slides in from the expected edge.
