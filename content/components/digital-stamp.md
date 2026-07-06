---
title: Digital Stamp
slug: digital-stamp
category: Data display
status: new
description: 'The official verification banner for Saudi government sites.'
---

DigitalStamp shows the flag and statement bar with an explainer panel. Set `extension` for the domain copy and `registrationNumber` for the DGA registration panel.

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
