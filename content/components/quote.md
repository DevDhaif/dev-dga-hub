---
title: Quote
slug: quote
category: Data display
status: stable
description: 'A quotation card with author attribution.'
---

Quote takes the quotation as `children`, plus optional `quoteTitle`, `author`, `authorTitle`, and `avatar`. It renders a semantic blockquote.

## Example: Title, quote & author

```tsx
import { Quote } from '@dev-dga/react';

export default function Demo() {
  return (
    <Quote
      quoteTitle="Digital-first by default"
      author="Sara Al-Otaibi"
      authorTitle="Product Manager, DGA"
    >
      Every government service should be usable on the first try, in either language, on any device
, accessibility is not an add-on, it is the baseline.
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
      quoteTitle="Title of quote"
      avatar={
        <Avatar>
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
      }
      author="Sara Al-Otaibi"
      authorTitle="Product Manager, DGA"
    >
      The quote is placed here to highlight a specific saying or to present a brief quote that
      expresses an important idea or concept.
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
      A well-designed system is one you never have to think about.
    </Quote>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { Quote } from '@dev-dga/react';

export default function Demo() {
  return (
    <div dir="rtl">
      <Quote
        quoteTitle="عنوان الاقتباس"
        author="سارة العتيبي"
        authorTitle="مديرة منتج، هيئة الحكومة الرقمية"
      >
        تُوضع هنا عبارة الاقتباس لتسليط الضوء على مقولة معينة أو تقديم اقتباس مختصر يعبر عن فكرة أو
        مفهوم مهم.
      </Quote>
    </div>
  );
}
```
