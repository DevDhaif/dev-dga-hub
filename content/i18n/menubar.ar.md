---
description: 'شريط قوائم أفقي بنمط سطح المكتب في React مبني على Radix، بقوائم متداخلة وعناصر مربّعات اختيار وأزرار اختيار ومشغّلات محدّدة. تتحرّك مفاتيح الأسهم عبر القوائم وداخلها.'
seoTitle: 'شريط قوائم: مكوّن Menubar شريط قوائم بنمط سطح المكتب (Radix)'
---

يقدم Menubar نمط File / Edit / View. يضم كل `MenubarMenu` مشغلًا وقائمة عناصر، وتتنقل مفاتيح الأسهم عبر القوائم وداخلها.

## When to use

استخدم Menubar في الأدوات المكتبية الكثيفة مثل محرّرات المستندات ولوحات الإدارة الخلفية حيث يتوقّع المستخدم قوائم بنمط ملف وتحرير وعرض. لقائمة إجراءات واحدة، استخدم DropdownMenu. للتنقّل الرئيسي في الموقع، استخدم Sidebar أو SlideoutMenu.

## Example: File / Edit / View

```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Menubar>
      <MenubarMenu value="file">
        <MenubarTrigger>ملف</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘N">ملف جديد</MenubarItem>
          <MenubarItem shortcut="⌘O">فتح…</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>فتح الأخيرة</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>مشروع A</MenubarItem>
              <MenubarItem>مشروع B</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem shortcut="⌘S">حفظ</MenubarItem>
          <MenubarSeparator />
          <MenubarItem destructive>حذف</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu value="edit">
        <MenubarTrigger>تحرير</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘Z">تراجع</MenubarItem>
          <MenubarItem shortcut="⌘⇧Z">إعادة</MenubarItem>
          <MenubarSeparator />
          <MenubarItem shortcut="⌘X">قص</MenubarItem>
          <MenubarItem shortcut="⌘C">نسخ</MenubarItem>
          <MenubarItem shortcut="⌘V">لصق</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu value="view">
        <MenubarTrigger>عرض</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>إعادة تحميل</MenubarItem>
          <MenubarItem disabled>إعادة تحميل إجباري</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>تبديل ملء الشاشة</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

## Example: Checkboxes & radio group

```tsx
import { useState } from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarSeparator,
  MenubarRadioGroup,
  MenubarRadioItem,
} from '@dev-dga/react';

export default function Demo() {
  const [statusBar, setStatusBar] = useState(true);
  const [activityBar, setActivityBar] = useState(false);
  const [layout, setLayout] = useState('comfortable');
  return (
    <Menubar>
      <MenubarMenu value="view">
        <MenubarTrigger>عرض</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>المظهر</MenubarLabel>
          <MenubarCheckboxItem checked={statusBar} onCheckedChange={setStatusBar}>
            شريط الحالة
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={activityBar} onCheckedChange={setActivityBar}>
            شريط النشاط
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel>الكثافة</MenubarLabel>
          <MenubarRadioGroup value={layout} onValueChange={setLayout}>
            <MenubarRadioItem value="comfortable">مريح</MenubarRadioItem>
            <MenubarRadioItem value="compact">مضغوط</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

## Accessibility

يعرض الشريط `role="menubar"` بمشغّلات قوائم؛ ينقل السهمان الأيسر والأيمن بين القوائم، وينقل السهمان العلوي والسفلي داخل الواحدة، ويغلق Escape القائمة المفتوحة. تقفز الكتابة إلى العنصر المطابق.

تعرض عناصر مربّعات الاختيار وأزرار الاختيار `aria-checked`. تتبع مفاتيح الأسهم اتجاه القراءة في العربية.
