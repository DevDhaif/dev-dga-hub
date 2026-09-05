---
title: Notification Toast
slug: notification-toast
category: Feedback
status: stable
description: 'React toast notifications fired from a toast() function: variants, actions such as undo, updates in place, and a single viewport mounted near the app root.'
seoTitle: 'NotificationToast: React toast system with toast() API'
---

Call `toast(message, options)` or `toast.success(...)` from anywhere; the `<NotificationToast />` viewport is mounted once near the app root.

## When to use

Use NotificationToast for short confirmations that need no reply: "Request submitted", "Copied", "Saved". Call `toast()` or `toast.success()` from event handlers and mount one `<NotificationToast />` near the root.

Offer an undo action for reversible operations. For messages the user must read or act on, use InlineAlert or Notification, which do not disappear.

## Example: Basic

```tsx
import { Button, toast } from '@dev-dga/react';

export default function Demo() {
  return (
    <Button
      onClick={() =>
        toast('Notification message title', {
          description: 'A further detailed explanation goes here.',
        })
      }
    >
      Show toast
    </Button>
  );
}
```

## Example: Variants

```tsx
import { Button, toast } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        onClick={() =>
          toast.success('Changes saved', {
            description: 'Your changes are live on production.',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info('A new version is available', {
            description: 'Refresh to get the latest features and fixes.',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Your session is about to expire', {
            description: 'You will be signed out in 5 minutes.',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast.error('Could not save your changes', {
            description: 'Check your connection and try again.',
          })
        }
      >
        Error
      </Button>
    </div>
  );
}
```

## Example: With actions (undo)

```tsx
import { Button, toast } from '@dev-dga/react';

export default function Demo() {
  return (
    <Button
      onClick={() =>
        toast('Item deleted', {
          description: 'You can undo this within 5 seconds.',
          duration: 5000,
          action: {
            label: 'Undo',
            onClick: () => toast.success('Restored', { description: 'Your item is back.' }),
          },
          secondaryAction: { label: 'Dismiss', onClick: () => {} },
        })
      }
    >
      Delete item
    </Button>
  );
}
```

## Example: Update in place (Arabic)

```tsx
import { Button, toast } from '@dev-dga/react';

export default function Demo() {
  return (
    <Button
      onClick={() => {
        toast('جارٍ الحفظ…', {
          id: 'save',
          description: 'جارٍ دفع تغييراتك.',
          duration: 0,
        });
        setTimeout(() => {
          toast.success('تم الحفظ', {
            id: 'save',
            description: 'كل التغييرات أصبحت مباشرة.',
            duration: 3000,
          });
        }, 1200);
      }}
    >
      ابدأ الحفظ
    </Button>
  );
}
```

## Accessibility

Toasts are announced through the viewport's live region, so screen reader users hear them without losing focus. Each toast's dismiss button has an accessible name, and actions are real buttons.

Because toasts are transient, never put required information only in a toast. Repeat outcomes in the page content where users can find them later.
