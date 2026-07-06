---
title: Command
slug: command
category: Overlays
status: stable
description: 'A command palette (⌘K) with fuzzy search.'
---

Command lists actions behind a search input; each `CommandItem` fires `onSelect`. `CommandDialog` is the same palette in an overlay and wires ⌘K itself.

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
      <Command label="Command menu">
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem value="home" startIcon={<HomeIcon />} shortcut="⌘H">
              Home
            </CommandItem>
            <CommandItem value="inbox" startIcon={<InboxIcon />} shortcut="⌘I">
              Inbox
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem value="new" startIcon={<PlusIcon />} shortcut="⌘N">
              New document
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
      <Button onClick={() => setOpen(true)}>Open palette (⌘K)</Button>
      <p style={{ fontSize: 14, color: 'var(--ddga-text-secondary)', margin: 0 }}>
        {last ? `Ran: ${last}` : 'Press ⌘K (or Ctrl+K) anywhere.'}
      </p>
      <CommandDialog open={open} onOpenChange={setOpen} label="Command palette">
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem value="home" shortcut="⌘H" onSelect={() => run('Home')}>
              Home
            </CommandItem>
            <CommandItem value="inbox" shortcut="⌘I" onSelect={() => run('Inbox')}>
              Inbox
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Actions">
            <CommandItem value="new" shortcut="⌘N" onSelect={() => run('New document')}>
              New document
            </CommandItem>
            <CommandItem value="logout" disabled onSelect={() => run('Log out')}>
              Log out (disabled)
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
```

## Example: Custom shortcut (Arabic)

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
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        افتح بـ ⌘J
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} shortcut="j" label="تبديل سريع">
        <CommandInput placeholder="انتقل إلى…" />
        <CommandList>
          <CommandEmpty>لا توجد نتائج.</CommandEmpty>
          <CommandGroup heading="الأخيرة">
            <CommandItem value="dashboard" onSelect={() => setOpen(false)}>
              لوحة التحكم
            </CommandItem>
            <CommandItem value="reports" onSelect={() => setOpen(false)}>
              التقارير
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
```
