---
title: Dropdown
slug: dropdown
category: Form inputs
status: stable
description: 'React dropdown field with single and multiple selection, in-panel search, grouped options, and full field wiring. Built on cmdk for fast filtering in Arabic and English.'
seoTitle: 'Dropdown: React select with search and multi-select'
---

Dropdown is a select field composed from `DropdownItem` children. Add `multiple` for multi-select or `searchable` for an in-panel filter.

## When to use

Use Dropdown when a select needs search, multiple values, or grouped options: choosing several services, filtering by many cities, or picking from a long reference list. Use Select for a plain single choice and Chip for a visible set of filters.

Provide `emptyMessage` so a search with no results still explains itself.

Pass `leadingIcon` for a 20px icon before the value, such as a calendar on a year picker. `helperIcon` swaps the icon before the helper text, and `null` hides it.

## Example: Single select

```tsx
import { Dropdown, DropdownItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ width: 320 }}>
      <Dropdown label="City" placeholder="Select a city">
        <DropdownItem value="riyadh">Riyadh</DropdownItem>
        <DropdownItem value="jeddah">Jeddah</DropdownItem>
        <DropdownItem value="dammam">Dammam</DropdownItem>
        <DropdownItem value="mecca">Mecca</DropdownItem>
      </Dropdown>
    </div>
  );
}
```

## Example: Searchable

```tsx
import { Dropdown, DropdownItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ width: 320 }}>
      <Dropdown
        searchable
        label="Country"
        placeholder="Select a country"
        searchPlaceholder="Search…"
        emptyMessage="No country found."
      >
        <DropdownItem value="sa" keywords={['Saudi Arabia']}>
          Saudi Arabia
        </DropdownItem>
        <DropdownItem value="ae" keywords={['United Arab Emirates']}>
          United Arab Emirates
        </DropdownItem>
        <DropdownItem value="eg" keywords={['Egypt']}>
          Egypt
        </DropdownItem>
        <DropdownItem value="jo" keywords={['Jordan']}>
          Jordan
        </DropdownItem>
      </Dropdown>
    </div>
  );
}
```

## Example: Multi-select

```tsx
import { Dropdown, DropdownItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ width: 320 }}>
      <Dropdown multiple label="Services" placeholder="Select services" defaultValue={['passport']}>
        <DropdownItem value="passport">Passport renewal</DropdownItem>
        <DropdownItem value="id">National ID</DropdownItem>
        <DropdownItem value="license">Driving license</DropdownItem>
        <DropdownItem value="visa">Visa services</DropdownItem>
      </Dropdown>
    </div>
  );
}
```

## Example: Grouped options

```tsx
import { Dropdown, DropdownItem, DropdownGroup, DropdownSeparator } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ width: 320 }}>
      <Dropdown label="Stack" placeholder="Pick a tool">
        <DropdownGroup heading="Frontend">
          <DropdownItem value="react">React</DropdownItem>
          <DropdownItem value="vue">Vue</DropdownItem>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownGroup heading="Backend">
          <DropdownItem value="node">Node.js</DropdownItem>
          <DropdownItem value="go">Go</DropdownItem>
        </DropdownGroup>
      </Dropdown>
    </div>
  );
}
```

## Example: Leading icon

```tsx
import { Dropdown, DropdownItem } from '@dev-dga/react';

const Calendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ maxWidth: 320 }}>
      <Dropdown leadingIcon={<Calendar />} label="Fiscal year" placeholder="Select a year">
        <DropdownItem value="2025">2025</DropdownItem>
        <DropdownItem value="2026">2026</DropdownItem>
      </Dropdown>
    </div>
  );
}
```

## Accessibility

The trigger reports `aria-haspopup`, and the field label, helper text, and error use the same wiring as TextInput. Inside the panel, the search input and option list follow the combobox pattern from cmdk. Arrow keys move through options, Enter toggles the highlighted one, and Escape closes.

Selected values are announced, and in multiple mode each selection stays visible in the trigger.
