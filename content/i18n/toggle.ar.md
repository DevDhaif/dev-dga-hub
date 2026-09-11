---
description: 'زر تبديل ثنائي الحالة في React لأشرطة الأدوات وأدوات التنسيق، بأنماط وأحجام. يعرض aria-pressed ويدعم الاستخدام بأيقونة فقط مع تسمية.'
seoTitle: 'زر تبديل: مكوّن Toggle بحالة ضغط (aria-pressed)'
---

يحفظ Toggle حالة الضغط، مثل زر تنسيق أو تثبيت. الأزرار بأيقونة فقط تحتاج `aria-label`، وللإعدادات استخدم Switch.

## When to use

استخدم Toggle لأداة تكون مضغوطة أو غير مضغوطة ويسري أثرها فورًا، مثل الخط العريض في محرّر أو تثبيت عنصر. لإعداد يُقرأ على أنه مفعّل أو معطّل استخدم Switch. لاختيار عرض من عدّة عروض استخدم ContentSwitcher أو Tabs.

اجمع أزرار التبديل المتقاربة في شريط أدوات واحد ليفهم المستخدم أنها تعمل على المحتوى نفسه.

## Example: Labeled toggle

```tsx
import { Toggle } from '@dev-dga/react';

export default function Demo() {
  return (
    <Toggle aria-label="عريض" defaultPressed>
      عريض
    </Toggle>
  );
}
```

## Example: Icon-only toggles

```tsx
import { Toggle } from '@dev-dga/react';

const BoldIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M6 4h7a4 4 0 0 1 0 8H6zM6 12h8a4 4 0 0 1 0 8H6z" strokeLinejoin="round" />
  </svg>
);

const ItalicIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M19 4h-9M14 20H5M15 4 9 20" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Toggle aria-label="عريض" defaultPressed>
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="مائل">
        <ItalicIcon />
      </Toggle>
    </div>
  );
}
```

## Example: Variants

```tsx
import { Toggle } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Toggle aria-label="عريض" variant="default" defaultPressed>
        افتراضي
      </Toggle>
      <Toggle aria-label="عريض" variant="outline" defaultPressed>
        محدّد
      </Toggle>
    </div>
  );
}
```

## Example: Sizes

```tsx
import { Toggle } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Toggle aria-label="صغير" size="sm" defaultPressed>
        صغير
      </Toggle>
      <Toggle aria-label="متوسط" size="md" defaultPressed>
        متوسط
      </Toggle>
      <Toggle aria-label="كبير" size="lg" defaultPressed>
        كبير
      </Toggle>
    </div>
  );
}
```

## Accessibility

Toggle زر أصلي يعرض حالته عبر `aria-pressed`، فيعلن قارئ الشاشة «مضغوط» أو «غير مضغوط». يقلب مفتاحا Space وEnter الحالة.

أزرار التبديل ذات الأيقونة فقط تحتاج `aria-label` يسمّي الأداة لا الحالة؛ فالحالة تأتي من `aria-pressed`. حالة الضغط تغيّر التعبئة إلى جانب اللون، فلا تعتمد على اللون وحده.
