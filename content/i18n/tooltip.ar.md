---
description: 'تلميح قصير عند التحويم أو التركيز.'
---

لف المشغل بـ `TooltipTrigger asChild` وضع الرسالة في `TooltipContent`. ويجمع `HelpIcon` مشغل "?" جاهزًا مع تلميحه.

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
