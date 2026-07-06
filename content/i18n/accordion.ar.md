---
description: 'أقسام قابلة للطي لتجميع المحتوى.'
---

يجمع Accordion المحتوى في أقسام قابلة للتوسيع. استخدم `type="single"` لفتح قسم واحد في كل مرة، أو `type="multiple"` لفتح عدة أقسام معًا.

## Example: FAQ (single)

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@dev-dga/react';

export default function Demo() {
  return (
    <Accordion type="single" collapsible style={{ inlineSize: 480, maxWidth: '100%' }}>
      <AccordionItem value="eligibility">
        <AccordionTrigger>من المؤهّل للتقديم؟</AccordionTrigger>
        <AccordionContent>
          أي مواطن أو مقيم يبلغ 18 عامًا أو أكثر ويحمل هوية وطنية سارية.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="documents">
        <AccordionTrigger>ما المستندات التي أحتاجها؟</AccordionTrigger>
        <AccordionContent>
          هوية وطنية وإثبات عنوان حديث. وقد تُطلب مستندات إضافية أثناء
          المراجعة.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="time">
        <AccordionTrigger>كم يستغرق تنفيذ الطلب؟</AccordionTrigger>
        <AccordionContent>
          تُراجَع معظم الطلبات خلال 3–5 أيام عمل.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

## Example: Multiple open

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@dev-dga/react';

export default function Demo() {
  return (
    <Accordion
      type="multiple"
      defaultValue={['personal', 'contact']}
      style={{ inlineSize: 480, maxWidth: '100%' }}
    >
      <AccordionItem value="personal">
        <AccordionTrigger>المعلومات الشخصية</AccordionTrigger>
        <AccordionContent>الاسم وتاريخ الميلاد ورقم الهوية الوطنية.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="contact">
        <AccordionTrigger>بيانات التواصل</AccordionTrigger>
        <AccordionContent>البريد الإلكتروني ورقم الجوال والعنوان البريدي.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="attachments">
        <AccordionTrigger>المرفقات</AccordionTrigger>
        <AccordionContent>المستندات الداعمة التي رفعتها.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```
