---
description: 'لوحة تنزلق من حافة الشاشة.'
---

ينزلق Drawer من حافة الشاشة بنفس سلوك التركيز وزر ESC في Modal. الخاصية `side` منطقية، لذا تنعكس `start`/`end` مع الاتجاه.

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
