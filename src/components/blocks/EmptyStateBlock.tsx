'use client';

import { Button, EmptyState } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

function InboxGlyph() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 12h-6l-2 3h-4l-2-3H2" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z" />
    </svg>
  );
}

export function EmptyStateBlock() {
  const { c } = useCopy();
  const s = c.blocks.states;

  return (
    <div className="block-empty">
      <EmptyState
        icon={<InboxGlyph />}
        title={s.emptyTitle}
        description={s.emptyDesc}
        action={<Button>{s.emptyAction}</Button>}
        secondaryAction={<Button variant="outline">{s.emptySecondary}</Button>}
      />
    </div>
  );
}

export const emptyStateCode = `import { Button, EmptyState } from '@dev-dga/react';

export function NoRequests() {
  return (
    <EmptyState
      icon={<InboxIcon />}
      title="No requests yet"
      description="When you submit a service request it shows up here, so you can track its status."
      action={<Button>New request</Button>}
      secondaryAction={<Button variant="outline">Browse services</Button>}
    />
  );
}`;
