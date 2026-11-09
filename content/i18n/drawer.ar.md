---
description: 'لوح في React ينزلق من بداية السطر أو نهايته أو من الأسفل، للإعدادات، لوحات التفاصيل، ونماذج التصفية. يدير التركيز كما يديره Modal، وتراعي جوانبه الاتجاه من اليمين إلى اليسار.'
seoTitle: 'لوح جانبي: مكون Drawer للوح الجانبي والسفلي'
---

ينزلق Drawer من حافة الشاشة بسلوك التركيز ومفتاح Escape نفسه في Modal. تعتمد الخاصية `side` على الاتجاه المنطقي، لذا تنعكس `start` و`end` مع اتجاه الصفحة.

## When to use

استخدم Drawer للتدفقات الثانوية التي تحتاج إلى مساحة أكبر من Modal: تحرير الإعدادات، أو عرض تفاصيل سجل، أو نموذج تصفية. استخدم اللوح السفلي في الجوال للمنتقيات القصيرة.

تتبادل القيمتان `start` و`end` موضعيهما في الاتجاه من اليمين إلى اليسار لأن الخاصية `side` منطقية. أبق الصفحة خلف اللوح ظاهرة ليحتفظ المستخدم بسياقه.

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
          يبقى الرأس والتذييل مثبتين بينما تتمرر هذه المنطقة الوسطى. ضع أي محتوى هنا، نموذجاً أو
          ملخصاً أو قائمة سجلات.
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

يعتمد Drawer على أساس الحوار نفسه الذي يعتمد عليه Modal: يبقى التركيز محصوراً داخله، ويغلقه Escape، ثم يعود التركيز إلى المشغل. تمنح أجزاء العنوان والوصف اللوح اسمه المتاح.

لزر الإغلاق اسم متاح. ويتبع اللوح اتجاه الصفحة، مما يجعله ينزلق من الحافة المتوقعة.
