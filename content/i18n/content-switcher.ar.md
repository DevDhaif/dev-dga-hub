---
description: 'أزرار مقسمة للتبديل بين طرق العرض.'
---

يختار ContentSwitcher طريقة عرض واحدة من مجموعة مقاطع. أعط المجموعة `aria-label`، وللوحات الصفحة الكاملة استخدم Tabs.

## Example: Basic

```tsx
import { ContentSwitcher, ContentSwitcherItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <ContentSwitcher aria-label="طريقة العرض" defaultValue="grid">
      <ContentSwitcherItem value="grid">شبكة</ContentSwitcherItem>
      <ContentSwitcherItem value="list">قائمة</ContentSwitcherItem>
      <ContentSwitcherItem value="map">خريطة</ContentSwitcherItem>
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
        aria-label="عرض الخدمات"
        value={view}
        onValueChange={(v) => v && setView(v)}
      >
        <ContentSwitcherItem value="table">جدول</ContentSwitcherItem>
        <ContentSwitcherItem value="cards">بطاقات</ContentSwitcherItem>
        <ContentSwitcherItem value="map">خريطة</ContentSwitcherItem>
      </ContentSwitcher>

      <div
        style={{
          padding: 16,
          borderRadius: 8,
          border: '1px solid var(--ddga-color-border)',
          color: 'var(--ddga-text-secondary)',
        }}
      >
        {view === 'table' && 'عرض الخدمات كجدول بيانات.'}
        {view === 'cards' && 'عرض الخدمات كشبكة بطاقات.'}
        {view === 'map' && 'عرض الخدمات على خريطة.'}
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
        <ContentSwitcher key={size} size={size} aria-label="طريقة العرض" defaultValue="grid">
          <ContentSwitcherItem value="grid">شبكة</ContentSwitcherItem>
          <ContentSwitcherItem value="list">قائمة</ContentSwitcherItem>
          <ContentSwitcherItem value="map">خريطة</ContentSwitcherItem>
        </ContentSwitcher>
      ))}
    </div>
  );
}
```
