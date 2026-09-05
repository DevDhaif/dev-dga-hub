---
description: 'حقل وسوم في React يحوّل النص المكتوب إلى شرائح قابلة للإزالة، مع تحقّق وحدّ أقصى ومنع التكرار وربط للحقل. يعمل بلوحة المفاتيح وبالعربية.'
seoTitle: 'حقل الوسوم: مكوّن TagInput يحوّل النص إلى وسوم قابلة للإزالة'
---

يثبت Enter أو الفاصلة النص حبة، ويحذف Backspace آخر واحدة. يزيل التكرار ويدعم `max` و`validate`.

## When to use

استخدم TagInput لجمع عدّة قيم قصيرة حرّة: مستلمي بريد، أو كلمات مفتاحية، أو أرقام مرجعية. استخدم `validate` لرفض المدخلات غير الصحيحة و`max` لتحديد العدد.

حين تأتي القيم من قائمة ثابتة، استخدم Dropdown مع `multiple` ليختار المستخدم بدل أن يكتب.

## Example: Controlled tags

```tsx
import { useState } from 'react';
import { TagInput } from '@dev-dga/react';

export default function Demo() {
  const [tags, setTags] = useState<string[]>(['البيانات المفتوحة', 'حكومي']);
  return (
    <div>
      <TagInput
        label="وسوم مجموعة البيانات"
        value={tags}
        onChange={setTags}
        placeholder="اكتب ثم اضغط Enter"
      />
      <p style={{ marginTop: 8, fontSize: 14, color: 'var(--ddga-color-muted)' }}>
        {tags.length} {tags.length === 1 ? 'وسم' : 'وسوم'}
      </p>
    </div>
  );
}
```

## Example: Capped at three

```tsx
import { TagInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <TagInput
      label="الكلمات المفتاحية"
      defaultValue={['التصاريح', 'التراخيص']}
      max={3}
      helperText="تتوقّف الإضافة بمجرّد وجود 3 وسوم."
    />
  );
}
```

## Example: Validated email recipients

```tsx
import { TagInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <TagInput
      label="المستلمون"
      defaultValue={['team@dga.gov.sa']}
      placeholder="name@example.com"
      helperText="لا تُقبل سوى عناوين البريد الإلكتروني الصحيحة."
      validate={(tag) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tag)}
    />
  );
}
```

## Accessibility

تُعرض الشرائح قائمةً، فيسمع قارئ الشاشة عدد القيم ويتنقّل بينها. يثبّت Enter أو الفاصلة القيمة ويحذف Backspace آخر واحدة، وتعلن منطقة حيّة الإضافات والحذف.

تُربط تسمية الحقل والنص المساعد والخطأ كما في TextInput. يحمل كل زر إزالة اسم الوسم في تسميته المتاحة.
