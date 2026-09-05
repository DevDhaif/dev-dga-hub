---
title: Collapsible
slug: collapsible
category: Navigation
status: stable
description: 'React collapsible disclosure built on Radix for a single show-hide region, with your own trigger button, an open-by-default option, and a chevron pattern.'
seoTitle: 'Collapsible: React show/hide disclosure (Radix)'
---

Collapsible shows and hides one panel. Bring your own trigger button; keyboard and ARIA wiring come built in.

## When to use

Use Collapsible to hide optional detail behind a trigger: advanced filters, "Show more" in a summary, or a long explanation under a field. Keep the trigger label clear about what it reveals.

For several stacked sections, use Accordion.

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

## Accessibility

The trigger exposes `aria-expanded` and `aria-controls`, so its state and target are announced. Space and Enter toggle it.

Use a real button as the trigger. If you add a chevron, keep it decorative and let the label carry the meaning.
