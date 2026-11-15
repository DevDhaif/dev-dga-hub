'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Divider,
  Dropdown,
  DropdownItem,
  FileUpload,
  Link,
  TextInput,
  TextInputAffix,
  Textarea,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

const MAX_UPLOAD_BYTES = 2 * 1024 * 1024;

const CHANNEL_ICONS: Record<string, string> = {
  phone:
    'M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  sms: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12Z|M8 12h.01M12 12h.01M16 12h.01',
  email: 'M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z|m3 7 9 6 9-6',
  location:
    'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z|M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5',
};

const HREF: Record<string, (v: string) => string> = {
  phone: (v) => `tel:${v}`,
  sms: (v) => `sms:${v}`,
  email: (v) => `mailto:${v}`,
  location: () => '#',
};

function ChannelIcon({ kind }: { kind: string }) {
  return (
    <svg
      className="block-contact__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {(CHANNEL_ICONS[kind] ?? '').split('|').map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

export function ServiceFormBlock() {
  const { c } = useCopy();
  const f = c.blocks.contact;

  return (
    <section className="block-contact">
      <div className="block-contact__main">
        <div className="block-contact__intro">
          <Breadcrumb aria-label={f.crumbLabel}>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{f.home}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{f.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h2 className="block-contact__title">{f.title}</h2>
          <p className="block-contact__lead">{f.lead}</p>
        </div>

        <form className="block-contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="block-contact__grid">
            <TextInput
              name="firstName"
              label={f.firstName}
              placeholder={f.firstNamePh}
              autoComplete="given-name"
              required
              variant="filled-darker"
            />
            <TextInput
              name="lastName"
              label={f.lastName}
              placeholder={f.lastNamePh}
              autoComplete="family-name"
              required
              variant="filled-darker"
            />
            <TextInput
              name="email"
              type="email"
              label={f.email}
              placeholder="name@example.com"
              autoComplete="email"
              dir="ltr"
              required
              variant="filled-darker"
            />
            <TextInput
              name="phone"
              type="tel"
              label={f.phone}
              placeholder="5X XXX XXXX"
              autoComplete="tel-national"
              dir="ltr"
              required
              variant="filled-darker"
              startAdornment={<TextInputAffix dir="ltr">+966</TextInputAffix>}
            />
            <TextInput
              name="subject"
              label={f.subject}
              placeholder={f.subjectPh}
              variant="filled-darker"
            />
            <Dropdown name="category" label={f.category} defaultValue="0" variant="filled-darker">
              {f.categories.map((name, i) => (
                <DropdownItem key={name} value={String(i)}>
                  {name}
                </DropdownItem>
              ))}
            </Dropdown>
            <Textarea
              name="message"
              label={f.message}
              placeholder={f.messagePh}
              rows={3}
              variant="filled-darker"
            />
            <FileUpload
              variant="button"
              multiple={false}
              label={f.upload}
              description={f.uploadHint}
              buttonLabel={f.browse}
              accept=".jpg,.jpeg,.png,.pdf"
              maxSize={MAX_UPLOAD_BYTES}
            />
          </div>
          <div>
            <Button type="submit" size="lg">
              {f.submit}
            </Button>
          </div>
        </form>
      </div>

      <Card padding="lg" className="block-contact__card">
        <CardHeader>
          <CardTitle>{f.cardTitle}</CardTitle>
        </CardHeader>
        <CardContent className="block-contact__channels">
          {f.channels.map((ch) => (
            <div key={ch.kind} className="block-contact__channel">
              <ChannelIcon kind={ch.kind} />
              <div className="block-contact__channel-text">
                <span className="block-contact__label">{ch.label}</span>
                <Link href={HREF[ch.kind]?.(ch.value) ?? '#'} dir="auto">
                  {ch.value}
                </Link>
              </div>
            </div>
          ))}
          <Divider />
          <h3 className="block-contact__subtitle">{f.emergencyTitle}</h3>
          {f.emergency.map((e) => (
            <div key={e.value} className="block-contact__emergency">
              <span className="block-contact__label">{e.label}</span>
              <Link href={`tel:${e.value}`}>{e.value}</Link>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

export const serviceFormCode = `import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
  Button, Card, CardContent, CardHeader, CardTitle, Divider, Dropdown, DropdownItem,
  FileUpload, Link, TextInput, TextInputAffix, Textarea,
} from '@dev-dga/react';

export function ContactUs() {
  return (
    <section className="contact">
      <div className="contact__main">
        <Breadcrumb aria-label="Breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Contact us</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>Contact us</h1>
        <p>Send us a question, a suggestion, or a complaint about any of our services.</p>

        <form action="/contact" method="post" className="contact__form">
          <div className="contact__grid">
            <TextInput name="firstName" label="First name" required variant="filled-darker" />
            <TextInput name="lastName" label="Last name" required variant="filled-darker" />
            <TextInput name="email" type="email" label="Email" required variant="filled-darker" />
            <TextInput
              name="phone"
              type="tel"
              label="Phone"
              required
              variant="filled-darker"
              startAdornment={<TextInputAffix dir="ltr">+966</TextInputAffix>}
            />
            <TextInput name="subject" label="Subject" variant="filled-darker" />
            <Dropdown name="category" label="Category" defaultValue="suggestion" variant="filled-darker">
              <DropdownItem value="suggestion">Suggestion</DropdownItem>
              <DropdownItem value="inquiry">Inquiry</DropdownItem>
              <DropdownItem value="complaint">Complaint</DropdownItem>
            </Dropdown>
            <Textarea name="message" label="How can we help?" rows={3} variant="filled-darker" />
            <FileUpload
              variant="button"
              multiple={false}
              label="Upload files"
              description="Maximum file size is 2 MB. Supported formats are .jpg, .png, and .pdf."
              buttonLabel="Browse files"
              accept=".jpg,.jpeg,.png,.pdf"
              maxSize={2 * 1024 * 1024}
            />
          </div>
          <Button type="submit" size="lg">Send message</Button>
        </form>
      </div>

      <Card padding="lg">
        <CardHeader><CardTitle>Contact the ministry</CardTitle></CardHeader>
        <CardContent>
          <p><strong>Phone</strong><br /><Link href="tel:920000000">920000000</Link></p>
          <p><strong>Email</strong><br /><Link href="mailto:help@example.com">help@example.com</Link></p>
          <Divider />
          <p><strong>Civil defense</strong> <Link href="tel:998">998</Link></p>
        </CardContent>
      </Card>
    </section>
  );
}

/* contact.css: DGA Contact Us template, form 2fr beside the contact card 1fr.
.contact { display: grid; grid-template-columns: 2fr 1fr; gap: var(--ddga-space-8); align-items: start; }
.contact__form { display: grid; gap: var(--ddga-space-8); justify-items: start; }
.contact__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ddga-space-6); inline-size: 100%; }
*/`;
