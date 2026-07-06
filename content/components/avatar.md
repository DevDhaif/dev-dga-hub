---
title: Avatar
slug: avatar
category: Data display
status: stable
description: 'A user image with a text fallback.'
---

Avatar shows a photo, and `AvatarFallback` shows initials when the image is missing. Use `AvatarGroup` to stack several with a "+N" overflow.

## Example: Image with fallback

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@dev-dga/react';

const PORTRAIT =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" fill="#25935F"/><circle cx="48" cy="38" r="18" fill="#fff"/><path d="M16 88c0-17 14-28 32-28s32 11 32 28Z" fill="#fff"/></svg>',
  );

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar>
        <AvatarImage src={PORTRAIT} alt="Ahmed Al-Otaibi" />
        <AvatarFallback>AH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>NK</AvatarFallback>
      </Avatar>
    </div>
  );
}
```

## Example: Sizes and shapes

```tsx
import { Avatar, AvatarFallback } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap' }}>
      <Avatar size="xs">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="xl" shape="square">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}
```

## Example: Colored fallbacks with status

```tsx
import { Avatar, AvatarFallback } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar status="online" statusLabel="online">
        <AvatarFallback colorScheme="success">SU</AvatarFallback>
      </Avatar>
      <Avatar status="busy" statusLabel="busy">
        <AvatarFallback colorScheme="destructive">DS</AvatarFallback>
      </Avatar>
      <Avatar status="away" statusLabel="away">
        <AvatarFallback colorScheme="warning">WA</AvatarFallback>
      </Avatar>
      <Avatar status="offline" statusLabel="offline">
        <AvatarFallback colorScheme="info">IN</AvatarFallback>
      </Avatar>
    </div>
  );
}
```

## Example: Group with overflow

```tsx
import { AvatarGroup, Avatar, AvatarFallback } from '@dev-dga/react';

export default function Demo() {
  return (
    <AvatarGroup max={3} size="md">
      <Avatar>
        <AvatarFallback>AH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>NK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}
```
