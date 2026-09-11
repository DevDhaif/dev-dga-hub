---
description: 'عنصر نائب في React يحاكي شكل المحتوى أثناء التحميل: أسطر نص ودوائر وبطاقات وأشكال مضمّنة، بلمعان يحترم تفضيل تقليل الحركة.'
seoTitle: 'هيكل تحميل: مكوّن Skeleton عنصر نائب بلمعان'
---

يحاكي Skeleton شكل المحتوى أثناء تحميله. وهو `aria-hidden`، لذا علم السطح الجاري تحميله بـ `aria-busy="true"`.

## When to use

استخدم Skeleton حين يكون تخطيط المحتوى القادم معروفًا، مثل قائمة بطاقات أو ترويسة ملف شخصي، لتحافظ الصفحة على شكلها أثناء تحميل البيانات. طابق الهيكل مع التخطيط النهائي لتجنّب القفزة.

للانتظار المجهول أو القصير يكفي Spinner. لا تعرض الهياكل أكثر من ثوانٍ قليلة دون تغذية راجعة.

## Example: Card placeholder

```tsx
import { Skeleton } from '@dev-dga/react';

export default function Demo() {
  return (
    <div
      aria-busy="true"
      aria-label="جارٍ تحميل الخدمة"
      style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 280 }}
    >
      <Skeleton shape="square" width="100%" height={160} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Skeleton shape="text" />
        <Skeleton shape="text" />
        <Skeleton shape="text" width="60%" />
      </div>
      <Skeleton shape="rectangle" width={96} height={40} />
    </div>
  );
}
```

## Example: Inline placeholder

```tsx
import { Skeleton } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ fontSize: '1.25rem', maxWidth: 420 }}>
      مرحبًا بعودتك، <Skeleton shape="text" width="6ch" style={{ display: 'inline-block' }} />! يجري
      تحميل ملفك الشخصي.
    </p>
  );
}
```

## Accessibility

Skeleton مخفي بـ `aria-hidden`، فلا يراه قارئ الشاشة. علّم سطح التحميل بـ `aria-busy="true"` وأعلن الاكتمال عبر منطقة حيّة عند وصول المحتوى.

تتعطّل حركة اللمعان حين يفضّل المستخدم تقليل الحركة.
