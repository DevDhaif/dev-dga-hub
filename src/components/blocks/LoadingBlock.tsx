'use client';

import { Card, Skeleton } from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';

export function LoadingBlock() {
  const { c } = useCopy();

  return (
    <div className="block-loading" aria-label={c.chrome.loadingPreview} aria-busy="true">
      {[0, 1, 2].map((i) => (
        <Card key={i} variant="outline" padding="lg" className="block-loading__card">
          <div className="block-loading__head">
            <Skeleton shape="circle" width={44} height={44} />
            <div className="block-loading__lines">
              <Skeleton shape="text" width="70%" />
              <Skeleton shape="text" width="45%" />
            </div>
          </div>
          <Skeleton shape="rectangle" height={96} />
          <div className="block-loading__foot">
            <Skeleton shape="text" width="30%" />
            <Skeleton shape="rectangle" width={88} height={32} />
          </div>
        </Card>
      ))}
    </div>
  );
}

export const loadingCode = `import { Card, Skeleton } from '@dev-dga/react';

export function LoadingCards() {
  return (
    <div style={{
      display: 'grid', gap: '1rem',
      gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
    }}>
      {[0, 1, 2].map((i) => (
        <Card key={i} variant="outline" padding="lg" aria-busy="true"
          style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <Skeleton shape="circle" width={44} height={44} />
            <div style={{ display: 'grid', gap: '0.4rem', flex: 1 }}>
              <Skeleton shape="text" width="70%" />
              <Skeleton shape="text" width="45%" />
            </div>
          </div>
          <Skeleton shape="rectangle" height={96} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Skeleton shape="text" width="30%" />
            <Skeleton shape="rectangle" width={88} height={32} />
          </div>
        </Card>
      ))}
    </div>
  );
}`;
