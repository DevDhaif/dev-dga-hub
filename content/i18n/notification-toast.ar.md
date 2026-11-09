---
description: 'إشعارات منبثقة في React تظهر عند استدعاء دالة toast(): أنماط، إجراءات مثل التراجع، تحديث في المكان، ومنفذ عرض واحد قرب جذر التطبيق.'
seoTitle: 'إشعار منبثق: مكون NotificationToast بواجهة toast()'
---

استدع `toast(message, options)` أو `toast.success(...)` من أي مكان في التطبيق. ضع حاوية `<NotificationToast />` مرة واحدة قرب جذر التطبيق.

## When to use

استخدم NotificationToast للتأكيدات القصيرة التي لا تحتاج رداً: "تم إرسال الطلب"، "تم النسخ"، "تم الحفظ". استدع `toast()` أو `toast.success()` من معالجات الأحداث، وضع `<NotificationToast />` واحداً قرب الجذر.

أضف إجراء تراجع للعمليات القابلة للعكس. للرسائل التي يجب أن يقرأها المستخدم أو يتصرف بناءً عليها، استخدم InlineAlert أو Notification لأنهما يبقيان ظاهرين.

## Example: Basic

```tsx
import { Button, toast } from '@dev-dga/react';

export default function Demo() {
  return (
    <Button
      onClick={() =>
        toast('عنوان رسالة الإشعار', {
          description: 'يأتي هنا شرح تفصيلي إضافي.',
        })
      }
    >
      عرض الإشعار
    </Button>
  );
}
```

## Example: Variants

```tsx
import { Button, toast } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        onClick={() =>
          toast.success('تم حفظ التغييرات', {
            description: 'أصبحت تغييراتك مباشرة على بيئة الإنتاج.',
          })
        }
      >
        نجاح
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info('يتوفر إصدار جديد', {
            description: 'حدث الصفحة للحصول على أحدث الميزات والإصلاحات.',
          })
        }
      >
        معلومة
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning('جلستك على وشك الانتهاء', {
            description: 'سيتم تسجيل خروجك خلال 5 دقائق.',
          })
        }
      >
        تحذير
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast.error('تعذر حفظ تغييراتك', {
            description: 'تحقق من اتصالك وحاول مرة أخرى.',
          })
        }
      >
        خطأ
      </Button>
    </div>
  );
}
```

## Example: With actions (undo)

```tsx
import { Button, toast } from '@dev-dga/react';

export default function Demo() {
  return (
    <Button
      onClick={() =>
        toast('تم حذف العنصر', {
          description: 'يمكنك التراجع خلال 5 ثوان.',
          duration: 5000,
          action: {
            label: 'تراجع',
            onClick: () => toast.success('تمت الاستعادة', { description: 'عاد عنصرك.' }),
          },
          secondaryAction: { label: 'إغلاق', onClick: () => {} },
        })
      }
    >
      حذف العنصر
    </Button>
  );
}
```

## Accessibility

يعلن قارئ الشاشة كل إشعار منبثق عبر المنطقة الحية لمنفذ العرض، ويبقى التركيز في مكانه. لزر إغلاق كل إشعار اسم متاح، والإجراءات أزرار حقيقية.

لأن الإشعارات المنبثقة عابرة، لا تضع معلومة مطلوبة في إشعار منبثق وحده. كرر النتائج في محتوى الصفحة حيث يجدها المستخدم لاحقاً.
