---
description: 'لوح تنقّل منزلق في React برأس وعناصر مجمّعة وروابط الصفحة الحالية وتذييل، بدلالات nav وقوائم حقيقية. ينعكس الجانب في الاتجاه العربي.'
seoTitle: 'قائمة منزلقة: مكوّن SlideoutMenu لوح تنقّل منزلق'
---

SlideoutMenu لوحة تنقل برأس وعناصر مجمعة وتذييل. بخلاف Drawer يستخدم دلالات قوائم وروابط حقيقية، وتنعكس `side` مع الاتجاه.

## When to use

استخدم SlideoutMenu للتنقّل على مستوى التطبيق في الجوال أو في ترويسة مضغوطة: أقسام البوّابة، وروابط الحساب، وإجراءات اللغة وتسجيل الخروج. جمّع العناصر وأبقِ المستوى الأعلى قصيرًا.

للتدفّقات الثانوية ذات النماذج، استخدم Drawer. للتنقّل الدائم في سطح المكتب، استخدم Sidebar.

## Example: Grouped navigation

```tsx
import {
  SlideoutMenu,
  SlideoutMenuTrigger,
  SlideoutMenuContent,
  SlideoutMenuHeader,
  SlideoutMenuTitle,
  SlideoutMenuDescription,
  SlideoutMenuBody,
  SlideoutMenuGroup,
  SlideoutMenuItem,
  SlideoutMenuSeparator,
  SlideoutMenuFooter,
  SlideoutMenuClose,
  Button,
} from '@dev-dga/react';

const FileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
  </svg>
);
const PlusCircle = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v8M8 12h8" strokeLinecap="round" />
  </svg>
);
const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Demo() {
  return (
    <SlideoutMenu>
      <SlideoutMenuTrigger asChild>
        <Button variant="outline">افتح القائمة</Button>
      </SlideoutMenuTrigger>
      <SlideoutMenuContent side="start" background="gray">
        <SlideoutMenuHeader icon={<PlusCircle />}>
          <SlideoutMenuTitle>المنصة الوطنية</SlideoutMenuTitle>
          <SlideoutMenuDescription>انتقل إلى أي قسم.</SlideoutMenuDescription>
        </SlideoutMenuHeader>
        <SlideoutMenuBody>
          <SlideoutMenuGroup label="مساحة العمل">
            <SlideoutMenuItem icon={<FileIcon />}>لوحة التحكم</SlideoutMenuItem>
            <SlideoutMenuItem icon={<FileIcon />} trailing="+99">
              البريد الوارد
            </SlideoutMenuItem>
            <SlideoutMenuItem icon={<FileIcon />} trailing={<ArrowIcon />}>
              التقارير
            </SlideoutMenuItem>
          </SlideoutMenuGroup>
          <SlideoutMenuSeparator />
          <SlideoutMenuGroup label="الحساب">
            <SlideoutMenuItem asChild icon={<FileIcon />}>
              <a href="#settings">الإعدادات</a>
            </SlideoutMenuItem>
            <SlideoutMenuItem icon={<FileIcon />}>الإشعارات</SlideoutMenuItem>
          </SlideoutMenuGroup>
        </SlideoutMenuBody>
        <SlideoutMenuFooter>
          <SlideoutMenuClose asChild>
            <Button variant="outline">إلغاء</Button>
          </SlideoutMenuClose>
          <SlideoutMenuClose asChild>
            <Button>حفظ</Button>
          </SlideoutMenuClose>
        </SlideoutMenuFooter>
      </SlideoutMenuContent>
    </SlideoutMenu>
  );
}
```

## Example: Current-page links

```tsx
import {
  SlideoutMenu,
  SlideoutMenuTrigger,
  SlideoutMenuContent,
  SlideoutMenuHeader,
  SlideoutMenuTitle,
  SlideoutMenuBody,
  SlideoutMenuGroup,
  SlideoutMenuItem,
  Button,
} from '@dev-dga/react';

const FileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden
  >
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
  </svg>
);

export default function Demo() {
  return (
    <SlideoutMenu>
      <SlideoutMenuTrigger asChild>
        <Button variant="outline">افتح القائمة</Button>
      </SlideoutMenuTrigger>
      <SlideoutMenuContent side="start" background="gray">
        <SlideoutMenuHeader>
          <SlideoutMenuTitle>الخدمات</SlideoutMenuTitle>
        </SlideoutMenuHeader>
        <SlideoutMenuBody>
          <SlideoutMenuGroup label="مساحة العمل">
            <SlideoutMenuItem asChild icon={<FileIcon />} active>
              <a href="#dashboard" aria-current="page">
                لوحة التحكم
              </a>
            </SlideoutMenuItem>
            <SlideoutMenuItem asChild icon={<FileIcon />}>
              <a href="#permits">التصاريح</a>
            </SlideoutMenuItem>
            <SlideoutMenuItem asChild icon={<FileIcon />}>
              <a href="#reports">التقارير</a>
            </SlideoutMenuItem>
          </SlideoutMenuGroup>
        </SlideoutMenuBody>
      </SlideoutMenuContent>
    </SlideoutMenu>
  );
}
```

## Accessibility

يعرض اللوح `<nav>` بقائمة روابط حقيقية، فيعرضه قارئ الشاشة معلمًا للتنقّل. تُعلّم الصفحة الحالية بـ `aria-current="page"`، وتستخدم الفواصل `role="separator"`.

لزر الإغلاق والمشغّل أسماء متاحة، ويفتح اللوح من بداية السطر ليطابق اتجاه القراءة.
