---
title: Radio
slug: radio
category: Form inputs
status: stable
description: 'Accessible React radio group with a shared label, helper text, error state, horizontal layout, and Arabic support. One choice from a small visible set.'
seoTitle: 'Radio: accessible React radio group for single choice'
---

Wrap options in `RadioGroup`, one `Radio` per choice. The group owns the label, helper text, and error state.

## When to use

Use RadioGroup when the user must pick exactly one of two to five visible options and seeing them all helps. Applicant type and delivery method are typical cases. For more options, use Select. If more than one option can apply, use Checkbox.

Give the group a label that states the question, and set a default only when one option is the norm.

## Example: Single choice

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <RadioGroup label="Subscription plan" defaultValue="pro" name="plan">
      <Radio value="free" label="Free" />
      <Radio value="pro" label="Pro" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>
  );
}
```

## Example: Variants

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <RadioGroup label="Primary (default)" defaultValue="a">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
      <RadioGroup label="Neutral" variant="neutral" defaultValue="a">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    </div>
  );
}
```

## Example: Horizontal with helper text

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <RadioGroup
      label="Notification frequency"
      orientation="horizontal"
      helperText="You can change this any time in Settings."
      defaultValue="daily"
    >
      <Radio value="instant" label="Instant" />
      <Radio value="daily" label="Daily" />
      <Radio value="weekly" label="Weekly" />
    </RadioGroup>
  );
}
```

## Example: Arabic, required with an error

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <RadioGroup label="طريقة التوصيل" required error errorMessage="يُرجى اختيار خيار للمتابعة.">
      <Radio value="pickup" label="استلام من الفرع" />
      <Radio value="ship" label="شحن إلى العنوان" />
    </RadioGroup>
  );
}
```

## Accessibility

RadioGroup owns the group label, helper text, and error, so the whole set is announced as one question. Tab moves focus into the group and the arrow keys move between options, following the reading direction in RTL.

Space or Enter selects the focused option. Errors set `aria-invalid` on the group.
