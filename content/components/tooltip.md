---
title: Tooltip
slug: tooltip
category: Feedback
status: stable
description: 'A short hint on hover or focus.'
---

Wrap the trigger with `TooltipTrigger asChild` and put the message in `TooltipContent`. `HelpIcon` bundles a ready-made "?" trigger.

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
