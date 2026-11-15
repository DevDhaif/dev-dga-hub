'use client';

import { useId, useRef, useState, type FormEvent } from 'react';
import { Button, Link, Rating, Textarea } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { CancelCircleIcon, CheckCircleIcon } from './block-icons';

type Step = 'summary' | 'form' | 'done';

const AVERAGE = 3.9;

export function RatingBlock() {
  const { c, locale } = useCopy();
  const r = c.blocks.rating;
  const a = c.blocks.agreement;
  const id = useId();
  const [step, setStep] = useState<Step>('summary');
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  const valueText = (value: number, max: number) =>
    locale === 'ar' ? `${value} من ${max}` : `${value} out of ${max} stars`;

  const open = () => {
    setStep('form');
    requestAnimationFrame(() => headingRef.current?.focus());
  };
  const close = () => {
    setStep('summary');
    setError(false);
    requestAnimationFrame(() => ctaRef.current?.focus());
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (score <= 0) {
      setError(true);
      return;
    }
    setStep('done');
  };

  return (
    <section className="block-rating" aria-labelledby={`${id}-title`}>
      {step === 'summary' && (
        <div className="block-rating__row">
          <div className="block-rating__summary">
            <p id={`${id}-title`} className="block-rating__text">
              {r.average} <strong>{AVERAGE}</strong>
            </p>
            <div className="block-rating__stars">
              <Rating
                readOnly
                allowHalf
                value={AVERAGE}
                size="md"
                tone="brand"
                formatValueText={valueText}
              />
              <span className="block-rating__count">{r.reviews}</span>
            </div>
          </div>
          <Button ref={ctaRef} size="lg" onClick={open}>
            {r.cta}
          </Button>
        </div>
      )}

      {step === 'form' && (
        <form className="block-rating__form" onSubmit={submit} noValidate>
          <div className="block-rating__head">
            <div className="block-rating__intro">
              <h3
                id={`${id}-title`}
                ref={headingRef}
                tabIndex={-1}
                className="block-rating__heading"
              >
                {r.heading}
              </h3>
              <p className="block-rating__notice">{r.notice}</p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="lg"
              endIcon={<CancelCircleIcon />}
              onClick={close}
            >
              {r.close}
            </Button>
          </div>

          <div className="block-rating__body">
            <div className="block-rating__score">
              <div>
                <p id={`${id}-q`} className="block-rating__question">
                  {r.question}
                </p>
                <p id={`${id}-hint`} className="block-rating__hint">
                  {r.hint}
                </p>
              </div>
              <Rating
                name="rating"
                size="md"
                tone="brand"
                allowHalf
                value={score}
                onValueChange={(v) => {
                  setScore(v);
                  setError(false);
                }}
                aria-labelledby={`${id}-q`}
                error={error}
                errorMessage={r.required}
                formatValueText={valueText}
              />
            </div>
            <Textarea name="feedback" label={r.feedback} rows={3} className="block-rating__field" />
          </div>

          <div className="block-rating__foot">
            <p className="block-rating__agreement">
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
              {r.submit}
            </Button>
          </div>
        </form>
      )}

      {step === 'done' && (
        <div className="block-rating__row" role="status">
          <div className="block-rating__summary">
            <p id={`${id}-title`} className="block-rating__text">
              {r.youRated} <strong>({score.toFixed(1)})</strong>
            </p>
            <Rating
              readOnly
              allowHalf
              value={score}
              size="md"
              tone="brand"
              formatValueText={valueText}
            />
          </div>
          <p className="block-rating__thanks">
            <CheckCircleIcon className="block-rating__check" />
            {r.thanks}
          </p>
        </div>
      )}
    </section>
  );
}

export const ratingCode = `import { useState } from 'react';
import { Button, Link, Rating, Textarea } from '@dev-dga/react';

export function RatingSection() {
  const [step, setStep] = useState('summary'); // summary | form | done
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);

  if (step === 'summary') {
    return (
      <section className="rating">
        <p>This service is rated with an average of <strong>3.9</strong></p>
        <Rating readOnly allowHalf value={3.9} size="md" tone="brand" />
        <span>1,544 reviews</span>
        <Button size="lg" onClick={() => setStep('form')}>Rate this service</Button>
      </section>
    );
  }

  if (step === 'done') {
    return (
      <section className="rating" role="status">
        <p>You rated this service <strong>({score.toFixed(1)})</strong></p>
        <Rating readOnly allowHalf value={score} size="md" tone="brand" />
        <p>Your feedback is submitted.</p>
      </section>
    );
  }

  return (
    <form
      className="rating"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (score <= 0) return setError(true);
        setStep('done');
      }}
    >
      <h3>Tell us what you think of this service</h3>
      <Button type="button" variant="ghost" size="lg" onClick={() => setStep('summary')}>Close</Button>
      <p id="rating-q">How would you rate this service?</p>
      <Rating
        name="rating"
        size="md"
        tone="brand"
        allowHalf
        value={score}
        onValueChange={(v) => { setScore(v); setError(false); }}
        aria-labelledby="rating-q"
        error={error}
        errorMessage="Select a rating."
      />
      <Textarea name="feedback" label="Feedback" rows={3} />
      <p>
        For more information, you can review the <Link inline href="/e-participation">e-participation statement</Link>{' '}
        and the <Link inline href="/rules">rules of engagement</Link>.
      </p>
      <Button type="submit" size="lg">Submit</Button>
    </form>
  );
}

/* rating.css: DGA Rating Section, a white band under a 2px brand rule.
.rating { border-block-start: 2px solid var(--ddga-color-primary); padding: var(--ddga-space-6) var(--ddga-space-20); }
*/`;
