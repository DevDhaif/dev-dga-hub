---
title: Empty State
slug: empty-state
category: Feedback
status: stable
description: 'A placeholder for empty screens.'
---

EmptyState fills empty lists, searches, and error screens. Pass `title`, `description`, and `action`, or compose the parts directly.

## Example: No data

```tsx
import { EmptyState, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <EmptyState
      title="No applications yet"
      description="Create your first application to get started."
      action={<Button>New application</Button>}
    />
  );
}
```

## Example: Semantic variants

```tsx
import { EmptyState, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <EmptyState
        variant="search"
        title="No results found"
        description="Try a different search term or clear your filters."
        action={<Button variant="secondary">Clear filters</Button>}
      />
      <EmptyState
        variant="error"
        title="Failed to load"
        description="Something went wrong. Please try again."
        action={<Button>Retry</Button>}
      />
      <EmptyState
        variant="success"
        title="You're all caught up"
        description="No pending tasks. Nice work."
      />
    </div>
  );
}
```

## Example: Composed parts

```tsx
import {
  EmptyState,
  EmptyStateMedia,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
  Button,
} from '@dev-dga/react';

const FolderPlus = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <path
      d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
      strokeLinejoin="round"
    />
    <path d="M12 11v4m-2-2h4" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <EmptyState>
      <EmptyStateMedia>
        <FolderPlus />
      </EmptyStateMedia>
      <EmptyStateTitle>No datasets published</EmptyStateTitle>
      <EmptyStateDescription>
        Publish a dataset to make it visible on the national open-data portal.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>Publish dataset</Button>
        <Button variant="ghost">Learn more</Button>
      </EmptyStateActions>
    </EmptyState>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { EmptyState, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <EmptyState
      variant="search"
      title="لا توجد نتائج"
      description="جرّب كلمة بحث أخرى أو امسح عوامل التصفية."
      action={<Button variant="secondary">مسح عوامل التصفية</Button>}
    />
  );
}
```
