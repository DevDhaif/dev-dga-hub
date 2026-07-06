---
title: Saudi Riyal
slug: saudi-riyal
category: Data display
status: new
description: 'The Saudi Riyal symbol with correct amount formatting.'
---

SaudiRiyal pins the official Riyal glyph before the number in both directions, keeps the digits left to right, and announces the currency to screen readers. Pass a `number` to format it.

## Example: Amount

```tsx
import { SaudiRiyal } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'baseline' }}>
      <SaudiRiyal value={1234.5} decimals={2} size="3xl" />
      <SaudiRiyal value={49} size="xl" tone="muted" />
    </div>
  );
}
```

## Example: Sizes

```tsx
import { SaudiRiyal } from '@dev-dga/react';

const SIZES = ['2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'] as const;

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
      {SIZES.map((size) => (
        <SaudiRiyal key={size} value={1234.56} decimals={2} size={size} />
      ))}
    </div>
  );
}
```

## Example: Tones

```tsx
import { SaudiRiyal } from '@dev-dga/react';

const TONES = ['default', 'muted', 'brand', 'success', 'error'] as const;

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
      {TONES.map((tone) => (
        <SaudiRiyal key={tone} value={1234.56} decimals={2} size="xl" tone={tone} />
      ))}
      <span style={{ background: '#14573A', padding: '6px 12px', borderRadius: 8 }}>
        <SaudiRiyal value={1234.56} decimals={2} size="xl" tone="inverted" />
      </span>
    </div>
  );
}
```

## Example: Negative and written values

```tsx
import { SaudiRiyal } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
      <SaudiRiyal value={1500} decimals={2} size="xl" />
      <SaudiRiyal value={-320.5} decimals={2} size="xl" tone="error" />
      <SaudiRiyal value="1.2 million" size="xl" />
    </div>
  );
}
```

## Example: Numerals

```tsx
import { SaudiRiyal } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
      <SaudiRiyal value={1234.56} decimals={2} size="xl" numerals="latn" />
      <SaudiRiyal value={1234.56} decimals={2} size="xl" numerals="arab" />
    </div>
  );
}
```

## Example: The symbol

```tsx
import { SaudiRiyalSymbol } from '@dev-dga/react';

const SIZES = ['sm', 'lg', '2xl', '3xl'] as const;
const COIN_TONES = ['default', 'brand', 'success', 'error'] as const;

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        {SIZES.map((size) => (
          <SaudiRiyalSymbol key={size} size={size} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        {COIN_TONES.map((tone) => (
          <SaudiRiyalSymbol key={tone} size="2xl" appearance="coin" tone={tone} />
        ))}
      </div>
    </div>
  );
}
```

## Example: Inline in text

```tsx
import { SaudiRiyal } from '@dev-dga/react';

export default function Demo() {
  return (
    <p style={{ maxWidth: 460, fontSize: 16, lineHeight: 1.7, margin: 0 }}>
      Renew your vehicle registration for just{' '}
      <SaudiRiyal value={49.99} decimals={2} tone="brand" />, down from{' '}
      <SaudiRiyal value={99} decimals={2} tone="muted" />.
    </p>
  );
}
```

## Example: As a link

```tsx
import { SaudiRiyal } from '@dev-dga/react';

export default function Demo() {
  return (
    <SaudiRiyal asChild value={49.99} decimals={2} size="2xl" tone="brand">
      <a href="#pricing" />
    </SaudiRiyal>
  );
}
```
