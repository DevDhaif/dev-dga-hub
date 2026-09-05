---
description: 'حقل بحث في React مبني على TextInput مع عدسة وبحث صوتي وزر مسح وEnter للبحث. يناسب التصفية الحيّة وصفحات البحث الكاملة.'
seoTitle: 'مربّع بحث: مكوّن SearchBox بالبحث الصوتي وزر المسح'
---

يبني SearchBox على TextInput ويضيف عدسة ومايكروفونًا وزر مسح. يستدعى `onSearch` عند الضغط على Enter.

## When to use

استخدم SearchBox في أعلى القوائم والجداول وأدلّة الخدمات. استخدم `onSearch` للاستعلام المرسل و`value` المتحكَّم به للتصفية الحيّة أثناء الكتابة. اعرض عدد النتائج قريبًا ليعرف المستخدم أن البحث نجح.

للوحة أوامر عامة استخدم Command.

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

## Accessibility

يحتفظ الحقل بتسمية ظاهرة أو `aria-label`، وأيقونة العدسة زخرفية. ينفّذ Enter البحث ويمسح Escape الحقل. زرا المسح والصوت زران حقيقيان بأسماء متاحة.

عند التصفية الحيّة أعلن عدد النتائج في منطقة حيّة ليحصل مستخدم قارئ الشاشة على تغذية راجعة.
