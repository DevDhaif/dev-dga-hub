---
title: Inline Alert
slug: inline-alert
category: Feedback
status: stable
description: 'A message card inside the page content.'
---

InlineAlert highlights a message without leaving the page. Set `type` for the meaning, pass a `title`, and add `onClose` to make it dismissible.

## Example: Basic

```tsx
import { InlineAlert } from '@dev-dga/react';

export default function Demo() {
  return (
    <InlineAlert type="info" title="Your application is under review">
      We will notify you by email once a decision has been made. This usually takes 3–5 business
      days.
    </InlineAlert>
  );
}
```

## Example: Semantic types

```tsx
import { InlineAlert } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <InlineAlert type="neutral" title="Draft saved">
        Your changes are kept locally until you submit.
      </InlineAlert>
      <InlineAlert type="info" title="New dataset available">
        The national addresses registry was updated this morning.
      </InlineAlert>
      <InlineAlert type="success" title="Permit approved">
        Your building permit is now active.
      </InlineAlert>
      <InlineAlert type="warning" title="Session expiring soon">
        You will be signed out in 5 minutes unless you continue.
      </InlineAlert>
      <InlineAlert type="destructive" title="Payment failed">
        We could not charge your card. Update your details and try again.
      </InlineAlert>
    </div>
  );
}
```

## Example: Actions & dismissible

```tsx
import { InlineAlert, InlineAlertAction } from '@dev-dga/react';

export default function Demo() {
  return (
    <InlineAlert
      type="warning"
      title="Verify your national ID"
      onClose={() => {}}
      actions={
        <>
          <InlineAlertAction>Verify now</InlineAlertAction>
          <InlineAlertAction>Remind me later</InlineAlertAction>
        </>
      }
    >
      Some services stay locked until your identity is verified with Absher.
    </InlineAlert>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { InlineAlert, InlineAlertAction } from '@dev-dga/react';

export default function Demo() {
  return (
    <InlineAlert
      type="success"
      appearance="color"
      title="تم تقديم طلبك بنجاح"
      actions={<InlineAlertAction>عرض الطلب</InlineAlertAction>}
    >
      سنرسل إليك إشعارًا عند تحديث حالة الطلب.
    </InlineAlert>
  );
}
```
