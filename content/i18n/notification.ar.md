---
description: 'شريط إشعار بعرض كامل في React لرسائل النظام في أعلى الصفحة: أنواع دلالية، وعبارة افتتاحية بارزة، وإجراءات، وزر إغلاق. جاهز للاتجاه العربي.'
seoTitle: 'إشعار: مكوّن Notification شريط إشعار على مستوى الصفحة'
---

Notification شريط على مستوى الصفحة لرسائل النظام. حدد `type` وأضف `lead` بخط عريض، ومرر `onClose` لجعله قابلًا للإغلاق.

## When to use

استخدم Notification للرسائل التي تخصّ الصفحة أو الخدمة كلّها: توقّف مجدول، أو تغيير في سياسة، أو مشكلة في الحساب تعطّل التقدّم. ضعه فوق محتوى الصفحة مرّة واحدة وأبقِ `lead` في كلمات قليلة.

لرسالة مرتبطة بقسم واحد، استخدم InlineAlert. للتأكيدات التي تتلاشى، استخدم NotificationToast.

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

## Accessibility

يستخدم الشريط `role="alert"` لنوعي الخطأ والتحذير و`role="status"` للبقية، فيعلنه قارئ الشاشة عند ظهوره. الإجراءات أزرار أو روابط حقيقية ولزر الإغلاق اسم متاح.

أبقِ الشريط في تدفّق المستند ليصادفه مستخدم لوحة المفاتيح قبل المحتوى الذي يؤثّر فيه.
