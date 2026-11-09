---
description: 'يمثل DgaProvider جذر كل تطبيق @dev-dga: يضبط الاتجاه، الوضع الداكن، وسمة العلامة، ويستضيف البوابة لترث الطبقات المنبثقة هذه الإعدادات. غلف به تطبيقك مرة واحدة.'
seoTitle: 'المزود الجذري: DgaProvider للسمة والاتجاه والوضع الداكن'
---

استورد ملف التنسيقات مرة واحدة (`import '@dev-dga/css'`)، ثم غلف تطبيقك بـ `DgaProvider` واحد. يوفر المزود الاتجاه، الوضع الداكن، والسمة لكل المكونات، ومنها الطبقات المنبثقة.

## When to use

استخدم DgaProvider مرة واحدة في جذر تطبيقك بعد استيراد `@dev-dga/css`. اضبط `dir="rtl"` للعربية، و`mode="dark"` للوضع الداكن، و`theme` لاختيار ألوان العلامة. تقرأ كل المكونات هذه القيم من المزود، حتى الحوارات والقوائم المعروضة في البوابات.

يمكنك وضع مزود داخل آخر لعرض معاينة تختلف عن الصفحة، مثل الأمثلة في هذا الموقع.

## Example: Brand theme

```tsx
import { DgaProvider, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <DgaProvider
      theme={{ primary: 'lavender' }}
      style={{ padding: 24, borderRadius: 12, background: 'var(--ddga-color-background)' }}
    >
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button>إجراء بالثيم</Button>
        <Button variant="secondary">ثانوي</Button>
        <Button variant="outline">محدد</Button>
      </div>
    </DgaProvider>
  );
}
```

## Example: Dark mode

```tsx
import { DgaProvider, Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <DgaProvider
      mode="dark"
      style={{
        padding: 24,
        borderRadius: 12,
        background: 'var(--ddga-color-background)',
        color: 'var(--ddga-color-foreground)',
      }}
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <span>كل ما بالداخل يرث الوضع الداكن.</span>
        <Button>تأكيد</Button>
        <Button variant="secondary">إلغاء</Button>
      </div>
    </DgaProvider>
  );
}
```

## Accessibility

يضبط المزود قيمة `dir`، لتتبع خوارزمية الاتجاه الثنائي في المتصفح والتقنيات المساعدة اتجاه القراءة. اضبط `lang` على المستند بنفسك ليبدل قارئ الشاشة صوته إلى العربية.

تظهر الطبقات المنبثقة داخل بوابة المزود، مما يجعلها ترث منه الاتجاه، السمة، وإعدادات التباين بدل إعدادات المستند الافتراضية.
