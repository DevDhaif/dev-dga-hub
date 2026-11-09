---
description: 'حقل وسوم في React يحول النص المكتوب إلى شرائح قابلة للإزالة، مع تحقق وحد أقصى ومنع التكرار وربط للحقل. يعمل بلوحة المفاتيح وبالعربية.'
seoTitle: 'حقل الوسوم: مكون TagInput يحول النص إلى وسوم قابلة للإزالة'
---

يحول Enter أو الفاصلة النص إلى شريحة، ويحذف Backspace آخر شريحة. يمنع TagInput التكرار، ويدعم `max` و`validate`.

## When to use

استخدم TagInput لجمع عدة قيم قصيرة حرة: مستلمي بريد، كلمات مفتاحية، أو أرقام مرجعية. استخدم `validate` لرفض المدخلات غير الصحيحة و`max` لتحديد العدد.

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
      helperText="تتوقف الإضافة بمجرد وجود 3 وسوم."
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
      helperText="لا تقبل سوى عناوين البريد الإلكتروني الصحيحة."
      validate={(tag) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tag)}
    />
  );
}
```

## Accessibility

تظهر الشرائح في قائمة، لذا يسمع مستخدم قارئ الشاشة عدد القيم ويستطيع التنقل بينها. يحول Enter أو الفاصلة القيمة إلى شريحة، ويحذف Backspace آخر شريحة. تعلن منطقة حية الإضافات والحذف.

ترتبط تسمية الحقل والنص المساعد ورسالة الخطأ بالحقل كما في TextInput. يحمل كل زر إزالة اسم الوسم في تسميته المتاحة.
