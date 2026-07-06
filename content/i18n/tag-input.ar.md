---
description: 'حقل يحول النص المكتوب إلى حبات.'
---

يثبت Enter أو الفاصلة النص حبة، ويحذف Backspace آخر واحدة. يزيل التكرار ويدعم `max` و`validate`.

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
