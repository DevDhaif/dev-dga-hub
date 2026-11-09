---
description: 'اقتباس بارز في React: عنوان اختياري، مؤلف، صفة المؤلف، صورة رمزية، أحجام، وتلوينات. يعرض عنصر blockquote الدلالي.'
seoTitle: 'اقتباس: مكون Quote لاقتباس منسوب'
---

يستقبل Quote نص الاقتباس عبر `children`، مع خيارات `quoteTitle`، `author`، `authorTitle`، و`avatar`. يعرض المكون عنصر blockquote الدلالي.

## When to use

استخدم Quote للشهادات، تصريح قيادي في صفحة خدمة، أو مقتطف بارز من سياسة. أبق الاقتباسات قصيرة وانسبها إلى قائلها.

لإبراز تنبيه غير مقتبس، استخدم InlineAlert.

## Example: Title, quote & author

```tsx
import { Quote } from '@dev-dga/react';

export default function Demo() {
  return (
    <Quote
      quoteTitle="الرقمنة أولاً بشكل افتراضي"
      author="سارة العتيبي"
      authorTitle="مديرة منتج، هيئة الحكومة الرقمية"
    >
      ينبغي أن تكون كل خدمة حكومية قابلة للاستخدام من المحاولة الأولى، بأي من اللغتين، وعلى أي جهاز،
      فإمكانية الوصول ليست إضافةً ثانوية، بل هي الأساس.
    </Quote>
  );
}
```

## Example: With an avatar

```tsx
import { Quote, Avatar, AvatarFallback } from '@dev-dga/react';

export default function Demo() {
  return (
    <Quote
      quoteTitle="عنوان الاقتباس"
      avatar={
        <Avatar>
          <AvatarFallback>سع</AvatarFallback>
        </Avatar>
      }
      author="سارة العتيبي"
      authorTitle="مديرة منتج، هيئة الحكومة الرقمية"
    >
      يوضع الاقتباس هنا لتسليط الضوء على مقولة معينة أو لتقديم اقتباس مختصر يعبر عن فكرة أو مفهوم
      مهم.
    </Quote>
  );
}
```

## Example: Body only, small & untinted

```tsx
import { Quote } from '@dev-dga/react';

export default function Demo() {
  return (
    <Quote size="sm" whiteBackground={false}>
      النظام المصمم جيداً هو ما لا تضطر أبداً للتفكير فيه.
    </Quote>
  );
}
```

## Accessibility

يعرض Quote عنصر `<blockquote>` الأصلي، لذلك يعلنه قارئ الشاشة اقتباساً. يظهر المؤلف وصفته نصاً، والصورة الرمزية زخرفية.

تحمل علامات الاقتباس الزخرفية `aria-hidden`.
