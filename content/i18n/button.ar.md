---
description: 'زر React متاح الوصول للمنصّات الحكومية السعودية: تسعة أنماط، وأحجام، وأيقونات، وحالة تحميل، وخاصية asChild لروابط التوجيه. جاهز للعربية والوضع الداكن.'
seoTitle: 'زر: مكوّن Button متاح الوصول لمنصّات React الحكومية'
---

ينفذ Button إجراء عند الضغط عليه. اختر `variant` و`size`، وأضف `startIcon`/`endIcon` أو `loading`، واستخدم `asChild` لعرض رابط بمظهر زر.

## When to use

استخدم Button لأي إجراء يغيّر شيئًا: إرسال نموذج، أو فتح حوار، أو تأكيد خطوة. للانتقال إلى صفحة أخرى استخدم Link، أو غلّف رابط التوجيه بخاصية `asChild` ليبدو كزر ويبقى رابطًا.

اجعل النمط `primary` للإجراء الرئيسي الوحيد في الشاشة، واستخدم `secondary` أو `outline` للبقية. أنماط `destructive` تنبّه إلى الإجراءات التي لا يمكن التراجع عنها مثل حذف سجل. في النماذج الحكومية ضع الإجراء الرئيسي في نهاية الصف ليظهر في الجهة نفسها بالعربية والإنجليزية.

## Example: Variants

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button>أساسي</Button>
      <Button variant="secondary">ثانوي</Button>
      <Button variant="black">أسود</Button>
      <Button variant="outline">محدّد</Button>
      <Button variant="ghost">شفاف</Button>
      <Button variant="destructive">حذف</Button>
    </div>
  );
}
```

## Example: Sizes

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">صغير</Button>
      <Button size="md">متوسط</Button>
      <Button size="lg">كبير</Button>
    </div>
  );
}
```

## Example: Icons & loading

```tsx
import { Button } from '@dev-dga/react';

const Download = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button startIcon={<Download />}>تنزيل</Button>
      <Button variant="outline" loading>
        جارٍ الحفظ
      </Button>
      <Button disabled>معطّل</Button>
    </div>
  );
}
```

## Example: As a link (asChild)

```tsx
import { Button } from '@dev-dga/react';

export default function Demo() {
  return (
    <Button asChild>
      <a href="https://github.com/DevDhaif/dev-dga-hub" target="_blank" rel="noreferrer">
        افتح المستودع
      </a>
    </Button>
  );
}
```

## Accessibility

يعرض Button عنصر `<button>` أصليًا، لذا يعمل التركيز ومفتاحا Enter وSpace دون إعداد إضافي. أثناء `loading` يضبط الزر `aria-busy` ويتجاهل النقر.

الأزرار التي تعرض أيقونة فقط تحتاج `aria-label`، لأن الأيقونة وحدها لا تقول شيئًا لقارئ الشاشة. في وضع `asChild` تُعرض حالة التعطيل عبر `aria-disabled` ويخرج العنصر من ترتيب التنقّل، ويبقى عليك منع الإجراء نفسه. تظهر حلقة تركيز واضحة في الوضعين الفاتح والداكن.
