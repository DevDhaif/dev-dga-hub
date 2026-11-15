'use client';

import { useState } from 'react';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  FileUpload,
  Link,
  TextInput,
  TextInputDropdown,
  Textarea,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { fmt } from './block-format';

const MAX_UPLOAD_BYTES = 2 * 1024 * 1024;

const ICONS: Record<string, string> = {
  phone:
    'M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  sms: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12Z|M8 12h.01M12 12h.01M16 12h.01',
  email: 'M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z|m3 7 9 6 9-6',
  fax: 'M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z|m3 7 9 6 9-6',
  location:
    'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z|M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5',
  copy: 'M9 9h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1Z|M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1',
  check: 'm5 12.5 4.5 4.5L19 7.5',
  link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1|M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  x: 'M4 4l16 16M20 4 4 20',
  linkedin:
    'M4 9h3.5v11H4Z|M5.75 4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z|M10 9h3.3v1.6c.5-.9 1.7-1.8 3.4-1.8 3 0 3.8 2 3.8 4.7V20H17v-5.6c0-1.4-.3-2.6-1.8-2.6s-1.7 1.1-1.7 2.5V20H10Z',
  instagram:
    'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z|M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z|M17.5 6.5h.01',
};

const HREF: Record<string, (v: string) => string> = {
  phone: (v) => `tel:${v}`,
  sms: (v) => `sms:${v}`,
  email: (v) => `mailto:${v}`,
  fax: (v) => `tel:${v}`,
};

const SOCIAL = [
  { kind: 'x', name: 'X' },
  { kind: 'linkedin', name: 'LinkedIn' },
  { kind: 'instagram', name: 'Instagram' },
];

function Glyph({ kind, className }: { kind: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      {(ICONS[kind] ?? '').split('|').map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

function CopyButton({
  value,
  label,
  copiedLabel,
}: {
  value: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <>
      <Button variant="ghost" size="icon-xs" aria-label={label} onClick={copy}>
        <Glyph kind={copied ? 'check' : 'copy'} className="block-contact__copy" />
      </Button>
      <span role="status" className="ddga-sr-only">
        {copied ? copiedLabel : ''}
      </span>
    </>
  );
}

export function ServiceFormBlock() {
  const { c } = useCopy();
  const f = c.blocks.contact;
  const [country, setCountry] = useState(f.countries[0].code);
  const [pickerOpen, setPickerOpen] = useState(false);

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
              startAdornment={
                <DropdownMenu open={pickerOpen} onOpenChange={setPickerOpen}>
                  <DropdownMenuTrigger asChild>
                    <TextInputDropdown
                      variant="subtle"
                      selected={pickerOpen}
                      aria-label={`${f.countryCode}: ${country}`}
                      dir="ltr"
                    >
                      {country}
                    </TextInputDropdown>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuRadioGroup value={country} onValueChange={setCountry}>
                      {f.countries.map((ct) => (
                        <DropdownMenuRadioItem key={ct.code} value={ct.code}>
                          {ct.name} <bdi dir="ltr">{ct.code}</bdi>
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              }
            />
            <input type="hidden" name="countryCode" value={country} />
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
              <Glyph kind={ch.kind} className="block-contact__icon" />
              <div className="block-contact__channel-text">
                <span className="block-contact__label">{ch.label}</span>
                <span className="block-contact__value">
                  {HREF[ch.kind] ? (
                    <>
                      <Link href={HREF[ch.kind](ch.value)} dir="ltr">
                        {ch.value}
                      </Link>
                      <CopyButton
                        value={ch.value}
                        label={fmt(f.copy, { label: ch.label })}
                        copiedLabel={fmt(f.copied, { label: ch.label })}
                      />
                    </>
                  ) : (
                    <Link href="#">
                      {ch.value}
                      <Glyph kind="link" className="block-contact__link-icon" />
                    </Link>
                  )}
                </span>
              </div>
            </div>
          ))}
          <h3 className="block-contact__subtitle">{f.followTitle}</h3>
          <div className="block-contact__social">
            {SOCIAL.map((sn) => (
              <Button key={sn.kind} asChild variant="ghost" size="icon-md">
                <a href="#" aria-label={sn.name}>
                  <Glyph kind={sn.kind} />
                </a>
              </Button>
            ))}
          </div>
          <Divider />
          <h3 className="block-contact__subtitle">{f.emergencyTitle}</h3>
          {f.emergency.map((e) => (
            <div key={e.value} className="block-contact__emergency">
              <span className="block-contact__label">{e.label}</span>
              <Link href={`tel:${e.value}`}>{e.value}</Link>
              <CopyButton
                value={e.value}
                label={fmt(f.copy, { label: e.label })}
                copiedLabel={fmt(f.copied, { label: e.label })}
              />
            </div>
          ))}
          <Link href="#" className="block-contact__more">
            {f.viewMore}
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}

export const serviceFormCode = `import { useState } from 'react';
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
  Button, Card, CardContent, CardHeader, CardTitle, Divider, Dropdown, DropdownItem,
  DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger,
  FileUpload, Link, TextInput, TextInputDropdown, Textarea,
} from '@dev-dga/react';

export function ContactUs() {
  const [country, setCountry] = useState('+966');

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
              startAdornment={
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <TextInputDropdown variant="subtle" aria-label={\`Country code: \${country}\`}>{country}</TextInputDropdown>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuRadioGroup value={country} onValueChange={setCountry}>
                      <DropdownMenuRadioItem value="+966">Saudi Arabia +966</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="+971">United Arab Emirates +971</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              }
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
