---
title: Progress
slug: progress
category: Feedback
status: stable
description: 'React linear progress bar and circular progress ring with determinate and indeterminate states, feedback states, label, helper text, and value display.'
seoTitle: 'Progress: React progress bar and circular progress ring'
---

`Progress` is the linear bar and `CircularProgress` is the ring. Pass a `value`, or omit it for the indeterminate state; the ring needs an `aria-label`.

## When to use

Use Progress when you can express completion as a number: an upload, a multi-file scan, or a quota. Use the indeterminate state only while the total is unknown. Use `CircularProgress` in compact spaces such as cards and table cells.

For step-based flows, use ProgressIndicator instead.

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

## Accessibility

Progress renders `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`, and omits the current value while indeterminate. The visible `label` names the bar; the ring has no visible label, so pass `aria-label` or `aria-labelledby`.

Use `getValueLabel` to announce a friendlier value such as "3 of 5 files".
