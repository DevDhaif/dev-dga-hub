---
title: Content Switcher
slug: content-switcher
category: Actions & buttons
status: stable
description: 'React segmented control that switches between mutually exclusive views, with sizes and an on-color variant for dark surfaces. Keyboard and RTL ready.'
seoTitle: 'ContentSwitcher: React segmented control for views'
---

ContentSwitcher picks one view at a time from a set of segments. Give the group an `aria-label`; for page-level panels use Tabs instead.

## When to use

Use ContentSwitcher to flip between two to four alternative views of the same content, such as list versus map or monthly versus yearly. Use Tabs for page-level panels with their own content, and RadioGroup inside a form where the choice is submitted later.

Keep labels short; the segments share one row.

## Example: Basic

```tsx
import { ContentSwitcher, ContentSwitcherItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <ContentSwitcher aria-label="View mode" defaultValue="grid">
      <ContentSwitcherItem value="grid">Grid</ContentSwitcherItem>
      <ContentSwitcherItem value="list">List</ContentSwitcherItem>
      <ContentSwitcherItem value="map">Map</ContentSwitcherItem>
    </ContentSwitcher>
  );
}
```

## Example: Switching content

```tsx
import { useState } from 'react';
import { ContentSwitcher, ContentSwitcherItem } from '@dev-dga/react';

export default function Demo() {
  const [view, setView] = useState('table');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <ContentSwitcher
        aria-label="Services view"
        value={view}
        onValueChange={(v) => v && setView(v)}
      >
        <ContentSwitcherItem value="table">Table</ContentSwitcherItem>
        <ContentSwitcherItem value="cards">Cards</ContentSwitcherItem>
        <ContentSwitcherItem value="map">Map</ContentSwitcherItem>
      </ContentSwitcher>

      <div
        style={{
          padding: 16,
          borderRadius: 8,
          border: '1px solid var(--ddga-color-border)',
          color: 'var(--ddga-text-secondary)',
        }}
      >
        {view === 'table' && 'Showing services as a data table.'}
        {view === 'cards' && 'Showing services as a card grid.'}
        {view === 'map' && 'Showing services on a map.'}
      </div>
    </div>
  );
}
```

## Example: Sizes

```tsx
import { ContentSwitcher, ContentSwitcherItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ContentSwitcher key={size} size={size} aria-label="View mode" defaultValue="grid">
          <ContentSwitcherItem value="grid">Grid</ContentSwitcherItem>
          <ContentSwitcherItem value="list">List</ContentSwitcherItem>
          <ContentSwitcherItem value="map">Map</ContentSwitcherItem>
        </ContentSwitcher>
      ))}
    </div>
  );
}
```

## Example: On a dark surface (Arabic)

```tsx
import { ContentSwitcher, ContentSwitcherItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ background: '#0D121C', padding: 24, borderRadius: 12, width: 'fit-content' }}>
      <ContentSwitcher onColor aria-label="طريقة العرض" defaultValue="grid">
        <ContentSwitcherItem value="grid">شبكة</ContentSwitcherItem>
        <ContentSwitcherItem value="list">قائمة</ContentSwitcherItem>
        <ContentSwitcherItem value="map">خريطة</ContentSwitcherItem>
      </ContentSwitcher>
    </div>
  );
}
```

## Accessibility

The group needs an `aria-label` or `aria-labelledby` so its purpose is announced. Tab reaches the group and the arrow keys move between segments, following the reading direction in RTL.

The selected segment is exposed to assistive technology, and the selection is shown with a fill change rather than color alone.
