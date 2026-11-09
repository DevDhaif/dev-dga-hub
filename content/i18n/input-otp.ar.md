---
description: 'حقل رمز تحقق لمرة واحدة في React لتسجيل الدخول والتحقق: رموز رسائل نصية من 6 خانات، تجميع الخانات، رقم سري مقنّع، لصق، تعبئة تلقائية، وonComplete.'
seoTitle: 'رمز تحقق: مكون InputOTP لرموز التحقق عبر الرسائل النصية'
---

يستقبل InputOTP رمزاً رقمياً (يتكون رمز الرسائل النصية في السعودية من 6 أرقام). تعمل التعبئة التلقائية من الرسائل النصية، اللصق، وBackspace، ويستدعي المكون `onComplete` عند امتلاء آخر خانة. تبقى الأرقام مرتبة من اليسار إلى اليمين في الصفحات العربية.

## When to use

استخدم InputOTP لرموز التحقق المرسلة عبر الرسائل النصية أو البريد الإلكتروني، ومنها الرموز المكونة من 6 خانات والشائعة في الخدمات السعودية. اضبط `length` ليطابق طول الرمز، وجمّع الخانات لتسهل قراءتها. واستخدم الوضع المقنّع للأرقام السرية. شغّل التحقق داخل `onComplete` حتى لا يحتاج المستخدم إلى زر إرسال منفصل.

لكلمات المرور، استخدم TextInput بالنوع password.

## Example: Verification code

```tsx
import { InputOTP } from '@dev-dga/react';

export default function Demo() {
  return <InputOTP label="رمز التحقق" helperText="أدخل الرمز المكون من 6 أرقام الذي أرسلناه إليك" />;
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

تمثل كل خانة حقلاً له تسمية، وتحمل المجموعة تسمية الحقل، النص المساعد، ورسالة الخطأ بالربط نفسه المستخدم في TextInput. ينتقل التركيز إلى الخانة التالية تلقائياً أثناء الكتابة، ويعيده Backspace خانة واحدة. ويملأ لصق الرمز كاملاً كل الخانات.

يملأ اللصق والتعبئة التلقائية من الرسائل النصية الخانات كلها. تبقى الأرقام مرتبة من اليسار إلى اليمين داخل الصفحات العربية.
