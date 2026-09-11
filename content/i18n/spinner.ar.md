---
description: 'مؤشّر تحميل غير محدّد في React يتبع حجم النص ولونه الحاليين، بأحجام ودرجات وتسمية متاحة افتراضيًا.'
seoTitle: 'مؤشّر تحميل: مكوّن Spinner بعدّة أحجام'
---

يعرض Spinner عملًا غير معروف مدته. حجمه الافتراضي `1em` ويتبع `currentColor`، فيتناسب مع النص المحيط به.

## When to use

استخدم Spinner أثناء تحميل شيء مجهول المدّة: جلب قائمة، أو إرسال طلب، أو التحقّق من حالة. داخل Button استخدم الخاصية `loading` بدلًا منه، فهي تضع المؤشّر لك.

حين تكون المدّة أو التقدّم معروفَين، استخدم Progress. لعناصر نائبة للمحتوى، استخدم Skeleton.

## Example: Sizes

```tsx
import { Spinner } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Spinner size="sm" aria-label="جارٍ التحميل (صغير)" />
      <Spinner size="md" aria-label="جارٍ التحميل (متوسّط)" />
      <Spinner size="lg" aria-label="جارٍ التحميل (كبير)" />
      <Spinner size="xl" aria-label="جارٍ التحميل (كبير جدًا)" />
    </div>
  );
}
```

## Example: Tones

```tsx
import { Spinner } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Spinner size="lg" tone="neutral" aria-label="جارٍ التحميل (محايد)" />
      <Spinner size="lg" tone="primary" aria-label="جارٍ التحميل (أساسي)" />
      <div
        style={{
          display: 'flex',
          padding: 12,
          borderRadius: 'var(--ddga-radius-md)',
          background: 'var(--ddga-color-primary)',
        }}
      >
        <Spinner size="lg" tone="onColor" aria-label="جارٍ التحميل (على لون)" />
      </div>
    </div>
  );
}
```

## Example: Inherits size & color

```tsx
import { Spinner } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ fontSize: '1.25rem', color: 'var(--ddga-color-primary)' }}>
      <Spinner aria-hidden="true" style={{ verticalAlign: '-0.15em' }} /> جارٍ تحميل لوحة التحكم…
    </p>
  );
}
```

## Accessibility

يعلن Spinner «جارٍ التحميل» افتراضيًا عبر `aria-label`؛ مرّر تسميتك لتقول ما الذي يُحمَّل. داخل أداة لها تسمية أصلًا مرّر `aria-hidden="true"` لتجنّب الإعلان المزدوج.

اقرن المؤشّر بـ `aria-busy="true"` على المنطقة التي تُحمَّل لتُعرض الحالة للتقنيات المساعدة.
