---
title: TextInput
slug: text-input
category: Form inputs
status: stable
description: 'A single-line text field with label and error states.'
---

TextInput owns its label and field wiring. Use `helperText` and `errorMessage` for states, and `startAdornment`/`endAdornment` for icons or units inside the field.

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
