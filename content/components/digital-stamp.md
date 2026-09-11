---
title: Digital Stamp
slug: digital-stamp
category: Data display
status: new
description: 'React DigitalStamp for Saudi government websites: the flag and statement bar, .gov.sa explainer panel, and DGA registration number, in Arabic and English.'
seoTitle: 'DigitalStamp: official Saudi government verification bar'
---

DigitalStamp shows the flag and statement bar with an explainer panel. Set `extension` for the domain copy and `registrationNumber` for the DGA registration panel.

## When to use

Use DigitalStamp at the top of every page of an official Saudi government website, as the Platforms Code requires. Set `extension` to match your domain and `registrationNumber` when the site is registered with the DGA.

Show it once per page, above the header.

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
        statement="An accredited educational website registered with the Digital Government Authority."
      />
    </div>
  );
}
```

## Example: Arabic (RTL)

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
    <div dir="rtl" style={{ width: 720, maxWidth: '100%' }}>
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

## Accessibility

The explainer toggle is a button with `aria-expanded` and `aria-controls`, so the panel state is announced. The flag and marks are decorative and the statement is text.

The default copy is the English SDGA text. Pass the Arabic statement and panel copy through props, as the Arabic example shows; the bar itself follows the page direction.
