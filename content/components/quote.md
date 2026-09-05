---
title: Quote
slug: quote
category: Data display
status: stable
description: 'React pull quote and blockquote with optional title, author, author title, and avatar, in sizes and tints. Renders semantic blockquote markup.'
seoTitle: 'Quote: React blockquote with attribution'
---

Quote takes the quotation as `children`, plus optional `quoteTitle`, `author`, `authorTitle`, and `avatar`. It renders a semantic blockquote.

## When to use

Use Quote for testimonials, a leadership statement on a service page, or a highlighted excerpt from a policy. Keep quotes short and attribute them.

For a callout that is not a quotation, use InlineAlert.

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

## Accessibility

Quote renders a native `<blockquote>`, so screen readers announce it as a quotation. The author and title are text, and the avatar is decorative.

Decorative quotation marks are `aria-hidden`.
