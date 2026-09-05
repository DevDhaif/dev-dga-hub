---
description: 'حبّة حالة في React بنقطة ملوّنة وتسمية لحالات الطلبات والإجراءات: نجاح وتحذير وخطأ ومعلومة ومحايد، بأنماط معبّأة أو خفيفة.'
seoTitle: 'وسم الحالة: مكوّن StatusTag للنجاح والتحذير والخطأ والمعلومة'
---

يجمع StatusTag نقطة ملونة مع تسمية قصيرة. حدد `tone` للمعنى و`status` للتعبئة، وللتصنيفات استخدم Tag.

## When to use

استخدم StatusTag حيثما كان للسجل حالة: «قيد المراجعة»، «معتمد»، «مرفوض»، «مدفوع». اختر `tone` بحسب المعنى وثبّت الصياغة عبر الشاشات ليتعلّم المستخدم المفردات.

استخدم Tag للفئات التي ليست حالات.

## Example: Tones

```tsx
import { StatusTag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <StatusTag tone="success">نشِط</StatusTag>
      <StatusTag tone="warning">قيد الانتظار</StatusTag>
      <StatusTag tone="error">فاشل</StatusTag>
      <StatusTag tone="info">قيد التنفيذ</StatusTag>
      <StatusTag tone="neutral">مسودّة</StatusTag>
    </div>
  );
}
```

## Example: Status styles

```tsx
import { StatusTag } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <StatusTag tone="success" status="subtle">
        خفيف
      </StatusTag>
      <StatusTag tone="success" status="ghost">
        شبحي
      </StatusTag>
      <StatusTag tone="success" status="inverted">
        معكوس
      </StatusTag>
    </div>
  );
}
```

## Accessibility

النص هو الذي يحمل الحالة. النقطة الملوّنة زخرفية و`aria-hidden`، فلا يعتمد المعنى على اللون وحده.

اختيرت الدرجات لتحقيق التباين في التعبئتين والوضعين. أبقِ التسميات قصيرة ومتطابقة في كل جدول وبطاقة تعرض الحالة نفسها.
