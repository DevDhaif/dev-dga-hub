---
title: Textarea
slug: textarea
category: Form inputs
status: stable
description: 'Accessible multi-line React text field that shares the TextInput label, helper, and error contract, with rows, resize control, and fill styles. RTL ready.'
seoTitle: 'Textarea: accessible multi-line React text field'
---

Textarea shares the TextInput field contract. Set `rows` for the initial height and `resize="none"` to lock it.

## When to use

Use Textarea for free text longer than a line: complaint details, justification notes, or feedback. Set `rows` to show the expected length, and use `resize="none"` only when the layout cannot grow. For a single short value, use TextInput.

If you enforce a maximum length, show the remaining count in `helperText` so users are not surprised on submit.

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

## Accessibility

The label, helper text, and error message use the same wiring as TextInput: `htmlFor` for the label and `aria-describedby` for the messages, with `aria-invalid` on error.

Keep the default height generous, because keyboard users cannot drag the resize handle. Announce character limits in text rather than color.
