---
description: 'زر إجراء عائم (FAB) في React للإجراء الرئيسي الوحيد في الشاشة: أيقونة فقط أو حبّة ممتدة، على سطح عادي أو ملوّن، مع asChild للروابط. يراعي الاتجاه العربي.'
seoTitle: 'زر عائم: مكوّن FloatingButton للإجراء الرئيسي في React'
---

يبرز FloatingButton الإجراء الأهم في الشاشة. الخاصية `icon` مطلوبة، وأضف `children` لعرض نص بجانب الأيقونة. تحديد الموضع مسؤوليتك.

## When to use

استخدم FloatingButton حين يكون في الشاشة إجراء واحد مهيمن يجب أن يبقى في المتناول أثناء التمرير، مثل بدء طلب جديد في بوابة للمستفيدين. اكتفِ بزر عائم واحد في الشاشة. إن كان الإجراء تابعًا لنموذج أو بطاقة فاستخدم Button.

المكوّن لا يحدّد موضعه بنفسه. ضعه في تخطيطك بحيث لا يغطّي المحتوى ولا شريط التنقّل السفلي في الجوال.

## Example: Styles (icon-only)

```tsx
import { FloatingButton } from '@dev-dga/react';

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 20h9" strokeLinecap="round" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <FloatingButton variant="primary" icon={<PlusIcon />} aria-label="إضافة" />
      <FloatingButton variant="black" icon={<EditIcon />} aria-label="تحرير" />
      <FloatingButton variant="secondary" icon={<SearchIcon />} aria-label="بحث" />
    </div>
  );
}
```

## Example: Extended pill (icon + label)

```tsx
import { FloatingButton } from '@dev-dga/react';

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <FloatingButton size="lg" icon={<PlusIcon />}>
        تقرير جديد
      </FloatingButton>
      <FloatingButton size="sm" variant="black" icon={<PlusIcon />}>
        تقرير جديد
      </FloatingButton>
    </div>
  );
}
```

## Example: On a colored surface

```tsx
import { FloatingButton } from '@dev-dga/react';

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        padding: 32,
        borderRadius: 12,
        background: 'var(--ddga-color-primary)',
      }}
    >
      <FloatingButton onColor variant="primary" icon={<PlusIcon />} aria-label="إضافة" />
      <FloatingButton onColor variant="black" icon={<PlusIcon />} aria-label="إضافة" />
    </div>
  );
}
```

## Example: As a link (asChild)

```tsx
import { FloatingButton } from '@dev-dga/react';

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <FloatingButton asChild icon={<PlusIcon />}>
      <a href="#new-service">خدمة جديدة</a>
    </FloatingButton>
  );
}
```

## Accessibility

الأيقونة `icon` زخرفية، لذا يجب أن يحمل الزر العائم ذو الأيقونة فقط `aria-label` يسمّي الإجراء. الحبّة الممتدة تستخدم نصّها الظاهر اسمًا متاحًا. تُعرض حالة التعطيل عبر `aria-disabled` ليبقى العنصر قابلًا للاكتشاف.

لأن الزر عائم، تأكّد أنه لا يغطّي محتوى قابلًا للتركيز وأن تباينه كافٍ فوق السطح الذي خلفه.
