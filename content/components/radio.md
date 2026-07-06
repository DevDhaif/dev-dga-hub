---
title: Radio
slug: radio
category: Form inputs
status: stable
description: 'A single-choice group of options.'
---

Wrap options in `RadioGroup`, one `Radio` per choice. The group owns the label, helper text, and error state.

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
