---
description: 'مكوّن DigitalStamp للمواقع الحكومية السعودية في React: شريط العلم والعبارة، ولوحة شرح نطاق .gov.sa، ورقم تسجيل الهيئة، بالعربية والإنجليزية.'
seoTitle: 'الختم الرقمي: شريط التحقّق الرسمي للمواقع الحكومية السعودية'
---

يعرض DigitalStamp شريط العلم والعبارة الرسمية مع لوحة توضيحية. حدد `extension` لنص النطاق و`registrationNumber` لإظهار لوحة تسجيل الهيئة.

## When to use

استخدم DigitalStamp في أعلى كل صفحة من موقع حكومي سعودي رسمي، كما يشترط كود المنصّات. اضبط `extension` ليطابق نطاقك و`registrationNumber` حين يكون الموقع مسجّلًا لدى هيئة الحكومة الرقمية.

اعرضه مرّة واحدة في الصفحة، فوق الترويسة.

## Example: Verification bar

```tsx
import { DigitalStamp } from '@dev-dga/react';

const DgaMark = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden
  >
    <path d="M12 2 21 6v6c0 5-3.5 9.5-9 12-5.5-2.5-9-7-9-12V6z" strokeLinejoin="round" />
    <path d="m8 12 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ width: 720, maxWidth: '100%' }}>
      <DigitalStamp
        aria-label="التحقق من الموقع الحكومي"
        statement="موقع حكومي مسجّل لدى هيئة الحكومة الرقمية."
        triggerLabel="كيف تتحقق؟"
        domainTitle={
          <>
            تنتهي روابط المواقع الحكومية الرسمية السعودية بـ <strong>.gov.sa</strong>
          </>
        }
        domainDescription="يعود الموقع إلى جهة حكومية رسمية في المملكة العربية السعودية وينتهي دائمًا بـ .gov.sa ."
        securityTitle={
          <>
            المواقع الرسمية الموثوقة تستخدم <strong>HTTPS</strong>
          </>
        }
        securityDescription="تأكد من أن الموقع يستخدم بروتوكول HTTPS."
        registrationLabel="مسجّل لدى هيئة الحكومة الرقمية:"
        registrationNumber="20230103200"
        registrationHref="https://example.gov.sa"
        logo={<DgaMark />}
      />
    </div>
  );
}
```

## Example: Expanded explainer

```tsx
import { DigitalStamp } from '@dev-dga/react';

const DgaMark = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden
  >
    <path d="M12 2 21 6v6c0 5-3.5 9.5-9 12-5.5-2.5-9-7-9-12V6z" strokeLinejoin="round" />
    <path d="m8 12 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ width: 720, maxWidth: '100%' }}>
      <DigitalStamp
        defaultOpen
        aria-label="التحقق من الموقع الحكومي"
        statement="موقع حكومي مسجّل لدى هيئة الحكومة الرقمية."
        triggerLabel="كيف تتحقق؟"
        domainTitle={
          <>
            تنتهي روابط المواقع الحكومية الرسمية السعودية بـ <strong>.gov.sa</strong>
          </>
        }
        domainDescription="يعود الموقع إلى جهة حكومية رسمية في المملكة العربية السعودية وينتهي دائمًا بـ .gov.sa ."
        securityTitle={
          <>
            المواقع الرسمية الموثوقة تستخدم <strong>HTTPS</strong>
          </>
        }
        securityDescription="تأكد من أن الموقع يستخدم بروتوكول HTTPS."
        registrationLabel="مسجّل لدى هيئة الحكومة الرقمية:"
        registrationNumber="20230103200"
        registrationHref="https://example.gov.sa"
        logo={<DgaMark />}
      />
    </div>
  );
}
```

## Example: Educational extension

```tsx
import { DigitalStamp } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ width: 720, maxWidth: '100%' }}>
      <DigitalStamp
        extension="edu.sa"
        defaultOpen
        statement="موقع تعليمي معتمد مسجّل لدى هيئة الحكومة الرقمية."
      />
    </div>
  );
}
```

## Accessibility

زر الشرح زر بـ `aria-expanded` و`aria-controls`، فتُعلن حالة اللوحة. العلم والعلامات زخرفية والعبارة نص.

النص الافتراضي هو نص SDGA الإنجليزي. مرّر العبارة العربية ونصوص اللوحة عبر الخصائص كما في المثال العربي؛ ويتبع الشريط نفسه اتجاه الصفحة.
