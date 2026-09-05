---
description: 'مفتاح تبديل متاح الوصول في React لإعداد ثنائي واحد يسري فورًا، مع تسمية ونص مساعد وحالات. مبني على Radix ومعكوس في الاتجاه العربي.'
seoTitle: 'مفتاح تبديل: مكوّن Switch للتشغيل والإيقاف متاح الوصول'
---

يبدل Switch قيمة واحدة تسري فورًا. أما الخيار الذي يعتمد عند الإرسال فاستخدم له Checkbox.

## When to use

استخدم Switch لإعداد يسري لحظة تغييره: تشغيل الإشعارات أو إيقافها، أو الوضع الداكن، أو إظهار العناصر المؤرشفة. إن كان الاختيار يُحفظ عند إرسال النموذج فاستخدم Checkbox، لأن المفتاح يوحي بنتيجة فورية.

سمِّ الإعداد لا الحالتين. «تنبيهات البريد» أوضح من «تشغيل/إيقاف».

## Example: Setting toggle

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return <Switch label="تفعيل الإشعارات" />;
}
```

## Example: On by default, with a hint

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return (
    <Switch
      label="الاشتراك في النشرة البريدية"
      helperText="يرسل إشعارًا عند وصول بريد جديد."
      defaultChecked
    />
  );
}
```

## Example: States

```tsx
import { Switch } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Switch label="المصادقة الثنائية" required defaultChecked />
      <Switch label="وضع الصيانة" disabled />
      <Switch label="مشاركة الموقع" error errorMessage="هذا مطلوب للمتابعة." />
    </div>
  );
}
```

## Accessibility

يعرض Switch الدور `role="switch"` مع `aria-checked`، فيعلنه قارئ الشاشة مفتاحًا ويقرأ حالته. يبدّله مفتاح Space، والتسمية مرتبطة فالنقر عليها يعمل.

يتحرّك المقبض مع اتجاه القراءة، فموضع التشغيل في نهاية السطر في العربية. موضع المقبض يحمل الحالة إلى جانب اللون.
