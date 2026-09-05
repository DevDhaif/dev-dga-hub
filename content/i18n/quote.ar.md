---
description: 'اقتباس بارز في React بعنوان اختياري ومؤلّف وصفة المؤلّف وصورة رمزية، بأحجام وتلوينات. يعرض عنصر blockquote الدلالي.'
seoTitle: 'اقتباس: مكوّن Quote اقتباس منسوب'
---

يستقبل Quote الاقتباس عبر `children`، مع خيارات `quoteTitle` و`author` و`authorTitle` و`avatar`. ويعرض عنصر blockquote دلاليًا.

## When to use

استخدم Quote للشهادات، أو تصريح قيادي في صفحة خدمة، أو مقتطف بارز من سياسة. أبقِ الاقتباسات قصيرة وانسبها إلى قائلها.

للتنبيه الذي ليس اقتباسًا، استخدم InlineAlert.

## Example: Title, quote & author

```tsx
import { Quote } from '@dev-dga/react';

export default function Demo() {
  return (
    <Quote
      quoteTitle="الرقمنة أولًا بشكل افتراضي"
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
      يُوضع الاقتباس هنا لتسليط الضوء على مقولة معينة أو لتقديم اقتباس مختصر يعبّر عن فكرة أو مفهوم
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
      النظام المصمَّم جيدًا هو ما لا تضطر أبدًا للتفكير فيه.
    </Quote>
  );
}
```

## Accessibility

يعرض Quote عنصر `<blockquote>` الأصلي، فيعلنه قارئ الشاشة اقتباسًا. المؤلّف والصفة نص، والصورة الرمزية زخرفية.

علامات الاقتباس الزخرفية `aria-hidden`.
