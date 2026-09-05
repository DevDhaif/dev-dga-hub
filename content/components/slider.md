---
title: Slider
slug: slider
category: Form inputs
status: stable
description: 'Accessible React slider for a single value or a two-thumb range, with a live readout, custom formatting, sizes, and field wiring. Keyboard and RTL ready.'
seoTitle: 'Slider: accessible React range slider with live value'
---

Pass a `number` for one thumb or `number[]` for a range. `showValue` adds a live readout and `formatValue` shapes it.

## When to use

Use Slider when the exact number matters less than its position in a range, such as a budget bracket or a satisfaction score. Pass an array for a two-thumb range. If users must enter a precise value, pair it with NumberInput or use NumberInput alone.

Turn on `showValue` so the current value is visible without guessing.

## Example: Single value with readout

```tsx
import { useState } from 'react';
import { Slider, type SliderValue } from '@dev-dga/react';

export default function Demo() {
  const [value, setValue] = useState<SliderValue>(40);
  return <Slider label="Volume" value={value} onValueChange={setValue} showValue />;
}
```

## Example: Range (two thumbs)

```tsx
import { useState } from 'react';
import { Slider, type SliderValue } from '@dev-dga/react';

export default function Demo() {
  const [value, setValue] = useState<SliderValue>([20, 70]);
  return (
    <Slider
      label="Price range"
      value={value}
      onValueChange={setValue}
      thumbLabels={['Minimum', 'Maximum']}
      showValue
    />
  );
}
```

## Example: Percentage format

```tsx
import { useState } from 'react';
import { Slider, type SliderValue } from '@dev-dga/react';

export default function Demo() {
  const [value, setValue] = useState<SliderValue>(60);
  return (
    <Slider
      label="Zoom"
      value={value}
      onValueChange={setValue}
      formatValue={(n) => `${n}%`}
      showValue
    />
  );
}
```

## Example: Small and disabled

```tsx
import { Slider } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 360 }}>
      <Slider label="Brightness" defaultValue={40} size="sm" showValue />
      <Slider label="Locked" defaultValue={70} disabled showValue />
    </div>
  );
}
```

## Accessibility

Each thumb is a `slider` role with the current value exposed and `aria-valuetext` from `formatValue`, so a screen reader hears "25 percent" rather than a raw number. Arrow keys move by `step`, Page Up and Page Down move faster, and Home and End jump to the limits.

Name multiple thumbs with `thumbLabels`. The track flips in RTL so the arrow keys still feel natural.
