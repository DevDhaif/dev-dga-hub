---
title: Select
slug: select
category: Form inputs
status: stable
description: 'A single-select field with label and error states.'
---

Compose `Select` with `SelectItem` children, each with a stable `value`. The dropdown inherits dark mode and RTL from the provider.

## Example: Country picker

```tsx
import { Select, SelectItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <Select label="Country" placeholder="Choose a country">
      <SelectItem value="sa">Saudi Arabia</SelectItem>
      <SelectItem value="ae">United Arab Emirates</SelectItem>
      <SelectItem value="bh">Bahrain</SelectItem>
      <SelectItem value="kw">Kuwait</SelectItem>
      <SelectItem value="qa">Qatar</SelectItem>
      <SelectItem value="om">Oman</SelectItem>
    </Select>
  );
}
```

## Example: Default value, helper & a disabled option

```tsx
import { Select, SelectItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <Select
      label="Region"
      placeholder="Choose a region"
      defaultValue="riyadh"
      helperText="Used to route your request."
    >
      <SelectItem value="riyadh">Riyadh</SelectItem>
      <SelectItem value="makkah">Makkah</SelectItem>
      <SelectItem value="eastern" disabled>
        Eastern Province (unavailable)
      </SelectItem>
    </Select>
  );
}
```

## Example: Required & error

```tsx
import { Select, SelectItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <Select
      label="Country"
      placeholder="Choose a country"
      required
      error
      errorMessage="Please select your country."
    >
      <SelectItem value="sa">Saudi Arabia</SelectItem>
      <SelectItem value="ae">United Arab Emirates</SelectItem>
      <SelectItem value="bh">Bahrain</SelectItem>
    </Select>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { Select, SelectItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <Select label="الدولة" placeholder="اختر دولة">
      <SelectItem value="sa">المملكة العربية السعودية</SelectItem>
      <SelectItem value="ae">الإمارات العربية المتحدة</SelectItem>
      <SelectItem value="bh">البحرين</SelectItem>
      <SelectItem value="kw">الكويت</SelectItem>
    </Select>
  );
}
```
