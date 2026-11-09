---
description: 'منطقة إظهار وإخفاء واحدة في React مبنية على Radix، تدعم زر مشغل تختاره بنفسك، خيار الفتح افتراضياً، وشكلاً بسهم.'
seoTitle: 'قابل للطي: مكون Collapsible إظهار وإخفاء (Radix)'
---

يعرض Collapsible لوحة واحدة ويخفيها. استخدم زرك كمشغل، ويأتي دعم لوحة المفاتيح وARIA مدمجاً.

## When to use

استخدم Collapsible لإخفاء تفاصيل اختيارية خلف مشغل: عوامل تصفية متقدمة، "عرض المزيد" في ملخص، أو شرح طويل تحت حقل. اجعل تسمية المشغل توضح ما يكشفه.

لعدة أقسام متراصة، استخدم Accordion.

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
          يجب أن يحمل المتقدمون هوية وطنية سارية وألا تكون عليهم رسوم مستحقة. ويمكن رفع المستندات
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
          تنزلق اللوحة فاتحةً وطاويةً بتغير الارتفاع، مع مراعاة تقليل الحركة.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
```

## Accessibility

يعرض المشغل `aria-expanded` و`aria-controls`، مما يتيح لقارئ الشاشة إعلان حالته وهدفه. يبدل مفتاحا Space وEnter حالته.

استخدم زراً حقيقياً كمشغل. إذا أضفت سهماً، أبقه زخرفياً واترك المعنى للتسمية.
