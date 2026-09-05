---
title: Accordion
slug: accordion
category: Navigation
status: stable
description: 'Accessible React accordion built on Radix with single or multiple open sections, collapsible mode, sizes, icon alignment, and a flush style. RTL ready.'
seoTitle: 'Accordion: accessible React accordion (Radix)'
---

Accordion groups content into expandable sections. Use `type="single"` to open one at a time, or `type="multiple"` to keep several open.

## When to use

Use Accordion for FAQs, requirement lists, and long forms that users scan section by section. Use `type="single"` when one open section keeps the page short, and `type="multiple"` when users compare sections.

If every section must be read, use headings and plain content instead. For a single show-hide region, use Collapsible.

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

## Accessibility

Each trigger is a button with `aria-expanded` and `aria-controls`, and each panel is a region named by its trigger. The arrow keys move between triggers and Home and End jump to the first and last.

Headings inside triggers keep the document outline usable. The chevron is decorative and flips with the open state.
