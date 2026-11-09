---
description: 'فاصل في React للفصل الأفقي أو العمودي، مع تسمية مضمنة اختيارية، درجات، ووضع زخرفي. يستخدم الدور separator.'
seoTitle: 'فاصل: مكون Divider أفقي وعمودي'
---

يفصل Divider بين المحتوى أفقياً أو عمودياً. مرر نصاً داخله لعرض تسمية، أو مرر `decorative` إذا كان الفاصل بصرياً فقط.

## When to use

استخدم Divider لفصل الأقسام داخل بطاقة أو نموذج أو شريط أدوات. أضف تسمية لفواصل "أو" بين الإجراءات البديلة.

فضّل المسافات على الفواصل حين يكون التخطيط واضحاً، لأن كثرة الخطوط تضيف ضوضاء.

## Example: Horizontal and vertical

```tsx
import { Divider } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320 }}>
      <p style={{ margin: 0 }}>السجل الوطني</p>
      <Divider style={{ margin: '12px 0' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 24 }}>
        <span>الرئيسية</span>
        <Divider orientation="vertical" />
        <span>الإعدادات</span>
        <Divider orientation="vertical" />
        <span>تسجيل الخروج</span>
      </div>
    </div>
  );
}
```

## Example: Labeled

```tsx
import { Divider } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Divider>أو تابع باستخدام</Divider>
      <Divider labelPosition="start">الأخيرة</Divider>
      <Divider variant="dashed">أفلت الملفات هنا</Divider>
    </div>
  );
}
```

## Accessibility

يعرض Divider الدور `role="separator"` مع `aria-orientation` لتعرف التقنيات المساعدة اتجاهه. مرر `decorative` للفواصل البصرية فقط، ليعرض الفاصل `role="none"` ويبقى خارج شجرة الوصول.

يقرأ الفاصل ذو التسمية تسميته نصاً.
