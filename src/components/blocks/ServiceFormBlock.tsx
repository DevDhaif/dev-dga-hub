'use client';

import { useState, type ComponentType, type SVGProps } from 'react';
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
import {
  CallIcon,
  CheckmarkCircle04Icon,
  Copy01Icon,
  InstagramIcon,
  Link04Icon,
  Linkedin01Icon,
  Location01Icon,
  Mail01Icon,
  Message02Icon,
  NewTwitterIcon,
} from './dga-icons';

const MAX_UPLOAD_BYTES = 2 * 1024 * 1024;

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

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  phone: CallIcon,
  sms: Message02Icon,
  email: Mail01Icon,
  fax: Mail01Icon,
  location: Location01Icon,
  copy: Copy01Icon,
  check: CheckmarkCircle04Icon,
  link: Link04Icon,
  x: NewTwitterIcon,
  linkedin: Linkedin01Icon,
  instagram: InstagramIcon,
};

function Glyph({ kind, className }: { kind: string; className?: string }) {
  const Icon = ICONS[kind];
  return Icon ? <Icon className={className} focusable="false" /> : null;
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
