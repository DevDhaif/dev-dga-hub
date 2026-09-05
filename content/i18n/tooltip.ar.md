---
description: 'تلميح متاح الوصول في React مبني على Radix يظهر عند التمرير والتركيز، مع مشغّل HelpIcon ونمط بعنوان وأيقونة وسطح معكوس. جاهز للاتجاه العربي.'
seoTitle: 'تلميح: مكوّن Tooltip متاح الوصول مع مشغّل HelpIcon'
---

لف المشغل بـ `TooltipTrigger asChild` وضع الرسالة في `TooltipContent`. ويجمع `HelpIcon` مشغل "?" جاهزًا مع تلميحه.

## When to use

استخدم Tooltip لتلميح قصير يوضّح زر أيقونة أو تسمية حقل، مثل معنى رقم مرجعي. استخدم `HelpIcon` بجانب تسميات النماذج لمشغّل «?» جاهز.

لا تضع التعليمات الأساسية في تلميح؛ فهو مخفي افتراضيًا وغير متاح باللمس. استخدم `helperText` في الحقل بدلًا منه.

## Example: Basic

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          مرّر فوقي
        </Button>
      </TooltipTrigger>
      <TooltipContent>تظهر التلميحات بعد تأخير قصير.</TooltipContent>
    </Tooltip>
  );
}
```

## Example: Title, icon & inverted surface

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          عرض التفاصيل
        </Button>
      </TooltipTrigger>
      <TooltipContent inverted icon title="الهوية الوطنية">
        أدخل الرقم المكوّن من 10 أرقام المطبوع على بطاقة هويتك.
      </TooltipContent>
    </Tooltip>
  );
}
```

## Example: Help icon

```tsx
import { HelpIcon } from '@dev-dga/react';

export default function Demo() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      الآيبان
      <HelpIcon label="ما هو الآيبان؟" title="الآيبان">
        رقم حساب مصرفي دولي مكوّن من 24 حرفًا يُستخدم في التحويلات.
      </HelpIcon>
    </span>
  );
}
```

## Accessibility

يفتح التلميح عند التمرير وعند التركيز بلوحة المفاتيح، ويغلقه Escape. يربط Radix المحتوى بالمشغّل، فيقرأ قارئ الشاشة التلميح عند التركيز على المشغّل.

يجب أن يكون المشغّل نفسه قابلًا للتركيز، فغلّف زرًّا أو رابطًا بـ `TooltipTrigger asChild`. أبقِ النص قصيرًا؛ فالتلميحات ليست للفقرات.
