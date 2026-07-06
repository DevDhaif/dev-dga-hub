---
description: 'قائمة عائمة للإجراءات.'
---

يفتح DropdownMenu قائمة من مشغل: عناصر وخانات اختيار ومجموعات راديو وفواصل وقوائم فرعية. التنقل بلوحة المفاتيح ودعم ARIA من Radix.

## Example: Account menu

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">الحساب</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
        <DropdownMenuItem>الإعدادات</DropdownMenuItem>
        <DropdownMenuItem>الفوترة</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive>تسجيل الخروج</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## Example: Checkbox items

```tsx
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  const [statusBar, setStatusBar] = useState(true);
  const [activityBar, setActivityBar] = useState(false);
  const [panel, setPanel] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">عرض</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>المظهر</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={statusBar} onCheckedChange={setStatusBar}>
          شريط الحالة
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={activityBar} onCheckedChange={setActivityBar}>
          شريط النشاط
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={panel} onCheckedChange={setPanel}>
          اللوحة
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## Example: Radio group

```tsx
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  const [position, setPosition] = useState('bottom');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">موضع اللوحة</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>الموضع</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">أعلى</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">أسفل</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">يمين</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## Example: Sub-menus, trailing slots & groups

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  Button,
  Tag,
} from '@dev-dga/react';

const FileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M13 2H7.5A2.5 2.5 0 0 0 5 4.5v15A2.5 2.5 0 0 0 7.5 22h9a2.5 2.5 0 0 0 2.5-2.5V8z" />
    <path d="M13 2v4a2 2 0 0 0 2 2h4" />
  </svg>
);
const TrashIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export default function Demo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">مجموعات البيانات</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>إدارة</DropdownMenuLabel>
          <DropdownMenuItem startIcon={<FileIcon />}>فتح</DropdownMenuItem>
          <DropdownMenuItem
            startIcon={<FileIcon />}
            trailing={
              <Tag size="sm" variant="success-subtle">
                جديد
              </Tag>
            }
          >
            تكرار
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger startIcon={<FileIcon />}>نقل إلى…</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>البيانات المفتوحة</DropdownMenuItem>
              <DropdownMenuItem>الأرشيف</DropdownMenuItem>
              <DropdownMenuItem>المسودّات</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive startIcon={<TrashIcon />}>
          حذف
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
