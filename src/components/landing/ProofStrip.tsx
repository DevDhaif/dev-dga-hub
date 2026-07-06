'use client';

import { COMPONENT_COUNT } from '@/lib/catalog';
import { useCopy } from '@/lib/i18n';

export function ProofStrip() {
  const { c } = useCopy();
  const items: { value: string; label?: string; accent?: boolean }[] = [
    { value: `${COMPONENT_COUNT}`, label: c.proof.components, accent: true },
    { value: '3', label: c.proof.packages, accent: true },
    { value: c.proof.wcag },
    { value: c.proof.rtl },
    { value: c.proof.dark },
    { value: c.proof.react },
  ];

  return (
    <div className="proof-strip">
      <div className="shell proof" role="list" aria-label={c.chrome.proofGlance}>
        {items.map((it) => (
          <div
            className="proof__cell"
            role="listitem"
            key={it.value + (it.label ?? '')}
            data-accent={it.accent || undefined}
          >
            <span className="proof__value">{it.value}</span>
            {it.label && <span className="proof__label">{it.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
