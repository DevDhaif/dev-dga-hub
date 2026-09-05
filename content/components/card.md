---
title: Card
slug: card
category: Data display
status: stable
description: 'Composable React card surface with image, icon, header, content, footer, and expandable sections. Selectable and interactive variants for dashboards and portals.'
seoTitle: 'Card: composable React card with header, body, and footer'
---

Card is a set of parts. Combine a header, content, and footer as needed.

## When to use

Use Card to group related content into one surface: a service summary, a request in a list, or a dashboard tile. Compose only the parts you need. Make a card interactive when the whole card leads to one destination, and selectable when users pick among cards.

Avoid nesting cards; use Divider or spacing inside instead.

## Example: Basic card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Card style={{ width: 360, maxWidth: '100%' }}>
      <CardHeader>
        <CardTitle>Project Atlas</CardTitle>
        <CardDescription>Last updated 2 hours ago.</CardDescription>
      </CardHeader>
      <CardContent>
        A cross-ministry data platform delivering unified access to national registries, with
        role-based controls and full audit trails.
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          View details
        </Button>
      </CardFooter>
    </Card>
  );
}
```

## Example: With icon

```tsx
import {
  Card,
  CardIcon,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@dev-dga/react';

const Shield = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <Card style={{ width: 360, maxWidth: '100%' }}>
      <CardHeader>
        <CardIcon>
          <Shield />
        </CardIcon>
        <CardTitle>Secure by default</CardTitle>
        <CardDescription>WCAG 2.2 AA · RTL-native · dark-ready.</CardDescription>
      </CardHeader>
      <CardContent>
        Every component ships accessible primitives and inherits theme and direction from a single
        provider.
      </CardContent>
    </Card>
  );
}
```

## Accessibility

A plain Card is a generic container with no role. Interactive cards expose `role="button"` and respond to Enter, and selectable cards expose `role="checkbox"` with `aria-checked`. Expandable content links its trigger with `aria-expanded` and `aria-controls`.

Give the card a heading through `CardTitle` so screen reader users can navigate by headings.
