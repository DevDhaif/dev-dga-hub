'use client';

import {
  InlineAlert,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { GuideCode, GuideLayout, GuideSection, codeDir } from './GuideLayout';

const NATIVE_CODE = `<form
  onSubmit={(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.get('fullName'); // "Noura"
    data.get('visitDate'); // "2026-10-20"
    data.getAll('skills'); // ["react", "laravel"]
  }}
>
  <TextInput label="Full name" name="fullName" required />
  <DatePicker label="Visit date" name="visitDate" required />
  <TagInput label="Skills" name="skills" />
  <Button type="submit">Submit</Button>
</form>`;

const ARRAYS_CODE = `// Next.js server action or React Router action
formData.getAll('skills'); // ["react", "laravel"]

// Laravel reads arrays only from names ending in []
<TagInput label="Skills" name="skills[]" />
<Dropdown multiple label="Cities" name="cities[]">…</Dropdown>
// Laravel: $request->validate(['skills' => ['array'], 'skills.*' => ['string']]);`;

const INERTIA_CODE = `import { Form } from '@inertiajs/react';
import { Button, DatePicker, Select, SelectItem, TextInput, parseDateOnly } from '@dev-dga/react';

export default function EditVisit({ visit }: { visit: Visit }) {
  return (
    <Form action={\`/visits/\${visit.id}\`} method="put">
      {({ errors, processing }) => (
        <>
          <TextInput
            label="Name"
            name="name"
            defaultValue={visit.name}
            error={!!errors.name}
            errorMessage={errors.name}
          />
          <Select label="City" name="city" defaultValue={visit.city} error={!!errors.city} errorMessage={errors.city}>
            <SelectItem value="riyadh">Riyadh</SelectItem>
            <SelectItem value="jeddah">Jeddah</SelectItem>
          </Select>
          <DatePicker
            label="Visit date"
            name="date"
            defaultValue={visit.date ? parseDateOnly(visit.date) : null}
            error={!!errors.date}
            errorMessage={errors.date}
          />
          <Button type="submit" disabled={processing}>
            Save
          </Button>
        </>
      )}
    </Form>
  );
}`;

const ROUTER_CODE = `import { Form, useActionData, type ActionFunctionArgs } from 'react-router';
import { Button, DatePicker } from '@dev-dga/react';

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const date = data.get('date'); // "2026-10-20", or "" when empty
  if (!date) return { errors: { date: 'Pick a visit date.' } };
  // save…
  return { errors: {} };
}

export default function NewVisit() {
  const result = useActionData<typeof action>();
  return (
    <Form method="post">
      <DatePicker
        label="Visit date"
        name="date"
        error={!!result?.errors.date}
        errorMessage={result?.errors.date}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
}`;

const ACTIONS_CODE = `// app/visits/actions.ts
'use server';

type State = { errors: { date?: string } };

export async function saveVisit(_prev: State, formData: FormData): Promise<State> {
  const date = formData.get('date');
  if (typeof date !== 'string' || date === '') return { errors: { date: 'Pick a visit date.' } };
  // save…
  return { errors: {} };
}

// app/visits/visit-form.tsx
'use client';

import { useActionState } from 'react';
import { Button, DatePicker } from '@dev-dga/react';
import { saveVisit } from './actions';

export function VisitForm() {
  const [state, formAction, pending] = useActionState(saveVisit, { errors: {} });
  return (
    <form action={formAction}>
      <DatePicker
        label="Visit date"
        name="date"
        error={!!state.errors.date}
        errorMessage={state.errors.date}
      />
      <Button type="submit" disabled={pending}>
        Save
      </Button>
    </form>
  );
}`;

const ERRORS_CODE = `<TextInput
  label="National ID"
  name="nationalId"
  error={!!errors.nationalId}
  errorMessage={errors.nationalId}
/>
<Dropdown label="City" name="city" error={!!errors.city} errorMessage={errors.city}>
  …
</Dropdown>`;

const DATES_CODE = `import { DatePicker, parseDateOnly } from '@dev-dga/react';

// visit.date arrives as "2026-10-20" (or null)
const visitDate = visit.date ? parseDateOnly(visit.date) : null;

<DatePicker label="Visit date" name="visitDate" defaultValue={visitDate} />;

// Avoid: new Date(visit.date) parses as UTC and shows October 19 west of UTC.`;

export function FormsGuide() {
  const { c } = useCopy();
  const t = c.formsPage;

  const toc = [
    { id: 'contract', title: t.contract.title },
    { id: 'arrays', title: t.arrays.title },
    { id: 'native', title: t.native.title },
    { id: 'inertia', title: t.inertia.title },
    { id: 'react-router', title: t.router.title },
    { id: 'server-actions', title: t.actions.title },
    { id: 'errors', title: t.errors.title },
    { id: 'dates', title: t.dates.title },
  ];

  return (
    <GuideLayout
      eyebrow={t.eyebrow}
      title={t.title}
      lead={t.lead}
      onThisPage={t.onThisPage}
      toc={toc}
    >
      <InlineAlert type="info" title={t.version} />

      <GuideSection id="contract" title={t.contract.title}>
        <p className="doc-lead">{t.contract.lead}</p>
        <Table aria-label={t.contract.title} className="doc-table guide-table">
          <TableHeader>
            <TableRow>
              <TableHead>{t.contract.cols.control}</TableHead>
              <TableHead>{t.contract.cols.submits}</TableHead>
              <TableHead>{t.contract.cols.notes}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {t.contract.rows.map((row) => (
              <TableRow key={row.control}>
                <TableCell>
                  <code className="doc-code" dir={codeDir(row.control)}>
                    {row.control}
                  </code>
                </TableCell>
                <TableCell>{row.submits}</TableCell>
                <TableCell>{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </GuideSection>

      <GuideSection id="arrays" title={t.arrays.title}>
        <p className="doc-lead">{t.arrays.lead}</p>
        <GuideCode label="arrays.tsx" lang="tsx" code={ARRAYS_CODE} />
      </GuideSection>

      <GuideSection id="native" title={t.native.title}>
        <p className="doc-lead">{t.native.lead}</p>
        <GuideCode label="ProfileForm.tsx" lang="tsx" code={NATIVE_CODE} />
      </GuideSection>

      <GuideSection id="inertia" title={t.inertia.title}>
        <p className="doc-lead">{t.inertia.lead}</p>
        <GuideCode label="EditVisit.tsx" lang="tsx" code={INERTIA_CODE} />
        <p className="doc-note">{t.inertia.note}</p>
      </GuideSection>

      <GuideSection id="react-router" title={t.router.title}>
        <p className="doc-lead">{t.router.lead}</p>
        <GuideCode label="routes/visits.new.tsx" lang="tsx" code={ROUTER_CODE} />
      </GuideSection>

      <GuideSection id="server-actions" title={t.actions.title}>
        <p className="doc-lead">{t.actions.lead}</p>
        <GuideCode label="app/visits" lang="tsx" code={ACTIONS_CODE} />
      </GuideSection>

      <GuideSection id="errors" title={t.errors.title}>
        <p className="doc-lead">{t.errors.lead}</p>
        <GuideCode label="errors.tsx" lang="tsx" code={ERRORS_CODE} />
        <p className="doc-note">{t.errors.note}</p>
      </GuideSection>

      <GuideSection id="dates" title={t.dates.title}>
        <p className="doc-lead">{t.dates.lead}</p>
        <GuideCode label="dates.tsx" lang="tsx" code={DATES_CODE} />
      </GuideSection>
    </GuideLayout>
  );
}
