---
description: 'عنصر بديل للشاشات الفارغة.'
---

يملأ EmptyState القوائم ونتائج البحث وشاشات الخطأ الفارغة. مرر `title` و`description` و`action`، أو ركب الأجزاء مباشرة.

## Example: No data

```tsx
import { EmptyState, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <EmptyState
      title="لا توجد طلبات بعد"
      description="أنشئ طلبك الأول للبدء."
      action={<Button>طلب جديد</Button>}
    />
  );
}
```

## Example: Semantic variants

```tsx
import { EmptyState, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <EmptyState
        variant="search"
        title="لا توجد نتائج"
        description="جرّب كلمة بحث أخرى أو امسح عوامل التصفية."
        action={<Button variant="secondary">مسح عوامل التصفية</Button>}
      />
      <EmptyState
        variant="error"
        title="فشل التحميل"
        description="حدث خطأ ما. يرجى المحاولة مرة أخرى."
        action={<Button>إعادة المحاولة</Button>}
      />
      <EmptyState
        variant="success"
        title="أنجزت كل شيء"
        description="لا توجد مهام معلّقة. عمل رائع."
      />
    </div>
  );
}
```

## Example: Composed parts

```tsx
import {
  EmptyState,
  EmptyStateMedia,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
  Button,
} from '@dev-dga/react';

const FolderPlus = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <path
      d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
      strokeLinejoin="round"
    />
    <path d="M12 11v4m-2-2h4" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <EmptyState>
      <EmptyStateMedia>
        <FolderPlus />
      </EmptyStateMedia>
      <EmptyStateTitle>لا توجد مجموعات بيانات منشورة</EmptyStateTitle>
      <EmptyStateDescription>
        انشر مجموعة بيانات لجعلها مرئية على بوابة البيانات المفتوحة الوطنية.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>نشر مجموعة بيانات</Button>
        <Button variant="ghost">اعرف المزيد</Button>
      </EmptyStateActions>
    </EmptyState>
  );
}
```
