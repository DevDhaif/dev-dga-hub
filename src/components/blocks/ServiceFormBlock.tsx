'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  TextInput,
  Textarea,
} from '@dev-dga/react';
import { useCopy, type Locale } from '@/lib/i18n';

const SERVICES: Record<Locale, string[]> = {
  en: ['Commercial registration', 'Building permit', 'Trade license', 'Work permit renewal', 'Address update'],
  ar: ['سجل تجاري', 'رخصة بناء', 'رخصة تجارية', 'تجديد رخصة عمل', 'تحديث العنوان'],
};
const REGIONS: Record<Locale, string[]> = {
  en: ['Riyadh', 'Makkah', 'Eastern Province', 'Madinah', 'Asir'],
  ar: ['الرياض', 'مكة المكرمة', 'المنطقة الشرقية', 'المدينة المنورة', 'عسير'],
};

export function ServiceFormBlock() {
  const { c, locale } = useCopy();
  const d = c.blocks.demo;

  return (
    <Card variant="elevated" padding="lg" className="block-form">
      <CardHeader>
        <CardTitle>{d.formTitle}</CardTitle>
        <CardDescription>{d.formLead}</CardDescription>
      </CardHeader>
      <CardContent className="block-form__body">
        <div className="block-form__grid">
          <TextInput label={d.fullName} required />
          <TextInput label={d.nationalId} required inputMode="numeric" placeholder="1XXXXXXXXX" dir="ltr" />
          <Select label={d.serviceType} placeholder={d.selectService} required>
            {SERVICES[locale].map((name, i) => (
              <SelectItem key={name} value={`svc-${i}`}>
                {name}
              </SelectItem>
            ))}
          </Select>
          <Select label={d.region} placeholder={d.selectRegion}>
            {REGIONS[locale].map((name, i) => (
              <SelectItem key={name} value={`reg-${i}`}>
                {name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <Textarea label={d.details} rows={4} />
        <RadioGroup label={d.delivery} defaultValue="digital" orientation="horizontal">
          <Radio value="digital" label={d.deliveryDigital} />
          <Radio value="courier" label={d.deliveryCourier} />
          <Radio value="pickup" label={d.deliveryPickup} />
        </RadioGroup>
        <Checkbox label={d.consent} />
      </CardContent>
      <CardFooter className="block-form__actions">
        <Button type="button">{d.submit}</Button>
        <Button type="button" variant="ghost">
          {d.reset}
        </Button>
      </CardFooter>
    </Card>
  );
}

export const serviceFormCode = `import {
  Button, Card, CardContent, CardDescription, CardFooter, CardHeader,
  CardTitle, Checkbox, Radio, RadioGroup, Select, SelectItem, TextInput, Textarea,
} from '@dev-dga/react';

export function ServiceApplication() {
  return (
    <Card variant="elevated" padding="lg">
      <CardHeader>
        <CardTitle>Apply for a service</CardTitle>
        <CardDescription>Fields marked with an asterisk are required.</CardDescription>
      </CardHeader>
      <CardContent style={{ display: 'grid', gap: '1.25rem' }}>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <TextInput label="Full name" required />
          <TextInput label="National ID" required inputMode="numeric" placeholder="1XXXXXXXXX" />
          <Select label="Service type" placeholder="Select a service" required>
            <SelectItem value="registration">Commercial registration</SelectItem>
            <SelectItem value="permit">Building permit</SelectItem>
            <SelectItem value="license">Trade license</SelectItem>
          </Select>
          <Select label="Region" placeholder="Select a region">
            <SelectItem value="riyadh">Riyadh</SelectItem>
            <SelectItem value="makkah">Makkah</SelectItem>
            <SelectItem value="eastern">Eastern Province</SelectItem>
          </Select>
        </div>
        <Textarea label="Request details" rows={4} />
        <RadioGroup label="Delivery method" defaultValue="digital" orientation="horizontal">
          <Radio value="digital" label="Digital" />
          <Radio value="courier" label="Courier" />
          <Radio value="pickup" label="Branch pickup" />
        </RadioGroup>
        <Checkbox label="I confirm the information provided is accurate." />
      </CardContent>
      <CardFooter style={{ display: 'flex', gap: '0.75rem' }}>
        <Button type="submit">Submit request</Button>
        <Button type="reset" variant="ghost">Reset</Button>
      </CardFooter>
    </Card>
  );
}`;
