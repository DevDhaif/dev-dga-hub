---
description: 'تنبيهات مؤقتة تطلق باستدعاء دالة.'
---

استدع `toast(message, options)` أو `toast.success(...)` من أي مكان؛ إذ تركب حاوية `<NotificationToast />` مرة واحدة قرب جذر التطبيق.

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
            description: 'حدِّث الصفحة للحصول على أحدث الميزات والإصلاحات.',
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
          toast.error('تعذّر حفظ تغييراتك', {
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
          description: 'يمكنك التراجع خلال 5 ثوانٍ.',
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
