---
description: 'مجموعة خيارات باختيار واحد.'
---

لف الخيارات داخل `RadioGroup` مع `Radio` لكل خيار. تملك المجموعة التسمية والنص المساعد وحالة الخطأ.

## Example: Single choice

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <RadioGroup label="خطة الاشتراك" defaultValue="pro" name="plan">
      <Radio value="free" label="مجاني" />
      <Radio value="pro" label="احترافي" />
      <Radio value="enterprise" label="للمؤسسات" />
    </RadioGroup>
  );
}
```

## Example: Variants

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <RadioGroup label="أساسي (افتراضي)" defaultValue="a">
        <Radio value="a" label="الخيار أ" />
        <Radio value="b" label="الخيار ب" />
      </RadioGroup>
      <RadioGroup label="محايد" variant="neutral" defaultValue="a">
        <Radio value="a" label="الخيار أ" />
        <Radio value="b" label="الخيار ب" />
      </RadioGroup>
    </div>
  );
}
```

## Example: Horizontal with helper text

```tsx
import { RadioGroup, Radio } from '@dev-dga/react';

export default function Demo() {
  return (
    <RadioGroup
      label="تكرار الإشعارات"
      orientation="horizontal"
      helperText="يمكنك تغيير ذلك في أي وقت من الإعدادات."
      defaultValue="daily"
    >
      <Radio value="instant" label="فوري" />
      <Radio value="daily" label="يومي" />
      <Radio value="weekly" label="أسبوعي" />
    </RadioGroup>
  );
}
```
