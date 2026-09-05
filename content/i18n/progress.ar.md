---
description: 'شريط تقدّم خطّي وحلقة تقدّم دائرية في React بحالات محدّدة وغير محدّدة، وحالات تغذية راجعة، وتسمية، ونص مساعد، وعرض للقيمة.'
seoTitle: 'تقدّم: مكوّن Progress شريط تقدّم وحلقة دائرية'
---

`Progress` شريط خطي و`CircularProgress` حلقة. مرر `value`، أو أغفلها للحالة غير المحددة؛ وتحتاج الحلقة إلى `aria-label`.

## When to use

استخدم Progress حين يمكن التعبير عن الاكتمال برقم: رفع ملف، أو فحص عدّة ملفّات، أو حصّة. استخدم الحالة غير المحدّدة فقط ما دام الإجمالي مجهولًا. استخدم `CircularProgress` في المساحات الضيّقة مثل البطاقات وخلايا الجداول.

لتدفّقات الخطوات، استخدم ProgressIndicator.

## Example: Linear bar

```tsx
import { Progress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <Progress value={20} size="sm" label="صغير" />
      <Progress value={50} size="md" label="متوسط" />
      <Progress value={75} size="lg" label="كبير" />
    </div>
  );
}
```

## Example: Feedback states

```tsx
import { Progress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <Progress value={40} label="جارٍ الرفع" helperText="نص مساعد" />
      <Progress value={100} state="success" label="جارٍ الرفع" helperText="اكتمل" />
      <Progress value={0} state="error" label="جارٍ الرفع" helperText="فشل الرفع" />
    </div>
  );
}
```

## Example: Circular ring

```tsx
import { CircularProgress } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
      <CircularProgress value={50} size="sm" aria-label="المستخدمون النشطون" />
      <CircularProgress value={50} size="md" aria-label="المستخدمون النشطون" />
      <CircularProgress value={72} size="lg" description="المستخدمون النشطون" aria-label="المستخدمون النشطون" />
    </div>
  );
}
```

## Accessibility

يعرض Progress الدور `role="progressbar"` مع `aria-valuenow` و`aria-valuemin` و`aria-valuemax`، ويحذف القيمة الحالية في الحالة غير المحدّدة. التسمية `label` الظاهرة تسمّي الشريط؛ أما الحلقة فلا تسمية ظاهرة لها، فمرّر `aria-label` أو `aria-labelledby`.

استخدم `getValueLabel` لإعلان قيمة أوضح مثل «3 من 5 ملفّات».
