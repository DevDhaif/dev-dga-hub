---
title: SlideoutMenu
slug: slideout-menu
category: Overlays
status: new
description: 'A slide-in panel for site navigation.'
---

SlideoutMenu is a nav panel with a header, grouped items, and a footer. Unlike Drawer it uses real list and link semantics; `side` flips with direction.

## Example: Grouped navigation

```tsx
import {
  SlideoutMenu,
  SlideoutMenuTrigger,
  SlideoutMenuContent,
  SlideoutMenuHeader,
  SlideoutMenuTitle,
  SlideoutMenuDescription,
  SlideoutMenuBody,
  SlideoutMenuGroup,
  SlideoutMenuItem,
  SlideoutMenuSeparator,
  SlideoutMenuFooter,
  SlideoutMenuClose,
  Button,
} from '@dev-dga/react';

const FileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
  </svg>
);
const PlusCircle = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v8M8 12h8" strokeLinecap="round" />
  </svg>
);
const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <SlideoutMenu>
      <SlideoutMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </SlideoutMenuTrigger>
      <SlideoutMenuContent side="start" background="gray">
        <SlideoutMenuHeader icon={<PlusCircle />}>
          <SlideoutMenuTitle>National Platform</SlideoutMenuTitle>
          <SlideoutMenuDescription>Jump to any section.</SlideoutMenuDescription>
        </SlideoutMenuHeader>
        <SlideoutMenuBody>
          <SlideoutMenuGroup label="Workspace">
            <SlideoutMenuItem icon={<FileIcon />}>Dashboard</SlideoutMenuItem>
            <SlideoutMenuItem icon={<FileIcon />} trailing="+99">
              Inbox
            </SlideoutMenuItem>
            <SlideoutMenuItem icon={<FileIcon />} trailing={<ArrowIcon />}>
              Reports
            </SlideoutMenuItem>
          </SlideoutMenuGroup>
          <SlideoutMenuSeparator />
          <SlideoutMenuGroup label="Account">
            <SlideoutMenuItem asChild icon={<FileIcon />}>
              <a href="#settings">Settings</a>
            </SlideoutMenuItem>
            <SlideoutMenuItem icon={<FileIcon />}>Notifications</SlideoutMenuItem>
          </SlideoutMenuGroup>
        </SlideoutMenuBody>
        <SlideoutMenuFooter>
          <SlideoutMenuClose asChild>
            <Button variant="outline">Cancel</Button>
          </SlideoutMenuClose>
          <SlideoutMenuClose asChild>
            <Button>Save</Button>
          </SlideoutMenuClose>
        </SlideoutMenuFooter>
      </SlideoutMenuContent>
    </SlideoutMenu>
  );
}
```

## Example: Current-page links

```tsx
import {
  SlideoutMenu,
  SlideoutMenuTrigger,
  SlideoutMenuContent,
  SlideoutMenuHeader,
  SlideoutMenuTitle,
  SlideoutMenuBody,
  SlideoutMenuGroup,
  SlideoutMenuItem,
  Button,
} from '@dev-dga/react';

const FileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
  </svg>
);

export default function Demo() {
  return (
    <SlideoutMenu>
      <SlideoutMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </SlideoutMenuTrigger>
      <SlideoutMenuContent side="start" background="gray">
        <SlideoutMenuHeader>
          <SlideoutMenuTitle>Services</SlideoutMenuTitle>
        </SlideoutMenuHeader>
        <SlideoutMenuBody>
          <SlideoutMenuGroup label="Workspace">
            <SlideoutMenuItem asChild icon={<FileIcon />} active>
              <a href="#dashboard" aria-current="page">
                Dashboard
              </a>
            </SlideoutMenuItem>
            <SlideoutMenuItem asChild icon={<FileIcon />}>
              <a href="#permits">Permits</a>
            </SlideoutMenuItem>
            <SlideoutMenuItem asChild icon={<FileIcon />}>
              <a href="#reports">Reports</a>
            </SlideoutMenuItem>
          </SlideoutMenuGroup>
        </SlideoutMenuBody>
      </SlideoutMenuContent>
    </SlideoutMenu>
  );
}
```

## Example: White surface (Arabic)

```tsx
import {
  SlideoutMenu,
  SlideoutMenuTrigger,
  SlideoutMenuContent,
  SlideoutMenuHeader,
  SlideoutMenuTitle,
  SlideoutMenuBody,
  SlideoutMenuGroup,
  SlideoutMenuItem,
  Button,
} from '@dev-dga/react';

const FileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
  </svg>
);

export default function Demo() {
  return (
    <SlideoutMenu>
      <SlideoutMenuTrigger asChild>
        <Button variant="outline">افتح القائمة</Button>
      </SlideoutMenuTrigger>
      <SlideoutMenuContent side="end" background="white">
        <SlideoutMenuHeader closeLabel="إغلاق">
          <SlideoutMenuTitle>الخدمات</SlideoutMenuTitle>
        </SlideoutMenuHeader>
        <SlideoutMenuBody>
          <SlideoutMenuGroup label="الحساب">
            <SlideoutMenuItem icon={<FileIcon />}>لوحة التحكم</SlideoutMenuItem>
            <SlideoutMenuItem icon={<FileIcon />} trailing="+5">
              الإشعارات
            </SlideoutMenuItem>
            <SlideoutMenuItem icon={<FileIcon />}>الإعدادات</SlideoutMenuItem>
          </SlideoutMenuGroup>
        </SlideoutMenuBody>
      </SlideoutMenuContent>
    </SlideoutMenu>
  );
}
```
