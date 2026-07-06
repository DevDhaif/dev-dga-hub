'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

export function FaqBlock() {
  const { c } = useCopy();
  const f = c.blocks.faq;

  return (
    <div className="block-faq">
      <div className="block-faq__intro">
        <h3 className="block-faq__title">{f.title}</h3>
        <p className="block-faq__lead">{f.lead}</p>
      </div>
      <Accordion type="single" collapsible defaultValue="faq-0" className="block-faq__list">
        {f.items.map((it, i) => (
          <AccordionItem key={it.q} value={`faq-${i}`}>
            <AccordionTrigger>{it.q}</AccordionTrigger>
            <AccordionContent>{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export const faqCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@dev-dga/react';

const items = [
  { q: 'What do I need to sign in?', a: 'A verified Nafath account and a registered mobile number.' },
  { q: 'How long does an application take?', a: 'Most services are processed within two business days.' },
  { q: 'Can I use it in Arabic and English?', a: 'Yes - the platform is bilingual and right-to-left native.' },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible defaultValue="faq-0">
      {items.map((it, i) => (
        <AccordionItem key={it.q} value={\`faq-\${i}\`}>
          <AccordionTrigger>{it.q}</AccordionTrigger>
          <AccordionContent>{it.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}`;
