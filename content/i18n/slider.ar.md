---
description: 'منزلق لاختيار رقم أو مدى.'
---

مرر `number` لمقبض واحد أو `number[]` لمدى. يضيف `showValue` قراءة حية ويصيغها `formatValue`.

## Example: Single value with readout

```tsx
import { useState } from 'react';
import { Slider, type SliderValue } from '@dev-dga/react';

export default function Demo() {
  const [value, setValue] = useState<SliderValue>(40);
  return <Slider label="مستوى الصوت" value={value} onValueChange={setValue} showValue />;
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
      label="نطاق السعر"
      value={value}
      onValueChange={setValue}
      thumbLabels={['الحد الأدنى', 'الحد الأقصى']}
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
      label="التكبير"
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
      <Slider label="السطوع" defaultValue={40} size="sm" showValue />
      <Slider label="مقفل" defaultValue={70} disabled showValue />
    </div>
  );
}
```
