---
description: 'صورة مستخدم مع بديل نصي عند غيابها.'
---

يعرض Avatar صورة المستخدم، ويعرض `AvatarFallback` الأحرف الأولى عند غياب الصورة. استخدم `AvatarGroup` لتجميع عدة صور مع عداد "+N" للفائض.

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
        <AvatarImage src={PORTRAIT} alt="أحمد العتيبي" />
        <AvatarFallback>AH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>NK</AvatarFallback>
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
      <Avatar status="online" statusLabel="متصل">
        <AvatarFallback colorScheme="success">SU</AvatarFallback>
      </Avatar>
      <Avatar status="busy" statusLabel="مشغول">
        <AvatarFallback colorScheme="destructive">DS</AvatarFallback>
      </Avatar>
      <Avatar status="away" statusLabel="بعيد">
        <AvatarFallback colorScheme="warning">WA</AvatarFallback>
      </Avatar>
      <Avatar status="offline" statusLabel="غير متصل">
        <AvatarFallback colorScheme="info">IN</AvatarFallback>
      </Avatar>
    </div>
  );
}
```
