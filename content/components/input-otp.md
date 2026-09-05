---
title: InputOTP
slug: input-otp
category: Form inputs
status: stable
description: 'React one-time passcode input for sign-in and verification: six-digit SMS codes, grouping, masked PIN, paste, autofill, and onComplete. Digits stay LTR in Arabic.'
seoTitle: 'InputOTP: React one-time passcode input for SMS codes'
---

InputOTP enters a numeric code (Saudi SMS OTP is 6 digits). SMS autofill, paste, and Backspace all work; `onComplete` fires when the last slot fills. Digits stay left to right in Arabic.

## When to use

Use InputOTP for verification codes sent by SMS or email, including the six-digit codes common in Saudi services. Set `length` to match the code, group digits for readability, and use the masked mode for PINs. Fire your verification from `onComplete` so users do not need a separate submit.

For passwords, use a TextInput with the password type.

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

## Accessibility

Each slot is a labelled input, and the group carries the field label, helper text, and error through the same wiring as TextInput. Typing advances automatically, Backspace moves back, and pasting a full code fills every slot.

SMS autofill and paste both fill the slots. Digits keep a left-to-right order inside Arabic pages.
