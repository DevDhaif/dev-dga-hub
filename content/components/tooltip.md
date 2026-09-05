---
title: Tooltip
slug: tooltip
category: Feedback
status: stable
description: 'Accessible React tooltip built on Radix that shows on hover and focus, with a HelpIcon trigger, a title and icon variant, and an inverted surface. RTL ready.'
seoTitle: 'Tooltip: accessible React tooltip with HelpIcon trigger'
---

Wrap the trigger with `TooltipTrigger asChild` and put the message in `TooltipContent`. `HelpIcon` bundles a ready-made "?" trigger.

## When to use

Use Tooltip for a short hint that clarifies an icon button or a field label, such as what a reference number means. Use `HelpIcon` next to form labels for a ready-made "?" trigger.

Do not put essential instructions in a tooltip; they are hidden by default and unavailable on touch. Use `helperText` on the field instead.

## Example: Basic

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          Hover me
        </Button>
      </TooltipTrigger>
      <TooltipContent>Tooltips appear after a short delay.</TooltipContent>
    </Tooltip>
  );
}
```

## Example: Title, icon & inverted surface

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          Show details
        </Button>
      </TooltipTrigger>
      <TooltipContent inverted icon title="National ID">
        Enter the 10-digit number printed on your ID card.
      </TooltipContent>
    </Tooltip>
  );
}
```

## Example: Help icon

```tsx
import { HelpIcon } from '@dev-dga/react';

export default function Demo() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      IBAN
      <HelpIcon label="What is an IBAN?" title="IBAN">
        A 24-character International Bank Account Number used for transfers.
      </HelpIcon>
    </span>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          مرّر فوقي
        </Button>
      </TooltipTrigger>
      <TooltipContent icon title="عنوان التلميح">
        أقصى عرض للتلميح هو 240 بكسل، وسيلتف النص تلقائيًا.
      </TooltipContent>
    </Tooltip>
  );
}
```

## Accessibility

The tooltip opens on hover and on keyboard focus, and Escape closes it. Radix associates the content with the trigger, so screen readers read the hint when the trigger is focused.

The trigger must itself be focusable, so wrap a button or link with `TooltipTrigger asChild`. Keep the text short; tooltips are not for paragraphs.
