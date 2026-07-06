---
title: TagInput
slug: tag-input
category: Form inputs
status: stable
description: 'A field that turns typed text into chips.'
---

Enter or a comma commits the text as a chip; Backspace removes the last one. It de-duplicates and supports `max` and `validate`.

## Example: Controlled tags

```tsx
import { useState } from 'react';
import { TagInput } from '@dev-dga/react';

export default function Demo() {
  const [tags, setTags] = useState<string[]>(['open-data', 'gov']);
  return (
    <div>
      <TagInput
        label="Dataset tags"
        value={tags}
        onChange={setTags}
        placeholder="Type and press Enter"
      />
      <p style={{ marginTop: 8, fontSize: 14, color: 'var(--ddga-color-muted)' }}>
        {tags.length} tag{tags.length === 1 ? '' : 's'}
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
      label="Keywords"
      defaultValue={['permits', 'licensing']}
      max={3}
      helperText="Adding stops once 3 tags are present."
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
      label="Recipients"
      defaultValue={['team@dga.gov.sa']}
      placeholder="name@example.com"
      helperText="Only valid email addresses are accepted."
      validate={(tag) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tag)}
    />
  );
}
```

## Example: Arabic labels

```tsx
import { TagInput } from '@dev-dga/react';

export default function Demo() {
  return (
    <TagInput
      label="المهارات"
      defaultValue={['تحليل البيانات', 'إدارة المشاريع']}
      placeholder="أضف مهارة"
      helperText="اضغط Enter أو الفاصلة للإضافة."
      removeLabel={(t) => `إزالة ${t}`}
    />
  );
}
```
