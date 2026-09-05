---
description: 'سطح بطاقة مركّب في React بصورة وأيقونة ورأس ومحتوى وتذييل وأقسام قابلة للتوسيع. أنماط قابلة للاختيار وتفاعلية للوحات التحكّم والبوّابات.'
seoTitle: 'بطاقة: مكوّن Card مركّب برأس وجسم وتذييل'
---

Card مجموعة من الأجزاء. ركب رأسًا ومحتوى وتذييلًا حسب حاجتك.

## When to use

استخدم Card لتجميع محتوى مترابط في سطح واحد: ملخّص خدمة، أو طلب في قائمة، أو بلاطة في لوحة تحكّم. ركّب الأجزاء التي تحتاجها فقط. اجعل البطاقة تفاعلية حين تقود كلّها إلى وجهة واحدة، وقابلة للاختيار حين يختار المستخدم من بين بطاقات.

تجنّب تداخل البطاقات؛ استخدم Divider أو المسافات داخلها.

## Example: Basic card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Card style={{ width: 360, maxWidth: '100%' }}>
      <CardHeader>
        <CardTitle>مشروع أطلس</CardTitle>
        <CardDescription>آخر تحديث قبل ساعتين.</CardDescription>
      </CardHeader>
      <CardContent>
        منصة بيانات مشتركة بين الوزارات توفّر وصولًا موحّدًا إلى السجلات الوطنية، مع ضوابط قائمة على
        الأدوار وسجلات تدقيق كاملة.
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          عرض التفاصيل
        </Button>
      </CardFooter>
    </Card>
  );
}
```

## Example: With icon

```tsx
import {
  Card,
  CardIcon,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@dev-dga/react';

const Shield = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <Card style={{ width: 360, maxWidth: '100%' }}>
      <CardHeader>
        <CardIcon>
          <Shield />
        </CardIcon>
        <CardTitle>آمن افتراضيًّا</CardTitle>
        <CardDescription>WCAG 2.2 AA · دعم أصلي للاتجاه من اليمين إلى اليسار · جاهز للوضع الداكن.</CardDescription>
      </CardHeader>
      <CardContent>
        يأتي كل مكوّن بلبنات أساسية متاحة، ويرث السمة والاتجاه من مزوّد واحد.
      </CardContent>
    </Card>
  );
}
```

## Accessibility

البطاقة العادية حاوية عامة بلا دور. تعرض البطاقات التفاعلية `role="button"` وتستجيب لـ Enter، وتعرض البطاقات القابلة للاختيار `role="checkbox"` مع `aria-checked`. يربط المحتوى القابل للتوسيع مشغّله بـ `aria-expanded` و`aria-controls`.

أعطِ البطاقة عنوانًا عبر `CardTitle` ليتنقّل مستخدم قارئ الشاشة بالعناوين.
