---
description: 'لوحة أوامر (⌘K) مع بحث تقريبي.'
---

يعرض Command الإجراءات خلف حقل بحث، وينفذ كل `CommandItem` حدث `onSelect`. أما `CommandDialog` فهو اللوحة نفسها داخل نافذة ويتكفل باختصار ⌘K.

## Example: Inline palette

```tsx
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '@dev-dga/react';

const HomeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20h14V9.5" />
  </svg>
);
const InboxIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M22 12h-6l-2 3h-4l-2-3H2" />
    <path d="M5.5 5h13l3.5 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5z" />
  </svg>
);
const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ width: 360, maxWidth: '100%' }}>
      <Command label="قائمة الأوامر">
        <CommandInput placeholder="اكتب أمراً أو ابحث…" />
        <CommandList>
          <CommandEmpty>لا توجد نتائج.</CommandEmpty>
          <CommandGroup heading="الصفحات">
            <CommandItem value="home" startIcon={<HomeIcon />} shortcut="⌘H">
              الرئيسية
            </CommandItem>
            <CommandItem value="inbox" startIcon={<InboxIcon />} shortcut="⌘I">
              البريد الوارد
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="الإجراءات">
            <CommandItem value="new" startIcon={<PlusIcon />} shortcut="⌘N">
              مستند جديد
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
```

## Example: ⌘K dialog

```tsx
import { useState } from 'react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState<string | null>(null);

  const run = (label: string) => {
    setLast(label);
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
      <Button onClick={() => setOpen(true)}>افتح اللوحة (⌘K)</Button>
      <p style={{ fontSize: 14, color: 'var(--ddga-text-secondary)', margin: 0 }}>
        {last ? `شُغِّل: ${last}` : 'اضغط ⌘K (أو Ctrl+K) في أي مكان.'}
      </p>
      <CommandDialog open={open} onOpenChange={setOpen} label="لوحة الأوامر">
        <CommandInput placeholder="اكتب أمراً أو ابحث…" />
        <CommandList>
          <CommandEmpty>لا توجد نتائج.</CommandEmpty>
          <CommandGroup heading="الصفحات">
            <CommandItem value="home" shortcut="⌘H" onSelect={() => run('الرئيسية')}>
              الرئيسية
            </CommandItem>
            <CommandItem value="inbox" shortcut="⌘I" onSelect={() => run('البريد الوارد')}>
              البريد الوارد
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="الإجراءات">
            <CommandItem value="new" shortcut="⌘N" onSelect={() => run('مستند جديد')}>
              مستند جديد
            </CommandItem>
            <CommandItem value="logout" disabled onSelect={() => run('تسجيل الخروج')}>
              تسجيل الخروج (معطّل)
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
```
