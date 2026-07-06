---
title: Slider
slug: slider
category: Form inputs
status: stable
description: 'A slider for a number or a range.'
---

Pass a `number` for one thumb or `number[]` for a range. `showValue` adds a live readout and `formatValue` shapes it.

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
