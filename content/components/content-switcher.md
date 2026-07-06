---
title: Content Switcher
slug: content-switcher
category: Actions & buttons
status: stable
description: 'A segmented control for switching between views.'
---

ContentSwitcher picks one view at a time from a set of segments. Give the group an `aria-label`; for page-level panels use Tabs instead.

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
