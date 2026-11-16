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
  ProgressIndicator,
  Select,
  SelectItem,
  Step,
  StepContent,
  StepDescription,
  StepIndicator,
  StepTitle,
  TextInput,
  Textarea,
  type StepState,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

export function MultiStepBlock() {
  const { c } = useCopy();
  const w = c.blocks.wizard;
  const d = c.blocks.demo;
  const svc = c.masar.table.services;
  const [current, setCurrent] = useState(0);
  const last = w.steps.length - 1;

  const stepState = (i: number): StepState =>
    i < current ? 'completed' : i === current ? 'current' : 'upcoming';

  return (
    <section className="block-wizard">
      <div className="block-wizard__form">
        <div className="block-wizard__intro">
          <Breadcrumb aria-label={w.crumbLabel}>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{w.home}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{w.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="block-wizard__heading">
            <h2 className="block-wizard__title">{w.title}</h2>
            <p className="block-wizard__lead">{w.lead}</p>
          </div>
          <p className="block-wizard__required">{w.required}</p>
        </div>

        {current === 0 && (
          <div className="block-wizard__grid">
            <TextInput label={d.fullName} required />
            <TextInput
              label={d.nationalId}
              required
              inputMode="numeric"
              placeholder="1XXXXXXXXX"
              dir="ltr"
            />
            <TextInput label={d.email} type="email" placeholder="name@example.com" dir="ltr" />
          </div>
        )}
        {current === 1 && (
          <div className="block-wizard__grid">
            <Select label={d.serviceType} placeholder={d.selectService} required>
              <SelectItem value="registration">{svc.registration}</SelectItem>
              <SelectItem value="permit">{svc.permit}</SelectItem>
              <SelectItem value="license">{svc.license}</SelectItem>
            </Select>
            <Textarea label={d.details} rows={4} />
          </div>
        )}
        {current === 2 && <p className="block-wizard__review">{c.blocks.states.confirmDesc}</p>}

        <div className="block-wizard__actions">
          <Button
            variant="outline"
            size="lg"
            disabled={current === 0}
            onClick={() => setCurrent((v) => Math.max(0, v - 1))}
          >
            {w.back}
          </Button>
          <Button size="lg" onClick={() => setCurrent((v) => Math.min(last, v + 1))}>
            {current === last ? w.submit : w.next}
          </Button>
        </div>
      </div>

      <aside className="block-wizard__progress">
        <ProgressIndicator orientation="vertical">
          {w.steps.map((s, i) => (
            <Step key={s.title} state={stepState(i)}>
              <StepIndicator step={i + 1} />
              <StepContent>
                <StepTitle>{s.title}</StepTitle>
                <StepDescription>{s.desc}</StepDescription>
              </StepContent>
            </Step>
          ))}
        </ProgressIndicator>
      </aside>
    </section>
  );
}

export const multiStepCode = `import { useState } from 'react';
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
  Button, ProgressIndicator, Select, SelectItem,
  Step, StepContent, StepDescription, StepIndicator, StepTitle, TextInput, Textarea,
} from '@dev-dga/react';

const steps = [
  { title: 'Applicant', desc: 'Who is applying' },
  { title: 'Details', desc: 'About the request' },
  { title: 'Review', desc: 'Confirm and submit' },
];

export function MultiStepForm() {
  const [current, setCurrent] = useState(0);
  const last = steps.length - 1;
  const state = (i) => (i < current ? 'completed' : i === current ? 'current' : 'upcoming');

  return (
    <section className="form-page">
      <div className="form-page__form">
        <Breadcrumb aria-label="Breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>New service request</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>New service request</h1>
        <p>Fill in the applicant details, then describe your request.</p>
        <p className="form-page__required">*Required information</p>

        {current === 0 && (
          <div className="form-page__grid">
            <TextInput label="Full name" required />
            <TextInput label="National ID" required inputMode="numeric" placeholder="1XXXXXXXXX" />
            <TextInput label="Email" type="email" placeholder="name@example.com" />
          </div>
        )}
        {current === 1 && (
          <div className="form-page__grid">
            <Select label="Service type" placeholder="Select a service" required>
              <SelectItem value="registration">Commercial registration</SelectItem>
            </Select>
            <Textarea label="Request details" rows={4} />
          </div>
        )}

        <div className="form-page__actions">
          <Button variant="outline" size="lg" disabled={current === 0} onClick={() => setCurrent((v) => v - 1)}>
            Back
          </Button>
          <Button size="lg" onClick={() => setCurrent((v) => Math.min(last, v + 1))}>
            {current === last ? 'Submit request' : 'Next'}
          </Button>
        </div>
      </div>

      <aside className="form-page__progress">
        <ProgressIndicator orientation="vertical">
          {steps.map((s, i) => (
            <Step key={s.title} state={state(i)}>
              <StepIndicator step={i + 1} />
              <StepContent>
                <StepTitle>{s.title}</StepTitle>
                <StepDescription>{s.desc}</StepDescription>
              </StepContent>
            </Step>
          ))}
        </ProgressIndicator>
      </aside>
    </section>
  );
}

/* form-page.css: DGA Form template, form 2fr beside a gray-50 progress panel 1fr.
.form-page { display: grid; grid-template-columns: 2fr 1fr; gap: var(--ddga-space-8); align-items: start; }
.form-page__form { display: grid; gap: var(--ddga-space-8); }
.form-page__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ddga-space-6); }
.form-page__required { color: var(--ddga-text-error); font-size: var(--ddga-font-size-sm); }
.form-page__actions { display: flex; gap: var(--ddga-space-6); }
.form-page__progress { padding: var(--ddga-space-10); border-radius: var(--ddga-radius-lg); background: var(--ddga-gray-50); }
*/`;
