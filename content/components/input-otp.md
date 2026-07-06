---
title: InputOTP
slug: input-otp
category: Form inputs
status: stable
description: 'One-time code entry for sign-in flows.'
---

InputOTP enters a numeric code (Saudi SMS OTP is 6 digits). SMS autofill, paste, and Backspace all work; `onComplete` fires when the last slot fills. Digits stay left to right in Arabic.

## Example: Verification code

```tsx
import { InputOTP } from '@dev-dga/react';

export default function Demo() {
  return <InputOTP label="Verification code" helperText="Enter the 6-digit code we sent you" />;
}
```

## Example: Grouped

```tsx
import { InputOTP } from '@dev-dga/react';

export default function Demo() {
  return <InputOTP label="Verification code" length={6} groupSizes={[3, 3]} />;
}
```

## Example: Masked PIN

```tsx
import { InputOTP } from '@dev-dga/react';

export default function Demo() {
  return <InputOTP label="PIN" length={4} mask />;
}
```

## Example: Arabic label

```tsx
import { InputOTP } from '@dev-dga/react';

export default function Demo() {
  return (
    <InputOTP label="رمز التحقق" helperText="أدخل الرمز المكوّن من 6 أرقام الذي أرسلناه إليك" />
  );
}
```
