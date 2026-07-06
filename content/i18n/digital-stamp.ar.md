---
description: 'شريط التحقق الرسمي للمواقع الحكومية السعودية.'
---

يعرض DigitalStamp شريط العلم والعبارة الرسمية مع لوحة توضيحية. حدد `extension` لنص النطاق و`registrationNumber` لإظهار لوحة تسجيل الهيئة.

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
