---
description: 'شريط بعرض الصفحة أعلى المحتوى.'
---

Notification شريط على مستوى الصفحة لرسائل النظام. حدد `type` وأضف `lead` بخط عريض، ومرر `onClose` لجعله قابلًا للإغلاق.

## Example: Basic

```tsx
import { Notification } from '@dev-dga/react';

export default function Demo() {
  return (
    <Notification type="critical" lead="هام:" onClose={() => {}}>
      ستؤدي أعمال الصيانة المجدولة إلى إيقاف بعض الخدمات الليلة من الساعة 1 إلى 3 صباحًا.
    </Notification>
  );
}
```

## Example: Semantic types

```tsx
import { Notification } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Notification type="info" lead="تحديث:" onClose={() => {}}>
        يتوفر إصدار جديد من البوابة.
      </Notification>
      <Notification type="success" lead="تم:" onClose={() => {}}>
        انتهى تصدير بياناتك وأصبح جاهزًا للتنزيل.
      </Notification>
      <Notification type="warning" lead="انتبه:" onClose={() => {}}>
        يتجدد اشتراكك خلال 3 أيام.
      </Notification>
      <Notification type="critical" lead="مطلوب إجراء:" onClose={() => {}}>
        حدِّث بيانات الاتصال الخاصة بك لمواصلة تلقّي تنبيهات الخدمة.
      </Notification>
    </div>
  );
}
```

## Example: With actions

```tsx
import { Notification, Link, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Notification
      type="info"
      lead="هام:"
      onClose={() => {}}
      actions={
        <>
          <Link href="#learn-more" tone="neutral" inline>
            اعرف المزيد
          </Link>
          <Button variant="black" size="md">
            جدِّد الآن
          </Button>
        </>
      }
    >
      تنتهي صلاحية رخصة خدمتك في نهاية هذا الشهر.
    </Notification>
  );
}
```
