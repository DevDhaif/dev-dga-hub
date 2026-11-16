'use client';

import type { ReactNode } from 'react';
import { CodeSnippet, type CodeSnippetProps } from '@dev-dga/react';
import { SugarHigh } from 'sugar-high/core';
import * as css from 'sugar-high/lang/css';
import { tokenize as tokenizeTs } from 'sugar-high/lang/typescript';
import { useCopy } from '@/lib/i18n';
import './code.css';

type Tokenizer = (code: string) => Array<[number, string]>;

const TOKENIZERS: Record<string, Tokenizer> = {
  tsx: (code) => tokenizeTs(code, {}),
  ts: (code) => tokenizeTs(code, {}),
  jsx: (code) => tokenizeTs(code, {}),
  js: (code) => tokenizeTs(code, {}),
  css: (code) =>
    css.tokenize(code, {
      keywords: css.keywords,
      onCommentStart: css.onCommentStart,
      onCommentEnd: css.onCommentEnd,
    }),
};

function plainLines(code: string): ReactNode {
  return code.split('\n').map((line, i) => (
    <span key={i} className="ddga-code-snippet__line">
      {line}
    </span>
  ));
}

export function highlightCode({ code, language }: { code: string; language: string }): ReactNode {
  const tokenize = TOKENIZERS[language.toLowerCase()];
  if (!tokenize) return plainLines(code);
  const tokens = tokenize(code);
  // The gutter counts `code` lines, so fall back rather than risk a misaligned render.
  if (tokens.map(([, value]) => value).join('') !== code) return plainLines(code);

  const lines: ReactNode[][] = [[]];
  tokens.forEach(([type, value], t) => {
    const kind = SugarHigh.TokenTypes[type];
    value.split('\n').forEach((piece, p) => {
      if (p > 0) lines.push([]);
      if (!piece) return;
      const line = lines[lines.length - 1];
      line.push(
        kind === 'space' || kind === 'break' ? (
          piece
        ) : (
          <span key={`${t}-${p}`} className={`hl-${kind}`}>
            {piece}
          </span>
        ),
      );
    });
  });

  return lines.map((parts, i) => (
    <span key={i} className="ddga-code-snippet__line">
      {parts}
    </span>
  ));
}

type CodeViewProps = Omit<
  CodeSnippetProps,
  'renderCode' | 'copyLabel' | 'copiedLabel' | 'showMoreLabel' | 'showLessLabel'
>;

/** `CodeSnippet` with syntax colors, localized labels, and a file-name bar for single files. */
export function CodeView({ languages, className, ...props }: CodeViewProps) {
  const { c } = useCopy();
  const snippet = (snippetClass?: string) => (
    <CodeSnippet
      {...props}
      className={snippetClass}
      languages={languages}
      renderCode={highlightCode}
      copyLabel={c.snippet.copy}
      copiedLabel={c.snippet.copied}
      showMoreLabel={c.snippet.showMore}
      showLessLabel={c.snippet.showLess}
    />
  );

  const file =
    languages.length === 1 && languages[0].label.includes('.') ? languages[0].label : null;
  if (!file) return snippet(className);

  return (
    <div className={['code', className].filter(Boolean).join(' ')} dir="ltr">
      <div className="code__bar">
        <span className="code__dots" aria-hidden>
          <span />
          <span />
          <span />
        </span>
        <span className="code__file">{file}</span>
      </div>
      {snippet('code__snippet')}
    </div>
  );
}
