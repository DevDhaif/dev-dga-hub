---
title: List
slug: list
category: Data display
status: stable
description: 'Styled ordered, unordered, and icon lists.'
---

List renders bullet, numbered, or icon lists with the right `<ul>`/`<ol>` element. `ListItem` supports a second nesting level and per-item icons.

## Example: Variants

```tsx
import { List, ListItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
      <List variant="unordered" aria-label="Cities">
        <ListItem>Riyadh</ListItem>
        <ListItem>Jeddah</ListItem>
        <ListItem>Mecca</ListItem>
      </List>
      <List variant="ordered" aria-label="Steps">
        <ListItem>Review your details</ListItem>
        <ListItem>Confirm and pay</ListItem>
        <ListItem>Print the receipt</ListItem>
      </List>
      <List variant="with-icon" aria-label="Features">
        <ListItem>Fast and reliable</ListItem>
        <ListItem>Secure by default</ListItem>
        <ListItem>Available 24/7</ListItem>
      </List>
    </div>
  );
}
```

## Example: Nesting levels and tone

```tsx
import { List, ListItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <List variant="ordered" tone="primary" aria-label="Steps">
      <ListItem>Review your details</ListItem>
      <ListItem level={2}>Check the total</ListItem>
      <ListItem level={2}>Confirm the address</ListItem>
      <ListItem>Confirm and pay</ListItem>
    </List>
  );
}
```

## Example: With custom icon

```tsx
import { List, ListItem } from '@dev-dga/react';

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  </svg>
);

export default function Demo() {
  return (
    <List variant="with-icon" tone="primary" aria-label="Features">
      <ListItem>Fast and reliable</ListItem>
      <ListItem>Secure by default</ListItem>
      <ListItem icon={<Star />}>Available 24/7</ListItem>
    </List>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { List, ListItem } from '@dev-dga/react';

export default function Demo() {
  return (
    <div dir="rtl">
      <List variant="ordered" aria-label="الخطوات">
        <ListItem>مراجعة بياناتك</ListItem>
        <ListItem level={2}>التحقق من المجموع</ListItem>
        <ListItem level={2}>تأكيد العنوان</ListItem>
        <ListItem>التأكيد والدفع</ListItem>
      </List>
    </div>
  );
}
```
