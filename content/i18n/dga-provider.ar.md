---
description: 'DgaProvider جذر كل تطبيق @dev-dga: يضبط الاتجاه والوضع الداكن وسمة العلامة، ويستضيف البوّابة لترثها الطبقات المنبثقة. غلّف مرّة واحدة.'
seoTitle: 'المزوّد الجذري: DgaProvider للسمة والاتجاه والوضع الداكن'
---

استورد ملف الأنماط مرة واحدة (`import '@dev-dga/css'`) ولف تطبيقك بـ `DgaProvider` واحد. يوفر الاتجاه والوضع الداكن والسمة لكل المكونات بما فيها النوافذ العائمة.

## When to use

استخدم DgaProvider مرّة واحدة في جذر تطبيقك بعد استيراد `@dev-dga/css`. اضبط `dir="rtl"` للعربية، و`mode="dark"` للوضع الداكن، و`theme` لاختيار لوحة العلامة. يقرأ كل مكوّن هذه القيم من المزوّد، بما فيها الحوارات والقوائم المعروضة في البوّابات.

يمكن تداخل المزوّدات لمعاينة تختلف عن الصفحة، مثل الأمثلة في هذا الموقع.

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
        <Button variant="outline">محدّد</Button>
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
        <span>كل ما بالداخل يرِث الوضع الداكن.</span>
        <Button>تأكيد</Button>
        <Button variant="secondary">إلغاء</Button>
      </div>
    </DgaProvider>
  );
}
```

## Accessibility

يضبط المزوّد السمة `dir` ليتبع خوارزمية المتصفّح ثنائية الاتجاه والتقنيات المساعدة اتجاهَ القراءة. اضبط `lang` على المستند بنفسك ليبدّل قارئ الشاشة الصوت إلى العربية.

تُعرض الطبقات المنبثقة داخل بوّابة المزوّد، فترث الاتجاه والسمة وإعدادات التباين بدل الرجوع إلى إعدادات المستند الافتراضية.
