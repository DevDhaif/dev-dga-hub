---
description: 'لوحة واحدة قابلة للإظهار والإخفاء.'
---

يعرض Collapsible لوحة واحدة ويخفيها. استخدم زرك الخاص كمشغل، ودعم لوحة المفاتيح وARIA مدمج.

## Example: Basic

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Collapsible style={{ inlineSize: 420, maxWidth: '100%' }}>
      <CollapsibleTrigger asChild>
        <Button variant="secondary">عرض تفاصيل الأهلية</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p style={{ paddingBlockStart: 12, margin: 0 }}>
          يجب أن يحمل المتقدّمون هوية وطنية سارية وألّا تكون عليهم رسوم مستحقة. ويمكن رفع المستندات
          الداعمة بعد الإرسال.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
```

## Example: With a chevron

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from '@dev-dga/react';

const ChevronDown = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <Collapsible style={{ inlineSize: 420, maxWidth: '100%' }}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" endIcon={<ChevronDown />}>
          عرض التفاصيل
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p style={{ paddingBlockStart: 12, margin: 0 }}>
          تنزلق اللوحة فاتحةً وطاويةً بتغيّر الارتفاع، مع مراعاة تقليل الحركة.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
```
