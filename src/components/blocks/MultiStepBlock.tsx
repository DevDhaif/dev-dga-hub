'use client';

import { useState } from 'react';
import {
  Button,
  Card,
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
  const { c, locale } = useCopy();
  const w = c.blocks.wizard;
  const d = c.blocks.demo;
  const svc = c.masar.table.services;
  const [current, setCurrent] = useState(0);
  const last = w.steps.length - 1;
  const stepLabel =
    locale === 'ar'
      ? `الخطوة ${current + 1} من ${w.steps.length}`
      : `Step ${current + 1} of ${w.steps.length}`;

  const stepState = (i: number): StepState =>
    i < current ? 'completed' : i === current ? 'current' : 'upcoming';

  return (
    <Card variant="elevated" padding="lg" className="block-wizard">
      <div className="block-wizard__head">
        <h3 className="block-wizard__title">{w.title}</h3>
        <span className="block-wizard__step">{stepLabel}</span>
      </div>

      <div className="block-wizard__steps">
        <ProgressIndicator
          orientation="horizontal"
          appearance="circles"
          className="block-wizard__progress"
        >
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
      </div>

      <div className="block-wizard__panel">
        {current === 0 && (
          <div className="block-wizard__grid">
            <TextInput label={d.fullName} required />
            <TextInput label={d.nationalId} inputMode="numeric" placeholder="1XXXXXXXXX" dir="ltr" />
            <TextInput label={d.email} type="email" placeholder="name@gov.sa" dir="ltr" />
          </div>
        )}
        {current === 1 && (
          <div className="block-wizard__stack">
            <Select label={d.serviceType} placeholder={d.selectService} required>
              <SelectItem value="registration">{svc.registration}</SelectItem>
              <SelectItem value="permit">{svc.permit}</SelectItem>
              <SelectItem value="license">{svc.license}</SelectItem>
            </Select>
            <Textarea label={d.details} rows={4} />
          </div>
        )}
        {current === 2 && (
          <div className="block-wizard__review">
            <p>{c.blocks.states.confirmDesc}</p>
          </div>
        )}
      </div>

      <div className="block-wizard__actions">
        <Button
          variant="outline"
          disabled={current === 0}
          onClick={() => setCurrent((v) => Math.max(0, v - 1))}
        >
          {w.back}
        </Button>
        <Button onClick={() => setCurrent((v) => Math.min(last, v + 1))}>
          {current === last ? w.submit : w.next}
        </Button>
      </div>
    </Card>
  );
}

export const multiStepCode = `import { useState } from 'react';
import {
  Button, Card, ProgressIndicator, Select, SelectItem,
  Step, StepContent, StepDescription, StepIndicator, StepTitle, TextInput, Textarea,
} from '@dev-dga/react';

const steps = [
  { title: 'Applicant', desc: 'Who is applying' },
  { title: 'Details', desc: 'About the request' },
  { title: 'Review', desc: 'Confirm and submit' },
];

export function MultiStepApplication() {
  const [current, setCurrent] = useState(0);
  const last = steps.length - 1;
  const state = (i) => (i < current ? 'completed' : i === current ? 'current' : 'upcoming');

  return (
    <Card variant="elevated" padding="lg">
      <ProgressIndicator appearance="circles">
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

      {current === 0 && (
        <div style={{ display: 'grid', gap: '1rem' }}>
          <TextInput label="Full name" required />
          <TextInput label="National ID" inputMode="numeric" />
          <TextInput label="Email" type="email" />
        </div>
      )}
      {current === 1 && (
        <div style={{ display: 'grid', gap: '1rem' }}>
          <Select label="Service type" placeholder="Select a service">
            <SelectItem value="registration">Commercial registration</SelectItem>
          </Select>
          <Textarea label="Request details" rows={4} />
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
        <Button variant="outline" disabled={current === 0} onClick={() => setCurrent((v) => v - 1)}>
          Back
        </Button>
        <Button onClick={() => setCurrent((v) => Math.min(last, v + 1))}>
          {current === last ? 'Submit request' : 'Continue'}
        </Button>
      </div>
    </Card>
  );
}`;
