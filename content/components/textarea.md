---
title: Textarea
slug: textarea
category: Form inputs
status: stable
description: 'A multi-line text field.'
---

Textarea shares the TextInput field contract. Set `rows` for the initial height and `resize="none"` to lock it.

## Example: Message field

```tsx
import { Textarea } from '@dev-dga/react';

export default function Demo() {
  return (
    <Textarea
      label="Your message"
      placeholder="Type your message…"
      helperText="Keep it under 500 characters."
      maxLength={500}
    />
  );
}
```

## Example: Required & error states

```tsx
import { Textarea } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <Textarea label="Feedback" placeholder="Type your message…" required />
      <Textarea label="Feedback" error errorMessage="This field is required." />
    </div>
  );
}
```

## Example: Fill styles & fixed height

```tsx
import { Textarea } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <Textarea label="Default" variant="default" defaultValue="Entered text" />
      <Textarea label="Filled lighter" variant="filled-lighter" defaultValue="Entered text" />
      <Textarea label="Fixed height" resize="none" placeholder="This field cannot be resized." />
    </div>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { Textarea } from '@dev-dga/react';

export default function Demo() {
  return (
    <Textarea label="ملاحظاتك" placeholder="اكتب رسالتك…" helperText="اجعلها أقل من 500 حرف." />
  );
}
```
