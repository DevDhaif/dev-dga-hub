'use client';

import { useRef, useState, type ComponentType } from 'react';
import { CodeSnippet, DgaProvider } from '@dev-dga/react';
import { useSettings, type Dir, type Mode } from '@/lib/settings';
import { useCopy } from '@/lib/i18n';
import { BiDi, Check, Code, Copy, Moon, Sun } from '@/components/icons';

interface BlockShowcaseProps {
  name: string;
  desc: string;
  code: string;
  Component: ComponentType;
}

export function BlockShowcase({ name, desc, code, Component }: BlockShowcaseProps) {
  const page = useSettings();
  const { c } = useCopy();
  const [mode, setMode] = useState<Mode | null>(null);
  const [dir, setDir] = useState<Dir | null>(null);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const resolvedMode = mode ?? page.mode;
  const resolvedDir = dir ?? page.dir;
  const overridden = mode !== null || dir !== null;

  const copy = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1500);
  };

  const frame = (
    <div className="block__frame">
      <Component />
    </div>
  );

  return (
    <section className="block" aria-label={name}>
      <div className="block__bar">
        <div className="block__meta">
          <h2 className="block__name">{name}</h2>
          <p className="block__desc">{desc}</p>
        </div>

        <div className="block__tools" role="toolbar" aria-label={`${name} controls`}>
          <button
            type="button"
            className="block__tool"
            data-active={dir !== null}
            aria-pressed={resolvedDir === 'rtl'}
            title={c.blocks.toggleLang}
            onClick={() => setDir((v) => (v === null ? (page.dir === 'rtl' ? 'ltr' : 'rtl') : null))}
          >
            <BiDi width={15} height={15} />
            <span>{resolvedDir === 'rtl' ? 'ع' : 'EN'}</span>
          </button>

          <button
            type="button"
            className="block__tool block__tool--icon"
            data-active={mode !== null}
            aria-pressed={resolvedMode === 'dark'}
            title={c.blocks.toggleTheme}
            onClick={() =>
              setMode((v) => (v === null ? (page.mode === 'dark' ? 'light' : 'dark') : null))
            }
          >
            {resolvedMode === 'dark' ? <Moon width={15} height={15} /> : <Sun width={15} height={15} />}
          </button>

          <button
            type="button"
            className="block__tool block__tool--icon"
            title={copied ? c.blocks.copied : c.blocks.copy}
            onClick={copy}
          >
            {copied ? <Check width={15} height={15} /> : <Copy width={15} height={15} />}
          </button>

          <button
            type="button"
            className="block__tool block__tool--code"
            data-active={showCode}
            aria-expanded={showCode}
            onClick={() => setShowCode((v) => !v)}
          >
            <Code width={15} height={15} />
            <span>{showCode ? c.blocks.preview : c.blocks.code}</span>
          </button>
        </div>
      </div>

      <div className="block__stage">
        {overridden ? (
          <DgaProvider mode={resolvedMode} dir={resolvedDir} className="block__host">
            {frame}
          </DgaProvider>
        ) : (
          <div className="block__host">{frame}</div>
        )}
      </div>

      {showCode && (
        <CodeSnippet
          className="block__code"
          languages={[{ value: 'tsx', label: 'tsx', code }]}
          maxLines={28}
        />
      )}
    </section>
  );
}
