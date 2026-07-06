---
title: Card
slug: card
category: Data display
status: stable
description: 'A composable surface for grouped content.'
---

Card is a set of parts. Combine a header, content, and footer as needed.

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
