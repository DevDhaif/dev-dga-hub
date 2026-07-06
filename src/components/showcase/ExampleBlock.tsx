'use client';

import { Suspense, useRef, useState, type ComponentType } from 'react';
import { CodeSnippet, DgaProvider, Spinner } from '@dev-dga/react';
import { useSettings, type Dir, type Mode } from '@/lib/settings';
import { useCopy } from '@/lib/i18n';
import { exampleTitle } from '@/lib/example-titles';
import { BiDi, Check, Code, Copy, Moon, Sun } from '@/components/icons';

interface ExampleBlockProps {
  title: string;
  code: string;
  Demo?: ComponentType;
  /** Arabic variant of the demo, rendered when the effective direction is RTL. */
  ArDemo?: ComponentType;
  arCode?: string;
}

type Size = 'sm' | 'md' | 'lg';
const SIZE_PX: Record<Size, number | undefined> = { sm: 400, md: 700, lg: undefined };

export function ExampleBlock({ title, code, Demo, ArDemo, arCode }: ExampleBlockProps) {
  const page = useSettings();
  const { c, locale } = useCopy();
  const displayTitle = exampleTitle(title, locale);
  const [size, setSize] = useState<Size>('lg');
  const [mode, setMode] = useState<Mode | null>(null);
  const [dir, setDir] = useState<Dir | null>(null);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const resolvedMode = mode ?? page.mode;
  const resolvedDir = dir ?? page.dir;
  const overridden = mode !== null || dir !== null;

  // RTL renders the Arabic demo variant when one exists.
  const showAr = resolvedDir === 'rtl' && Boolean(ArDemo);
  const ActiveDemo = showAr ? ArDemo : Demo;
  const activeCode = showAr ? (arCode ?? code) : code;

  const copy = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(activeCode);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1500);
  };

  const demoEl = ActiveDemo ? (
    <Suspense fallback={<Spinner aria-label={c.chrome.loadingPreview} />}>
      <ActiveDemo />
    </Suspense>
  ) : (
    <p className="preview__missing">{c.component.previewUnavailable}</p>
  );

  const frame = (
    <div className="preview__frame" style={{ maxInlineSize: SIZE_PX[size] ?? '100%' }}>
      <div className="preview__scope">{demoEl}</div>
    </div>
  );

  const sizes: { id: Size; short: string; label: string }[] = [
    { id: 'sm', short: 'S', label: c.component.sizeSmall },
    { id: 'md', short: 'M', label: c.component.sizeMedium },
    { id: 'lg', short: 'L', label: c.component.sizeLarge },
  ];

  return (
    <section className="example" aria-label={displayTitle}>
      <div className="example__bar">
        <h3 className="example__title">{displayTitle}</h3>

        <div className="example__tools" role="toolbar" aria-label={`${displayTitle} controls`}>
          <div className="seg-group" role="group" aria-label="Preview width">
            {sizes.map((s) => (
              <button
                key={s.id}
                type="button"
                className="seg-group__btn"
                data-active={size === s.id}
                aria-pressed={size === s.id}
                title={s.label}
                onClick={() => setSize(s.id)}
              >
                {s.short}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="tool-btn"
            data-active={dir !== null}
            aria-pressed={resolvedDir === 'rtl'}
            title={c.component.language}
            onClick={() =>
              setDir((d) => (d === null ? (page.dir === 'rtl' ? 'ltr' : 'rtl') : null))
            }
          >
            <BiDi width={15} height={15} />
            <span>{resolvedDir === 'rtl' ? 'ع' : 'EN'}</span>
          </button>

          <button
            type="button"
            className="tool-btn tool-btn--icon"
            data-active={mode !== null}
            aria-pressed={resolvedMode === 'dark'}
            title={c.component.theme}
            onClick={() =>
              setMode((m) => (m === null ? (page.mode === 'dark' ? 'light' : 'dark') : null))
            }
          >
            {resolvedMode === 'dark' ? (
              <Moon width={15} height={15} />
            ) : (
              <Sun width={15} height={15} />
            )}
          </button>

          <button
            type="button"
            className="tool-btn tool-btn--icon"
            title={copied ? c.component.copied : c.component.copy}
            onClick={copy}
          >
            {copied ? <Check width={15} height={15} /> : <Copy width={15} height={15} />}
          </button>

          <button
            type="button"
            className="tool-btn tool-btn--code"
            data-active={showCode}
            aria-expanded={showCode}
            onClick={() => setShowCode((v) => !v)}
          >
            <Code width={15} height={15} />
            <span>{showCode ? c.component.hideCode : c.component.showCode}</span>
          </button>
        </div>
      </div>

      <div className="preview" data-collapsed={!showCode}>
        {overridden ? (
          <DgaProvider mode={resolvedMode} dir={resolvedDir} className="preview__host">
            {frame}
          </DgaProvider>
        ) : (
          <div className="preview__host">{frame}</div>
        )}
      </div>

      {showCode && (
        <CodeSnippet
          className="example__code"
          languages={[{ value: 'tsx', label: 'tsx', code: activeCode }]}
          maxLines={20}
        />
      )}
    </section>
  );
}
