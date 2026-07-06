---
title: Dropdown
slug: dropdown
category: Form inputs
status: stable
description: 'A select field with search and multi-select.'
---

Dropdown is a select field composed from `DropdownItem` children. Add `multiple` for multi-select or `searchable` for an in-panel filter.

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
