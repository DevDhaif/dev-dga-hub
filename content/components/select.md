---
title: Select
slug: select
category: Form inputs
status: stable
description: 'Accessible React single-select field built on Radix, with label, helper text, error state, placeholder, and disabled options. Inherits dark mode and RTL.'
seoTitle: 'Select: accessible React select field (Radix listbox)'
---

Compose `Select` with `SelectItem` children, each with a stable `value`. The dropdown inherits dark mode and RTL from the provider.

## When to use

Use Select when the user picks one option from a known list of roughly five to fifteen items, such as a region or a document type. For long lists that need searching, or for multi-select, use Dropdown. For four or fewer options, RadioGroup is faster to scan.

Pass a `placeholder` that describes the choice, not an instruction.

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

## Accessibility

The trigger is a button linked to the visible `label`, and the list opens as a listbox with keyboard navigation from Radix: arrow keys move, typing jumps to a matching option, Enter selects, and Escape closes.

Helper text and errors are announced through `aria-describedby` and `aria-invalid`. The open list renders inside the provider portal, so it inherits direction and dark mode.
