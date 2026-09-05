---
description: 'حقل رمز تحقّق لمرّة واحدة في React لتدفّقات الدخول والتحقّق: رموز الرسائل النصّية من ست خانات، وتجميع، ورقم سرّي مقنّع، ولصق، وتعبئة تلقائية، وonComplete.'
seoTitle: 'رمز تحقّق: مكوّن InputOTP لرموز التحقّق عبر الرسائل النصّية'
---

يدخل InputOTP رمزًا رقميًا (رمز الرسائل في السعودية 6 أرقام). التعبئة التلقائية واللصق والمسح تعمل جميعًا، ويستدعى `onComplete` عند اكتمال الخانات. تبقى الأرقام من اليسار إلى اليمين في العربية.

## When to use

استخدم InputOTP لرموز التحقّق المرسلة عبر الرسائل النصّية أو البريد، ومنها الرموز ذات الست خانات الشائعة في الخدمات السعودية. اضبط `length` ليطابق الرمز، وجمّع الخانات لسهولة القراءة، واستخدم الوضع المقنّع للأرقام السرّية. نفّذ التحقّق من `onComplete` حتى لا يحتاج المستخدم إلى زر إرسال منفصل.

لكلمات المرور استخدم TextInput بنوع password.

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

## Accessibility

كل خانة حقل بتسمية، وتحمل المجموعة تسمية الحقل والنص المساعد والخطأ بالربط نفسه في TextInput. تتقدّم الكتابة تلقائيًا، ويرجع Backspace خانة، ويملأ لصق الرمز الكامل كل الخانات.

تعمل التعبئة التلقائية من الرسائل النصّية واللصق معًا. تبقى الأرقام بترتيب من اليسار إلى اليمين داخل الصفحات العربية.
