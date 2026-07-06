---
description: 'إدخال رمز التحقق لتدفقات الدخول.'
---

يدخل InputOTP رمزًا رقميًا (رمز الرسائل في السعودية 6 أرقام). التعبئة التلقائية واللصق والمسح تعمل جميعًا، ويستدعى `onComplete` عند اكتمال الخانات. تبقى الأرقام من اليسار إلى اليمين في العربية.

## Example: Verification code

```tsx
import { InputOTP } from '@dev-dga/react';

export default function Demo() {
  return <InputOTP label="رمز التحقق" helperText="أدخل الرمز المكوّن من 6 أرقام الذي أرسلناه إليك" />;
}
```

## Example: Grouped

```tsx
import { InputOTP } from '@dev-dga/react';

export default function Demo() {
  return <InputOTP label="رمز التحقق" length={6} groupSizes={[3, 3]} />;
}
```

## Example: Masked PIN

```tsx
import { InputOTP } from '@dev-dga/react';

export default function Demo() {
  return <InputOTP label="الرقم السري" length={4} mask />;
}
```
