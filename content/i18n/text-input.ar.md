---
description: 'حقل نصّي أحادي السطر متاح الوصول في React مع تسمية مدمجة ونص مساعد ورسالة خطأ وبادئات ولاحقات وأنماط تعبئة. جاهز للعربية والاتجاه من اليمين.'
seoTitle: 'حقل نصّي: مكوّن TextInput متاح الوصول بتسمية وحالة خطأ'
---

يملك TextInput تسميته وربط الحقل. استخدم `helperText` و`errorMessage` للحالات، و`startAdornment`/`endAdornment` لأيقونة أو وحدة داخل الحقل.

## When to use

استخدم TextInput للقيم النصّية القصيرة: الأسماء، والعنوان الوطني، وأرقام المرجع، والبريد الإلكتروني. استخدم Textarea للنص متعدّد الأسطر، وNumberInput للقيم الرقمية بأزرار الزيادة، وSearchBox للبحث.

ضع الوحدات ورموز العملة والأيقونات في `startAdornment` و`endAdornment` لا في النص النائب، لتبقى ظاهرة بعد الكتابة. استخدم `helperText` لتلميحات الصيغة مثل طول رقم الهوية المتوقّع.

## Example: Labelled field

```tsx
import { TextInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <TextInput
      label="الاسم الكامل"
      placeholder="أدخل اسمك الكامل"
      helperText="كما يظهر في هويتك الوطنية."
    />
  );
}
```

## Example: Required & error states

```tsx
import { TextInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TextInput label="الهوية الوطنية" placeholder="هوية من 10 أرقام" required />
      <TextInput
        label="البريد الإلكتروني"
        type="email"
        defaultValue="not-an-email"
        error
        errorMessage="أدخل عنوان بريد إلكتروني صحيح."
      />
    </div>
  );
}
```

## Example: Fill styles

```tsx
import { TextInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TextInput label="افتراضي" variant="default" defaultValue="نص مُدخَل" />
      <TextInput label="تعبئة أفتح" variant="filled-lighter" defaultValue="نص مُدخَل" />
      <TextInput label="تعبئة أغمق" variant="filled-darker" defaultValue="نص مُدخَل" />
    </div>
  );
}
```

## Example: In-field prefix & suffix

```tsx
import { TextInput, TextInputAffix } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <TextInput
        label="الموقع الإلكتروني"
        placeholder="my-service"
        startAdornment={<TextInputAffix>https://</TextInputAffix>}
      />
      <TextInput
        label="الرسوم"
        type="number"
        defaultValue="250"
        endAdornment={<TextInputAffix>ريال</TextInputAffix>}
      />
    </div>
  );
}
```

## Accessibility

تُربط التسمية `label` بالحقل عبر `htmlFor` و`id`، فالنقر عليها يركّز الحقل ويعلنها قارئ الشاشة. يُربط `helperText` و`errorMessage` عبر `aria-describedby`، ويضبط `error` الخاصية `aria-invalid`. الحقول الإلزامية تُعلن على أنها إلزامية.

لا تجعل النص النائب التسمية الوحيدة؛ فهو يختفي عند الكتابة ولا يحقّق متطلّبات التباين.
