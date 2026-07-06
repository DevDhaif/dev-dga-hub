---
title: Progress
slug: progress
category: Feedback
status: stable
description: 'A progress bar and ring.'
---

`Progress` is the linear bar and `CircularProgress` is the ring. Pass a `value`, or omit it for the indeterminate state; the ring needs an `aria-label`.

## Example: Linear bar

```tsx
import { Progress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <Progress value={20} size="sm" label="Small" />
      <Progress value={50} size="md" label="Medium" />
      <Progress value={75} size="lg" label="Large" />
    </div>
  );
}
```

## Example: Feedback states

```tsx
import { Progress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <Progress value={40} label="Uploading" helperText="Help Text" />
      <Progress value={100} state="success" label="Uploading" helperText="Complete" />
      <Progress value={0} state="error" label="Uploading" helperText="Upload failed" />
    </div>
  );
}
```

## Example: Circular ring

```tsx
import { CircularProgress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
      <CircularProgress value={50} size="sm" aria-label="Active users" />
      <CircularProgress value={50} size="md" aria-label="Active users" />
      <CircularProgress value={72} size="lg" description="Active users" aria-label="Active users" />
    </div>
  );
}
```

## Example: Circular states (Arabic)

```tsx
import { CircularProgress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
      <CircularProgress
        value={100}
        size="lg"
        state="success"
        description="مكتمل"
        aria-label="مكتمل"
      />
      <CircularProgress value={0} size="lg" state="error" description="فشل" aria-label="فشل" />
    </div>
  );
}
```
