---
title: Accordion
slug: accordion
category: Navigation
status: stable
description: 'Collapsible sections for grouping content.'
---

Accordion groups content into expandable sections. Use `type="single"` to open one at a time, or `type="multiple"` to keep several open.

## Example: FAQ (single)

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@dev-dga/react';

export default function Demo() {
  return (
    <Accordion type="single" collapsible style={{ inlineSize: 480, maxWidth: '100%' }}>
      <AccordionItem value="eligibility">
        <AccordionTrigger>Who is eligible to apply?</AccordionTrigger>
        <AccordionContent>
          Any citizen or resident aged 18 or older who holds a valid national ID.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="documents">
        <AccordionTrigger>What documents do I need?</AccordionTrigger>
        <AccordionContent>
          A national ID and a recent proof of address. Additional documents may be requested during
          review.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="time">
        <AccordionTrigger>How long does processing take?</AccordionTrigger>
        <AccordionContent>
          Most applications are reviewed within 3–5 business days.
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
        <AccordionTrigger>Personal information</AccordionTrigger>
        <AccordionContent>Name, date of birth, and national ID number.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="contact">
        <AccordionTrigger>Contact details</AccordionTrigger>
        <AccordionContent>Email, mobile number, and mailing address.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="attachments">
        <AccordionTrigger>Attachments</AccordionTrigger>
        <AccordionContent>Supporting documents you have uploaded.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

## Example: Arabic (RTL)

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@dev-dga/react';

export default function Demo() {
  return (
    <Accordion type="single" collapsible style={{ inlineSize: 480, maxWidth: '100%' }}>
      <AccordionItem value="ship">
        <AccordionTrigger>كم يستغرق تنفيذ الطلب؟</AccordionTrigger>
        <AccordionContent>تُنفّذ معظم الطلبات خلال 3-5 أيام عمل.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="return">
        <AccordionTrigger>كيف أتابع حالة طلبي؟</AccordionTrigger>
        <AccordionContent>يمكنك متابعة الحالة من صفحة «طلباتي» في حسابك.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```
