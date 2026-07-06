---
title: Menubar
slug: menubar
category: Overlays
status: stable
description: 'A desktop-style horizontal menu bar.'
---

Menubar is the File / Edit / View pattern. Each `MenubarMenu` holds a trigger and a menu of items; arrow keys move across and within menus.

## Example: File / Edit / View

```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Menubar>
      <MenubarMenu value="file">
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘N">New File</MenubarItem>
          <MenubarItem shortcut="⌘O">Open…</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Project A</MenubarItem>
              <MenubarItem>Project B</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem shortcut="⌘S">Save</MenubarItem>
          <MenubarSeparator />
          <MenubarItem destructive>Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu value="edit">
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘Z">Undo</MenubarItem>
          <MenubarItem shortcut="⌘⇧Z">Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem shortcut="⌘X">Cut</MenubarItem>
          <MenubarItem shortcut="⌘C">Copy</MenubarItem>
          <MenubarItem shortcut="⌘V">Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu value="view">
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Reload</MenubarItem>
          <MenubarItem disabled>Force Reload</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

## Example: Checkboxes & radio group

```tsx
import { useState } from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarSeparator,
  MenubarRadioGroup,
  MenubarRadioItem,
} from '@dev-dga/react';

export default function Demo() {
  const [statusBar, setStatusBar] = useState(true);
  const [activityBar, setActivityBar] = useState(false);
  const [layout, setLayout] = useState('comfortable');
  return (
    <Menubar>
      <MenubarMenu value="view">
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Appearance</MenubarLabel>
          <MenubarCheckboxItem checked={statusBar} onCheckedChange={setStatusBar}>
            Status Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={activityBar} onCheckedChange={setActivityBar}>
            Activity Bar
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel>Density</MenubarLabel>
          <MenubarRadioGroup value={layout} onValueChange={setLayout}>
            <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
            <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

## Example: Outline triggers (Arabic)

```tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <Menubar>
      <MenubarMenu value="file">
        <MenubarTrigger variant="outline">ملف</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘N">ملف جديد</MenubarItem>
          <MenubarItem shortcut="⌘O">فتح…</MenubarItem>
          <MenubarItem shortcut="⌘S">حفظ</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="edit">
        <MenubarTrigger variant="outline">تحرير</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘Z">تراجع</MenubarItem>
          <MenubarItem shortcut="⌘⇧Z">إعادة</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="view">
        <MenubarTrigger variant="outline">عرض</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>إعادة تحميل</MenubarItem>
          <MenubarItem>تبديل ملء الشاشة</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```
