---
description: 'لوح في React ينزلق من بداية السطر أو نهايته أو الأسفل للإعدادات ولوحات التفاصيل ونماذج التصفية. تعامل مع التركيز كما في Modal، وجوانب تراعي الاتجاه العربي.'
seoTitle: 'لوح جانبي: مكوّن Drawer لوح جانبي ولوح سفلي'
---

ينزلق Drawer من حافة الشاشة بنفس سلوك التركيز وزر ESC في Modal. الخاصية `side` منطقية، لذا تنعكس `start`/`end` مع الاتجاه.

## When to use

استخدم Drawer للتدفّقات الثانوية التي تحتاج مساحة أكبر من Modal: تحرير الإعدادات، أو عرض تفاصيل سجل، أو نموذج تصفية. استخدم اللوح السفلي في الجوال للمنتقيات القصيرة.

لأن `side` منطقي، يتبادل `start` و`end` في الاتجاه العربي. أبقِ الصفحة خلفه ظاهرة ليحتفظ المستخدم بسياقه.

## Example: Settings drawer

```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">افتح الإعدادات</Button>
      </DrawerTrigger>
      <DrawerContent side="end">
        <DrawerHeader>
          <DrawerTitle>إعدادات الحساب</DrawerTitle>
          <DrawerDescription>ينزلق من الحافة النهائية.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          يبقى الرأس والتذييل مثبّتين بينما تتمرّر هذه المنطقة الوسطى. ضع أي محتوى هنا، نموذجاً أو
          ملخّصاً أو قائمة سجلات.
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">إلغاء</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button>حفظ التغييرات</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
```

## Example: Bottom sheet

```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  Button,
} from '@dev-dga/react';

export default function Demo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">افتح اللوح</Button>
      </DrawerTrigger>
      <DrawerContent side="bottom" size="lg">
        <DrawerHeader>
          <DrawerTitle>تفاصيل الخدمة</DrawerTitle>
          <DrawerDescription>النمط المعياري للوح على الجوال.</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          `side="bottom"` مع `size="lg"` يمنح لوحاً طويلاً يرتفع من الحافة السفلية، مثالي على الشاشات
          الصغيرة.
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
```

## Accessibility

يُبنى Drawer على أساس الحوار نفسه في Modal: يُحصر التركيز داخله، ويغلقه Escape، ويعود التركيز إلى المشغّل. تمنح أجزاء العنوان والوصف اللوحَ اسمه المتاح.

لزر الإغلاق اسم متاح، ويتبع اللوح اتجاه الصفحة فينزلق من الحافّة المتوقّعة.
