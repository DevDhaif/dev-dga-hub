---
description: 'تنبيه مضمن في React للرسائل داخل الصفحة: أنواع المعلومة، النجاح، التحذير، والخطأ، مع عنوان، إجراءات، وزر إغلاق. تعلنه التقنيات المساعدة عبر المناطق الحية.'
seoTitle: 'تنبيه مضمن: مكون InlineAlert بأنواع دلالية'
---

يعرض InlineAlert رسالة بارزة دون أن يغادر المستخدم الصفحة. حدد `type` بحسب معنى الرسالة، ومرر `title`. وأضف `onClose` لجعل التنبيه قابلاً للإغلاق.

## When to use

استخدم InlineAlert لشرح شيء عن المحتوى المجاور: ملخص أخطاء فوق نموذج، أو إشعار صيانة الخدمة، أو تأكيد نجاح بعد الحفظ. اضبط `type` ليطابق معنى الرسالة، وأبق النص في جملة أو جملتين.

لرسالة على مستوى الصفحة كلها، استخدم Notification. لتأكيد عابر، استخدم NotificationToast.

## Example: Basic

```tsx
import { InlineAlert } from '@dev-dga/react';

export default function Demo() {
  return (
    <InlineAlert type="info" title="طلبك قيد المراجعة">
      سنشعرك عبر البريد الإلكتروني بمجرد اتخاذ قرار. يستغرق ذلك عادةً من 3 إلى 5 أيام عمل.
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
        تحفظ تغييراتك محلياً حتى تقوم بالإرسال.
      </InlineAlert>
      <InlineAlert type="info" title="مجموعة بيانات جديدة متاحة">
        جرى تحديث سجل العناوين الوطني هذا الصباح.
      </InlineAlert>
      <InlineAlert type="success" title="تمت الموافقة على التصريح">
        أصبح تصريح البناء الخاص بك نشطاً الآن.
      </InlineAlert>
      <InlineAlert type="warning" title="الجلسة على وشك الانتهاء">
        سيتم تسجيل خروجك خلال 5 دقائق ما لم تتابع.
      </InlineAlert>
      <InlineAlert type="destructive" title="فشل الدفع">
        تعذر خصم المبلغ من بطاقتك. حدث بياناتك وحاول مرة أخرى.
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
      title="وثق هويتك الوطنية"
      onClose={() => {}}
      actions={
        <>
          <InlineAlertAction>وثق الآن</InlineAlertAction>
          <InlineAlertAction>ذكرني لاحقاً</InlineAlertAction>
        </>
      }
    >
      تبقى بعض الخدمات مقفلة حتى يتم التحقق من هويتك عبر أبشر.
    </InlineAlert>
  );
}
```

## Accessibility

تعرض تنبيهات الخطأ والتحذير `role="alert"`، مما يجعلها تقاطع ما يقرؤه قارئ الشاشة. وتعرض تنبيهات المعلومة والنجاح `role="status"`، مما يجعل قارئ الشاشة يعلنها دون مقاطعة. الأيقونة زخرفية، ويظهر النوع أيضاً في العنوان والنص.

لزر الإغلاق اسم متاح. ضع التنبيه قرب المحتوى الذي يصفه ليبقى ترتيب القراءة منطقياً.
