---
description: 'مكون SaudiRiyal في React يعرض رمز الريال الرسمي بتنسيق مبالغ متوافق مع SDGA: موضع ثابت للرمز، إشارة سالب صحيحة في الاتجاه من اليمين إلى اليسار، أرقام، ودرجات.'
seoTitle: 'الريال السعودي: رمز الريال الرسمي بتنسيق صحيح'
---

يضع SaudiRiyal رمز الريال الرسمي على يسار الرقم في الاتجاهين، ويبقي الأرقام من اليسار إلى اليمين. يعلن المكون العملة لقارئ الشاشة. مرر قيمة من نوع `number` لينسقها المكون.

## When to use

استخدم SaudiRiyal لكل مبلغ مالي في خدمة سعودية: الرسوم، الغرامات، الأرصدة، والإجماليات. مرر رقماً، ويتولى المكون وضع الرمز، تنسيق الأرقام، ومعالجة القيم السالبة.

استخدم الرمز وحده في ترويسات الأعمدة أو التسميات.

## Example: Negative and written values

```tsx
import { SaudiRiyal } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
      <SaudiRiyal value={1500} decimals={2} size="xl" />
      <SaudiRiyal value={-320.5} decimals={2} size="xl" tone="error" />
      <SaudiRiyal value="1.2 مليون" size="xl" />
    </div>
  );
}
```

## Example: Inline in text

```tsx
import { SaudiRiyal } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ maxWidth: 460, fontSize: 16, lineHeight: 1.7, margin: 0 }}>
      جدد رخصة مركبتك مقابل{' '}
      <SaudiRiyal value={49.99} decimals={2} tone="brand" /> فقط، بدلاً من{' '}
      <SaudiRiyal value={99} decimals={2} tone="muted" />.
    </p>
  );
}
```

## Accessibility

يقرأ قارئ الشاشة المبلغ من نص مخفي بصرياً يذكر القيمة والعملة، ويحمل رمز الريال `aria-hidden`. تبقى الأرقام من اليسار إلى اليمين في التخطيطات العربية، وتبقى إشارة السالب في الجهة الصحيحة.

يرث المكون حجم الخط من النص المحيط، لذلك يتناسب معه.
