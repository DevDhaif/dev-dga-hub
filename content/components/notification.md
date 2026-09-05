---
title: Notification
slug: notification
category: Feedback
status: new
description: 'React full-width notification banner for system messages at the top of a page: semantic types, a bold lead, actions, and a dismiss button. RTL ready.'
seoTitle: 'Notification: React page-level notification banner'
---

Notification is the page-level banner for system messages. Set the `type`, add a bold `lead`, and pass `onClose` to make it dismissible.

## When to use

Use Notification for messages that concern the whole page or service: planned downtime, a policy change, or an account issue that blocks progress. Place it above the page content, once, and keep the `lead` to a few words.

For a message tied to one section, use InlineAlert. For confirmations that fade, use NotificationToast.

## Example: Basic

```tsx
import { Notification } from '@dev-dga/react';

export default function Demo() {
  return (
    <Notification type="critical" lead="Important:" onClose={() => {}}>
      Scheduled maintenance will take some services offline tonight from 1–3 AM.
    </Notification>
  );
}
```

## Example: Semantic types

```tsx
import { Notification } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Notification type="info" lead="Update:" onClose={() => {}}>
        A new version of the portal is available.
      </Notification>
      <Notification type="success" lead="Done:" onClose={() => {}}>
        Your data export has finished and is ready to download.
      </Notification>
      <Notification type="warning" lead="Heads up:" onClose={() => {}}>
        Your subscription renews in 3 days.
      </Notification>
      <Notification type="critical" lead="Action needed:" onClose={() => {}}>
        Update your contact details to keep receiving service alerts.
      </Notification>
    </div>
  );
}
```

## Example: With actions

```tsx
import { Notification, Link, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Notification
      type="info"
      lead="Important:"
      onClose={() => {}}
      actions={
        <>
          <Link href="#learn-more" tone="neutral" inline>
            Learn more
          </Link>
          <Button variant="black" size="md">
            Renew now
          </Button>
        </>
      }
    >
      Your service licence expires at the end of this month.
    </Notification>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { Notification, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Notification
      type="warning"
      lead="تنبيه:"
      onClose={() => {}}
      actions={
        <Button variant="black" size="md">
          تحديث البيانات
        </Button>
      }
    >
      يرجى تحديث بياناتك للاستمرار في تلقّي إشعارات الخدمة.
    </Notification>
  );
}
```

## Accessibility

The banner uses `role="alert"` for error and warning types and `role="status"` for the rest, so screen readers announce it on arrival. Actions are real buttons or links and the dismiss control has an accessible name.

Keep the banner in the document flow so keyboard users encounter it before the content it affects.
