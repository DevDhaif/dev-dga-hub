---
description: 'شريط تقدم خطي وحلقة تقدم دائرية في React: حالة محددة وغير محددة، حالات تغذية راجعة، تسمية، نص مساعد، وعرض للقيمة.'
seoTitle: 'تقدم: مكون Progress لشريط تقدم وحلقة دائرية'
---

يعرض `Progress` شريطاً خطياً، ويعرض `CircularProgress` حلقة. مرر `value` للحالة المحددة، ولا تمررها للحالة غير المحددة. تحتاج الحلقة إلى `aria-label`.

## When to use

استخدم Progress حين يمكن التعبير عن الاكتمال برقم: رفع ملف، فحص عدة ملفات، أو حصة. لا تستخدم الحالة غير المحددة إلا حين يكون الإجمالي مجهولاً. استخدم `CircularProgress` في المساحات الضيقة مثل البطاقات وخلايا الجداول.

لتدفقات الخطوات، استخدم ProgressIndicator.

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
      <Progress value={40} label="جار الرفع" helperText="نص مساعد" />
      <Progress value={100} state="success" label="جار الرفع" helperText="اكتمل" />
      <Progress value={0} state="error" label="جار الرفع" helperText="فشل الرفع" />
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

يعرض Progress `role="progressbar"` مع `aria-valuenow`، `aria-valuemin`، و`aria-valuemax`. في الحالة غير المحددة، يحذف Progress القيمة الحالية. تسمي `label` الظاهرة الشريط، بينما لا تسمية ظاهرة للحلقة. لذلك مرر للحلقة `aria-label` أو `aria-labelledby`.

استخدم `getValueLabel` لإعلان قيمة أوضح مثل "3 من 5 ملفات".
