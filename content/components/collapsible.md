---
title: Collapsible
slug: collapsible
category: Navigation
status: stable
description: 'A single show/hide panel.'
---

Collapsible shows and hides one panel. Bring your own trigger button; keyboard and ARIA wiring come built in.

## Example: Basic

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Collapsible style={{ inlineSize: 420, maxWidth: '100%' }}>
      <CollapsibleTrigger asChild>
        <Button variant="secondary">Show eligibility details</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p style={{ paddingBlockStart: 12, margin: 0 }}>
          Applicants must hold a valid national ID and have no outstanding fees. Supporting
          documents can be uploaded after submission.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
```

## Example: With a chevron

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from '@dev-dga/react';

const ChevronDown = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <Collapsible style={{ inlineSize: 420, maxWidth: '100%' }}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" endIcon={<ChevronDown />}>
          Show details
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p style={{ paddingBlockStart: 12, margin: 0 }}>
          The panel height-slides open and closed, respecting reduced-motion.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
```

## Example: Open by default

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Collapsible defaultOpen style={{ inlineSize: 420, maxWidth: '100%' }}>
      <CollapsibleTrigger asChild>
        <Button variant="secondary">إخفاء التفاصيل</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p style={{ paddingBlockStart: 12, margin: 0 }}>
          تبدأ هذه اللوحة مفتوحة، ويمكن طيّها بالضغط على الزر.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
```
