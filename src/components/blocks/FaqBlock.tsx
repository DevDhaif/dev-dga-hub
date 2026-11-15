'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m7 9 5 3.5L17 9" />
    </svg>
  );
}

export function FaqBlock() {
  const { c } = useCopy();
  const f = c.blocks.faq;

  return (
    <div className="block-faq">
      <header className="block-faq__header">
        <h2 className="block-faq__title">{f.title}</h2>
        <p className="block-faq__lead">{f.lead}</p>
      </header>

      <div className="block-faq__section">
        <Accordion type="single" collapsible>
          {f.items.map((it, i) => (
            <AccordionItem key={it.q} value={`faq-${i}`}>
              <AccordionTrigger>{it.q}</AccordionTrigger>
              <AccordionContent>{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="block-faq__section">
        <Card>
          <CardHeader>
            <CardIcon featured>
              <MailIcon />
            </CardIcon>
            <CardTitle>{f.contactTitle}</CardTitle>
            <CardDescription>{f.contactLead}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild size="lg">
              <a href="#">{f.contactAction}</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export const faqCode = `import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
  Button, Card, CardDescription, CardFooter, CardHeader, CardIcon, CardTitle,
} from '@dev-dga/react';

const items = [
  { q: 'What do I need to sign in?', a: 'A verified Nafath account and a registered mobile number.' },
  { q: 'How long does an application take?', a: 'Most services are processed within two business days.' },
  { q: 'Can I use it in Arabic and English?', a: 'Yes. The platform is bilingual and right-to-left native.' },
];

export function FaqPage() {
  return (
    <>
      <header className="faq__header">
        <h1>FAQs</h1>
        <p>Find answers to common questions about our services, accounts, and requests.</p>
      </header>

      <section className="faq__section">
        <Accordion type="single" collapsible>
          {items.map((it, i) => (
            <AccordionItem key={it.q} value={\`faq-\${i}\`}>
              <AccordionTrigger>{it.q}</AccordionTrigger>
              <AccordionContent>{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="faq__section">
        <Card>
          <CardHeader>
            <CardIcon featured><MailIcon /></CardIcon>
            <CardTitle>Comments & suggestions</CardTitle>
            <CardDescription>
              For any inquiry or feedback on government services, fill in the required information.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild size="lg"><a href="/contact">Contact us</a></Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}

/* faq.css: DGA FAQ template spacing (40 / 80) and the SA-25 page header.
.faq__header, .faq__section { padding: var(--ddga-space-10) var(--ddga-space-20); }
.faq__header { display: grid; gap: var(--ddga-space-4); background: var(--ddga-brand-25); }
.faq__header h1 { margin: 0; font-size: var(--ddga-font-size-display-lg); line-height: var(--ddga-font-line-height-display-lg); font-weight: 600; }
.faq__header p { margin: 0; }
*/`;
