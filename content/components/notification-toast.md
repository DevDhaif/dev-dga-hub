---
title: Notification Toast
slug: notification-toast
category: Feedback
status: stable
description: 'Transient toasts fired with a function call.'
---

Call `toast(message, options)` or `toast.success(...)` from anywhere; the `<NotificationToast />` viewport is mounted once near the app root.

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
