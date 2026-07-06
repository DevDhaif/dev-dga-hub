---
description: 'بطاقة اقتباس مع نسبة القائل.'
---

يستقبل Quote الاقتباس عبر `children`، مع خيارات `quoteTitle` و`author` و`authorTitle` و`avatar`. ويعرض عنصر blockquote دلاليًا.

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
