---
description: 'نافذة حوار في منتصف الصفحة.'
---

يفتح Modal نافذة حوار من مشغل: رأس وجسم وتذييل إجراءات. يرث السمة والاتجاه من الموفر.

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
