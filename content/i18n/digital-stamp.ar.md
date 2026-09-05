---
description: 'مكوّن DigitalStamp للمواقع الحكومية السعودية في React: شريط العلم والعبارة، ولوحة شرح نطاق .gov.sa، ورقم تسجيل الهيئة، بالعربية والإنجليزية.'
seoTitle: 'الختم الرقمي: شريط التحقّق الرسمي للمواقع الحكومية السعودية'
---

يعرض DigitalStamp شريط العلم والعبارة الرسمية مع لوحة توضيحية. حدد `extension` لنص النطاق و`registrationNumber` لإظهار لوحة تسجيل الهيئة.

## When to use

استخدم DigitalStamp في أعلى كل صفحة من موقع حكومي سعودي رسمي، كما يشترط كود المنصّات. اضبط `extension` ليطابق نطاقك و`registrationNumber` حين يكون الموقع مسجّلًا لدى هيئة الحكومة الرقمية.

اعرضه مرّة واحدة في الصفحة، فوق الترويسة.

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

النص متوفّر بالعربية والإنجليزية، ويتبع الشريط اتجاه الصفحة.
