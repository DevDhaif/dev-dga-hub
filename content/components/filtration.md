---
title: Filtration
slug: filtration
category: Overlays
status: new
description: 'React faceted filter panel, overlay or inline, with sections, checkbox filters, a results count, and Apply and Clear buttons. State stays in your code.'
seoTitle: 'Filtration: React faceted filter panel with staged apply'
---

Filtration opens a panel of filter sections closed by Apply and Clear buttons. State is yours: each section wraps a controlled primitive.

## When to use

Use Filtration above search results, tables, and service catalogs when users combine several criteria: status, region, date, category. Stage the changes and apply them together so the results do not jump after every click.

Use the inline panel on wide screens and the overlay on mobile. For a single filter, a Select or Chip row is enough.

## Example: Overlay filter (controlled)

```tsx
import { useState } from 'react';
import {
  Filtration,
  FiltrationTrigger,
  FiltrationResults,
  FiltrationPanel,
  FiltrationSection,
  FiltrationCheckboxFilter,
  FiltrationOptionList,
  FiltrationOption,
  FiltrationFooter,
  Tag,
} from '@dev-dga/react';

const TYPE_OPTIONS = [
  { value: 'datasets', label: 'Datasets', count: 128 },
  { value: 'apis', label: 'APIs', count: 64 },
  { value: 'reports', label: 'Reports', count: 40 },
  { value: 'services', label: 'Services', count: 22 },
];

const labelOf = (value: string) => TYPE_OPTIONS.find((o) => o.value === value)?.label ?? value;

export default function Demo() {
  const [type, setType] = useState<string[]>(['datasets', 'apis']);
  const [sort, setSort] = useState('newest');
  const [applied, setApplied] = useState<string[]>(['datasets', 'apis']);

  const remove = (value: string) => {
    setApplied((prev) => prev.filter((v) => v !== value));
    setType((prev) => prev.filter((v) => v !== value));
  };

  return (
    <Filtration>
      <FiltrationTrigger>Filter</FiltrationTrigger>
      <FiltrationResults aria-label="Applied filters">
        {applied.map((value) => (
          <Tag
            key={value}
            variant="primary"
            dismissible
            closeLabel={`Remove ${labelOf(value)}`}
            onDismiss={() => remove(value)}
          >
            {labelOf(value)}
          </Tag>
        ))}
      </FiltrationResults>
      <FiltrationPanel aria-label="Filters">
        <FiltrationSection label="Type" count={type.length}>
          <FiltrationCheckboxFilter
            aria-label="Type"
            options={TYPE_OPTIONS}
            value={type}
            onValueChange={setType}
            searchable
            searchLabel="Search types"
            collapseAfter={3}
          />
        </FiltrationSection>
        <FiltrationSection label="Sort">
          <FiltrationOptionList aria-label="Sort" value={sort} onValueChange={setSort}>
            <FiltrationOption value="newest">Newest first</FiltrationOption>
            <FiltrationOption value="oldest">Oldest first</FiltrationOption>
          </FiltrationOptionList>
        </FiltrationSection>
        <FiltrationFooter
          appliedCount={applied.length}
          onApply={() => setApplied(type)}
          onClear={() => {
            setType([]);
            setApplied([]);
          }}
        />
      </FiltrationPanel>
    </Filtration>
  );
}
```

## Example: Inline panel (Arabic)

```tsx
import { useState } from 'react';
import {
  Filtration,
  FiltrationPanel,
  FiltrationSection,
  FiltrationCheckboxFilter,
  FiltrationFooter,
} from '@dev-dga/react';

export default function Demo() {
  const [regions, setRegions] = useState<string[]>(['riyadh']);
  const [applied, setApplied] = useState(regions.length);
  return (
    <div style={{ inlineSize: 320 }}>
      <Filtration overlay={false}>
        <FiltrationPanel aria-label="عوامل التصفية">
          <FiltrationSection label="المنطقة" count={regions.length}>
            <FiltrationCheckboxFilter
              aria-label="المنطقة"
              options={[
                { value: 'riyadh', label: 'الرياض', count: 54 },
                { value: 'makkah', label: 'مكة المكرمة', count: 41 },
                { value: 'eastern', label: 'المنطقة الشرقية', count: 33 },
              ]}
              value={regions}
              onValueChange={setRegions}
            />
          </FiltrationSection>
          <FiltrationFooter
            appliedCount={applied}
            applyLabel="تطبيق التصفية"
            clearLabel="مسح التصفية"
            onApply={() => setApplied(regions.length)}
            onClear={() => {
              setRegions([]);
              setApplied(0);
            }}
          />
        </FiltrationPanel>
      </Filtration>
    </div>
  );
}
```

## Accessibility

Each section is a `role="group"` named by its heading, and the overlay trigger exposes `aria-expanded` and `aria-controls`. Filters inside are real checkboxes and inputs with labels.

Apply and Clear are buttons, and the results count is text so screen readers can read how many matches remain.
