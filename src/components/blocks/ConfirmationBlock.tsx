'use client';

import {
  Button,
  Card,
  DescriptionDetails,
  DescriptionItem,
  DescriptionList,
  DescriptionTerm,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { Check } from '@/components/icons';

export function ConfirmationBlock() {
  const { c } = useCopy();
  const s = c.blocks.states;

  const rows = [
    { term: s.sumRef, detail: s.sumRefVal, mono: true },
    { term: s.sumService, detail: s.sumServiceVal, mono: false },
    { term: s.sumWhen, detail: s.sumWhenVal, mono: false },
    { term: s.sumFee, detail: s.sumFeeVal, mono: false },
  ];

  return (
    <Card variant="elevated" padding="lg" className="block-confirm">
      <span className="block-confirm__badge" aria-hidden>
        <Check width={26} height={26} />
      </span>
      <h3 className="block-confirm__title">{s.confirmTitle}</h3>
      <p className="block-confirm__desc">{s.confirmDesc}</p>

      <DescriptionList divided className="block-confirm__summary">
        {rows.map((r) => (
          <DescriptionItem key={r.term}>
            <DescriptionTerm>{r.term}</DescriptionTerm>
            <DescriptionDetails>
              {r.mono ? (
                <code className="block-confirm__ref" dir="ltr">
                  {r.detail}
                </code>
              ) : (
                r.detail
              )}
            </DescriptionDetails>
          </DescriptionItem>
        ))}
      </DescriptionList>

      <div className="block-confirm__actions">
        <Button>{s.confirmTrack}</Button>
        <Button variant="outline">{s.confirmDone}</Button>
      </div>
    </Card>
  );
}

export const confirmationCode = `import {
  Button, Card, DescriptionDetails, DescriptionItem, DescriptionList, DescriptionTerm,
} from '@dev-dga/react';

export function ConfirmationReceipt() {
  return (
    <Card variant="elevated" padding="lg" style={{ maxInlineSize: '30rem', textAlign: 'center' }}>
      <CheckBadge />
      <h3>Request submitted</h3>
      <p>We’ve received your application. You’ll get an update by SMS.</p>
      <DescriptionList divided style={{ textAlign: 'start' }}>
        <DescriptionItem><DescriptionTerm>Reference</DescriptionTerm><DescriptionDetails><code>REQ-4821</code></DescriptionDetails></DescriptionItem>
        <DescriptionItem><DescriptionTerm>Service</DescriptionTerm><DescriptionDetails>Commercial registration</DescriptionDetails></DescriptionItem>
        <DescriptionItem><DescriptionTerm>Fee</DescriptionTerm><DescriptionDetails>SAR 350</DescriptionDetails></DescriptionItem>
      </DescriptionList>
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
        <Button>Track request</Button>
        <Button variant="outline">Back to services</Button>
      </div>
    </Card>
  );
}`;
