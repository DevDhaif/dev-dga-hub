'use client';

import { useState } from 'react';
import { Button, DgaProvider, Switch, Tag } from '@dev-dga/react';
import { PALETTES } from '@/lib/settings';
import { useCopy } from '@/lib/i18n';

export function ThemingDemo() {
  const { c, locale } = useCopy();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);
  const paletteAria = (label: string) =>
    locale === 'ar' ? `${c.chrome.paletteWord} ${label}` : `${label} ${c.chrome.paletteWord}`;
  const [palette, setPalette] = useState('info');
  const active = PALETTES.find((p) => p.id === palette) ?? PALETTES[0];
  const theme = active.primary ? { primary: active.primary } : undefined;

  return (
    <div>
      <div className="theming__swatches" role="group" aria-label={c.chrome.brandPalette}>
        {PALETTES.map((p) => (
          <button
            key={p.id}
            type="button"
            className="theming__swatch"
            data-active={palette === p.id}
            aria-pressed={palette === p.id}
            aria-label={paletteAria(p.label)}
            onClick={() => setPalette(p.id)}
            style={{ background: p.swatch, ['--sw' as string]: p.swatch }}
          />
        ))}
      </div>

      <DgaProvider theme={theme} className="pane" style={{ display: 'block' }}>
        <div className="pane__label">
          <span>
            theme = {'{'} primary: &apos;{active.id}&apos; {'}'}
          </span>
          <span>{t('live', 'مباشر')}</span>
        </div>
        <div
          className="pane__body"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button>{t('Primary action', 'إجراء رئيسي')}</Button>
            <Button variant="outline">{t('Secondary', 'ثانوي')}</Button>
            <Button variant="ghost">{t('Ghost', 'شفاف')}</Button>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Tag variant="primary">{t('Featured', 'مميّز')}</Tag>
            <Tag variant="primary-subtle">{t('Beta', 'تجريبي')}</Tag>
            <Switch defaultChecked label={t('Notifications', 'الإشعارات')} />
          </div>
        </div>
      </DgaProvider>
    </div>
  );
}
