---
title: TagInput
slug: tag-input
category: Form inputs
status: stable
description: 'React tag input that commits typed text as removable chips, with validation, a maximum count, de-duplication, and field wiring. Keyboard and Arabic ready.'
seoTitle: 'TagInput: React input that turns text into removable tags'
---

Enter or a comma commits the text as a chip; Backspace removes the last one. It de-duplicates and supports `max` and `validate`.

## When to use

Use TagInput to collect several short free-form values: email recipients, keywords, or reference numbers. Use `validate` to reject malformed entries and `max` to cap the count.

When the values come from a fixed list, use Dropdown with `multiple` so users pick rather than type.

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

## Accessibility

The chips render as a list, so screen readers hear how many values exist and can move through them. Enter or a comma commits a value and Backspace removes the last one, and a live region announces additions and removals.

The field label, helper text, and error are wired like TextInput. Each remove button carries the tag name in its accessible label.
