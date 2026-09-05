---
title: TextInput
slug: text-input
category: Form inputs
status: stable
description: 'Accessible single-line React text field with built-in label, helper text, error message, prefix and suffix adornments, and fill styles. Arabic and RTL ready.'
seoTitle: 'TextInput: accessible React text field with label and error'
---

TextInput owns its label and field wiring. Use `helperText` and `errorMessage` for states, and `startAdornment`/`endAdornment` for icons or units inside the field.

## When to use

Use TextInput for short free-text values: names, national addresses, reference numbers, emails. Use Textarea for multi-line text, NumberInput for numeric values with steppers, and SearchBox for search.

Put units, currency symbols, or icons in `startAdornment` and `endAdornment` rather than in the placeholder, so they stay visible after the user types. Use `helperText` for format hints such as the expected ID length.

## Example: Labelled field

```tsx
import { TextInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <TextInput
      label="Full name"
      placeholder="Enter your full name"
      helperText="As it appears on your national ID."
    />
  );
}
```

## Example: Required & error states

```tsx
import { TextInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TextInput label="National ID" placeholder="10-digit ID" required />
      <TextInput
        label="Email"
        type="email"
        defaultValue="not-an-email"
        error
        errorMessage="Enter a valid email address."
      />
    </div>
  );
}
```

## Example: Fill styles

```tsx
import { TextInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TextInput label="Default" variant="default" defaultValue="Entered text" />
      <TextInput label="Filled lighter" variant="filled-lighter" defaultValue="Entered text" />
      <TextInput label="Filled darker" variant="filled-darker" defaultValue="Entered text" />
    </div>
  );
}
```

## Example: In-field prefix & suffix

```tsx
import { TextInput, TextInputAffix } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TextInput
        label="Website"
        placeholder="my-service"
        startAdornment={<TextInputAffix>https://</TextInputAffix>}
      />
      <TextInput
        label="Fee"
        type="number"
        defaultValue="250"
        endAdornment={<TextInputAffix>SAR</TextInputAffix>}
      />
    </div>
  );
}
```

## Accessibility

The `label` is wired to the input with `htmlFor` and `id`, so clicking it focuses the field and screen readers announce it. `helperText` and `errorMessage` are linked through `aria-describedby`, and `error` sets `aria-invalid`. Required fields announce as required.

Do not use the placeholder as the only label. It disappears on input and fails contrast requirements.
