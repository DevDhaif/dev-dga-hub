'use client';

import { useId, useState, type FormEvent } from 'react';
import { Button, Checkbox, Link, Radio, RadioGroup, Textarea } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { CancelCircleIcon, CheckCircleIcon } from './block-icons';

type Answer = 'yes' | 'no' | null;

export function PageFeedbackBlock() {
  const { c } = useCopy();
  const f = c.blocks.pageFeedback;
  const a = c.blocks.agreement;
  const id = useId();
  const [answer, setAnswer] = useState<Answer>(null);
  const [done, setDone] = useState(false);

  const reasons = answer === 'no' ? f.noReasons : f.yesReasons;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };

  const question = (
    <div className="block-pfb__ask">
      <p id={`${id}-q`} className="block-pfb__question">
        {f.question}
      </p>
      <div className="block-pfb__answers" role="group" aria-labelledby={`${id}-q`}>
        <Button
          size="lg"
          aria-pressed={answer === 'yes'}
          aria-controls={answer ? `${id}-form` : undefined}
          onClick={() => setAnswer('yes')}
        >
          {f.yes}
        </Button>
        <Button
          size="lg"
          aria-pressed={answer === 'no'}
          aria-controls={answer ? `${id}-form` : undefined}
          onClick={() => setAnswer('no')}
        >
          {f.no}
        </Button>
      </div>
    </div>
  );

  return (
    <section className="block-pfb" aria-labelledby={`${id}-q`}>
      <p className="block-pfb__modified">{f.lastModified}</p>

      <div className="block-pfb__bar">
        {done ? (
          <div className="block-pfb__row">
            <p className="block-pfb__thanks" role="status">
              <CheckCircleIcon className="block-pfb__check" />
              <span id={`${id}-q`}>{f.thanks}</span>
            </p>
            <p className="block-pfb__stat">{f.stat}</p>
          </div>
        ) : answer === null ? (
          <div className="block-pfb__row">
            {question}
            <p className="block-pfb__stat">{f.stat}</p>
          </div>
        ) : (
          <form id={`${id}-form`} className="block-pfb__form" onSubmit={submit}>
            <div className="block-pfb__row">
              {question}
              <Button
                type="button"
                variant="ghost"
                size="lg"
                endIcon={<CancelCircleIcon />}
                onClick={() => setAnswer(null)}
              >
                {f.close}
              </Button>
            </div>

            <div className="block-pfb__fields">
              <fieldset className="block-pfb__reasons">
                <legend className="block-pfb__legend">{f.prompt}</legend>
                {reasons.map((reason) => (
                  <Checkbox key={reason} name="reason" value={reason} label={reason} />
                ))}
              </fieldset>
              <Textarea name="feedback" label={f.feedback} rows={3} />
            </div>

            <div className="block-pfb__gender">
              <span id={`${id}-gender`} className="block-pfb__legend">
                {f.gender}
              </span>
              <RadioGroup name="gender" orientation="horizontal" aria-labelledby={`${id}-gender`}>
                {f.genders.map((g) => (
                  <Radio key={g} value={g} label={g} />
                ))}
              </RadioGroup>
            </div>

            <div className="block-pfb__row">
              <p className="block-pfb__agreement">
                {a.before}{' '}
                <Link inline href="#">
                  {a.statement}
                </Link>{' '}
                {a.and}{' '}
                <Link inline href="#">
                  {a.rules}
                </Link>
                {a.after}
              </p>
              <Button type="submit" size="lg">
                {f.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export const pageFeedbackCode = `import { useState } from 'react';
import { Button, Checkbox, Link, Radio, RadioGroup, Textarea } from '@dev-dga/react';

const reasons = {
  yes: ['The content is relevant', 'It was well written', 'The layout made it easy to read', 'Something else'],
  no: ['The content isn’t relevant', 'The content isn’t accurate', 'The content is too long', 'Something else'],
};

export function PageFeedback() {
  const [answer, setAnswer] = useState(null); // null | 'yes' | 'no'
  const [done, setDone] = useState(false);

  if (done) return <p role="status">Your feedback is submitted.</p>;

  return (
    <section className="page-feedback">
      <p id="pf-q">Was this page useful?</p>
      <div role="group" aria-labelledby="pf-q">
        <Button size="lg" aria-pressed={answer === 'yes'} onClick={() => setAnswer('yes')}>Yes</Button>
        <Button size="lg" aria-pressed={answer === 'no'} onClick={() => setAnswer('no')}>No</Button>
      </div>

      {answer && (
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <Button type="button" variant="ghost" size="lg" onClick={() => setAnswer(null)}>Close</Button>
          <fieldset>
            <legend>Tell us why (you can select more than one)</legend>
            {reasons[answer].map((r) => <Checkbox key={r} name="reason" value={r} label={r} />)}
          </fieldset>
          <Textarea name="feedback" label="Feedback" rows={3} />
          <span id="pf-gender">I’m</span>
          <RadioGroup name="gender" orientation="horizontal" aria-labelledby="pf-gender">
            <Radio value="male" label="Male" />
            <Radio value="female" label="Female" />
            <Radio value="none" label="Prefer not to say" />
          </RadioGroup>
          <p>
            For more information, you can review the <Link inline href="/e-participation">e-participation statement</Link>{' '}
            and the <Link inline href="/rules">rules of engagement</Link>.
          </p>
          <Button type="submit" size="lg">Submit</Button>
        </form>
      )}
    </section>
  );
}

/* page-feedback.css: DGA Feedback Section, a white band under a 2px brand rule.
.page-feedback { border-block-start: 2px solid var(--ddga-color-primary); padding: var(--ddga-space-6) var(--ddga-space-20); }
*/`;
