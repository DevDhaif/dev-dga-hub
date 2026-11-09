---
description: 'مفتاح تبديل متاح الوصول في React لإعداد ثنائي واحد يسري فوراً، مع تسمية ونص مساعد وحالات. مبني على Radix ومعكوس في الاتجاه من اليمين إلى اليسار.'
seoTitle: 'مفتاح تبديل: مكون Switch للتشغيل والإيقاف متاح الوصول'
---

يبدل Switch قيمة منطقية واحدة يسري أثرها فوراً، بينما يناسب Checkbox الخيار الذي يسري عند إرسال النموذج.

## When to use

استخدم Switch لإعداد يسري لحظة تغييره: تشغيل الإشعارات وإيقافها، الوضع الداكن، أو إظهار العناصر المؤرشفة. إذا كان الخيار يحفظ عند إرسال النموذج، استخدم Checkbox. يوحي Switch بنتيجة فورية.

اجعل التسمية اسم الإعداد نفسه: "تنبيهات البريد" أوضح من "تشغيل/إيقاف".

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
      helperText="يرسل إشعاراً عند وصول بريد جديد."
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

يعرض Switch الدور `role="switch"` مع `aria-checked`، لذا يعلنه قارئ الشاشة مفتاح تبديل ويقرأ حالته. يبدله مفتاح Space. ترتبط التسمية بالمفتاح، لذا يعمل النقر عليها أيضاً.

يتحرك المقبض مع اتجاه القراءة، لذا يقع موضع التشغيل في نهاية السطر في الاتجاه من اليمين إلى اليسار. يحمل موضع المقبض الحالة إلى جانب اللون.
