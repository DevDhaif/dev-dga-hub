---
title: SearchBox
slug: search-box
category: Form inputs
status: new
description: 'React search field built on TextInput with a magnifier, voice search, a clear button, and Enter to search. Works for live filtering and full search pages.'
seoTitle: 'SearchBox: React search field with voice and clear'
---

SearchBox builds on TextInput and adds a magnifier, a voice mic, and a clear button. `onSearch` fires on Enter.

## When to use

Use SearchBox at the top of lists, tables, and service catalogs. Use `onSearch` for a submitted query and the controlled `value` for live filtering as the user types. Show the result count nearby so users know the search worked.

For a global command palette, use Command instead.

## Example: Basic search

```tsx
import { SearchBox } from '@dev-dga/react';

export default function Demo() {
  return (
    <SearchBox
      label="Find a service"
      placeholder="e.g. renew passport"
      onSearch={(query) => console.log('search', query)}
    />
  );
}
```

## Example: Live filtering (controlled)

```tsx
import { useState } from 'react';
import { SearchBox } from '@dev-dga/react';

const CITIES = ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Tabuk', 'Abha'];

export default function Demo() {
  const [query, setQuery] = useState('');
  const matches = CITIES.filter((c) => c.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <SearchBox
        label="Search cities"
        placeholder="Type to filter…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p style={{ margin: 0, color: 'var(--ddga-text-secondary)' }}>
        {query ? `${matches.length} match(es): ${matches.join(', ') || '-'}` : 'All cities'}
      </p>
    </div>
  );
}
```

## Example: Fill styles

```tsx
import { SearchBox } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <SearchBox variant="default" label="Default" placeholder="Search…" />
      <SearchBox variant="filled-lighter" label="Filled lighter" placeholder="Search…" />
      <SearchBox variant="filled-darker" label="Filled darker" defaultValue="Riyadh" />
    </div>
  );
}
```

## Example: Arabic label

```tsx
import { SearchBox } from '@dev-dga/react';

export default function Demo() {
  return (
    <SearchBox
      label="ابحث عن خدمة"
      placeholder="مثال: تجديد جواز السفر"
      helperText="اكتب كلمة مفتاحية ثم اضغط Enter."
      clearLabel="مسح البحث"
      voiceLabel="البحث بالصوت"
    />
  );
}
```

## Accessibility

The input keeps a visible label or an `aria-label`, and the magnifier icon is decorative. Enter runs the search and Escape clears the field. The clear and voice buttons are real buttons with accessible names.

When filtering live, announce the result count in a live region so screen reader users get feedback.
