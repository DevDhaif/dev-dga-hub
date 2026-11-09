---
description: 'حوار منبثق متاح الوصول في React مبني على Radix: أيقونة رأس، عنوان، وصف، جسم، إجراءات تذييل، أحجام، حصر للتركيز، وEscape للإغلاق. يرث السمة والاتجاه.'
seoTitle: 'حوار: مكون Modal حوار منبثق متاح الوصول بحصر التركيز'
---

يفتح Modal حواراً من مشغل، وللحوار رأس، جسم، وتذييل إجراءات. يرث الحوار السمة والاتجاه من المزود.

## When to use

استخدم Modal لمهمة قصيرة يجب إكمالها أو إلغاؤها قبل العودة إلى الصفحة: تأكيد حذف، إدخال رمز تحقق، أو مراجعة ملخص قبل الإرسال. اجعل الحوار لغرض واحد وبأدوات قليلة.

للتدفقات الثانوية الأطول، استخدم Drawer. للوحة خفيفة مثبتة على أداة، استخدم Popover.

## Example: Confirmation dialog

```tsx
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  ModalClose,
  Button,
} from '@dev-dga/react';

const Info = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" strokeLinecap="round" />
  </svg>
);

export default function Demo() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button>افتح النافذة</Button>
      </ModalTrigger>
      <ModalContent closeLabel="إغلاق">
        <ModalHeader icon={<Info />}>
          <ModalTitle>نشر مجموعة البيانات هذه؟</ModalTitle>
        </ModalHeader>
        <ModalBody>
          بمجرد نشرها، تصبح مجموعة البيانات مرئية على بوابة البيانات المفتوحة الوطنية. يمكنك إلغاء
          نشرها في أي وقت.
        </ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline">إلغاء</Button>
          </ModalClose>
          <ModalClose asChild>
            <Button>نشر</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
```

## Accessibility

يعتمد Modal على حوار Radix، ويعرض `role="dialog"` مع `aria-modal`. يحصر الحوار التركيز ما دام مفتوحاً، ويغلق بمفتاح Escape. عند الإغلاق، يعيد التركيز إلى المشغل. يربط Modal الحوار بـ `ModalTitle` و`ModalDescription`، ليعلن قارئ الشاشة اسمه وغرضه.

يستخدم زر الإغلاق `closeLabel` اسماً متاحاً، وترث الطبقة الاتجاه والسمة من المزود.
