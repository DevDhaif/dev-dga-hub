---
description: 'بطاقة رسالة داخل محتوى الصفحة.'
---

يبرز InlineAlert رسالة دون مغادرة الصفحة. حدد `type` للمعنى ومرر `title`، وأضف `onClose` لجعله قابلًا للإغلاق.

## Example: Basic

```tsx
import { InlineAlert } from '@dev-dga/react';

export default function Demo() {
  return (
    <InlineAlert type="info" title="طلبك قيد المراجعة">
      سنُشعرك عبر البريد الإلكتروني بمجرد اتخاذ قرار. يستغرق ذلك عادةً من 3 إلى 5 أيام عمل.
    </InlineAlert>
  );
}
```

## Example: Semantic types

```tsx
import { InlineAlert } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <InlineAlert type="neutral" title="تم حفظ المسودة">
        تُحفظ تغييراتك محليًا حتى تقوم بالإرسال.
      </InlineAlert>
      <InlineAlert type="info" title="مجموعة بيانات جديدة متاحة">
        جرى تحديث سجل العناوين الوطني هذا الصباح.
      </InlineAlert>
      <InlineAlert type="success" title="تمت الموافقة على التصريح">
        أصبح تصريح البناء الخاص بك نشطًا الآن.
      </InlineAlert>
      <InlineAlert type="warning" title="الجلسة على وشك الانتهاء">
        سيتم تسجيل خروجك خلال 5 دقائق ما لم تتابع.
      </InlineAlert>
      <InlineAlert type="destructive" title="فشل الدفع">
        تعذّر خصم المبلغ من بطاقتك. حدِّث بياناتك وحاول مرة أخرى.
      </InlineAlert>
    </div>
  );
}
```

## Example: Actions & dismissible

```tsx
import { InlineAlert, InlineAlertAction } from '@dev-dga/react';

export default function Demo() {
  return (
    <InlineAlert
      type="warning"
      title="وثّق هويتك الوطنية"
      onClose={() => {}}
      actions={
        <>
          <InlineAlertAction>وثّق الآن</InlineAlertAction>
          <InlineAlertAction>ذكّرني لاحقًا</InlineAlertAction>
        </>
      }
    >
      تبقى بعض الخدمات مقفلة حتى يتم التحقق من هويتك عبر أبشر.
    </InlineAlert>
  );
}
```
