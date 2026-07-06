---
description: 'حقل بحث مع مايكروفون وزر مسح والبحث بزر الإدخال.'
---

يبني SearchBox على TextInput ويضيف عدسة ومايكروفونًا وزر مسح. يستدعى `onSearch` عند الضغط على Enter.

## Example: Basic search

```tsx
import { SearchBox } from '@dev-dga/react';

export default function Demo() {
  return (
    <SearchBox
      label="ابحث عن خدمة"
      placeholder="مثال: تجديد جواز السفر"
      onSearch={(query) => console.log('search', query)}
    />
  );
}
```

## Example: Live filtering (controlled)

```tsx
import { useState } from 'react';
import { SearchBox } from '@dev-dga/react';

const CITIES = ['الرياض', 'جدة', 'مكة', 'المدينة المنورة', 'الدمام', 'تبوك', 'أبها'];

export default function Demo() {
  const [query, setQuery] = useState('');
  const matches = CITIES.filter((c) => c.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <SearchBox
        label="البحث عن مدينة"
        placeholder="اكتب للتصفية…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p style={{ margin: 0, color: 'var(--ddga-text-secondary)' }}>
        {query ? `${matches.length} نتيجة: ${matches.join(', ') || '-'}` : 'كل المدن'}
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
      <SearchBox variant="default" label="افتراضي" placeholder="بحث…" />
      <SearchBox variant="filled-lighter" label="معبّأ أفتح" placeholder="بحث…" />
      <SearchBox variant="filled-darker" label="معبّأ أغمق" defaultValue="الرياض" />
    </div>
  );
}
```
