'use client';

import { usePathname, useRouter } from 'next/navigation';
import { PALETTES, useSettings } from '@/lib/settings';
import { useCopy } from '@/lib/i18n';
import { hasArabicCounterpart, isArabicPath, toArabicPath, toEnglishPath } from '@/lib/locale-routes';
import { Moon, Sun } from '@/components/icons';

export function ThemeControls({ compact = false }: { compact?: boolean }) {
  const { mode, palette, toggleMode, setPalette } = useSettings();
  const { c, locale } = useCopy();
  const pathname = usePathname();
  const router = useRouter();
  const paletteAria = (label: string) =>
    locale === 'ar' ? `${c.chrome.paletteWord} ${label}` : `${label} ${c.chrome.paletteWord}`;

  // Language lives in the URL, so switching it is a navigation, not a state toggle.
  const switchLanguage = () => {
    if (isArabicPath(pathname)) router.push(toEnglishPath(pathname));
    else if (hasArabicCounterpart(pathname)) router.push(toArabicPath(pathname));
  };

  return (
    <div className="controls" role="group" aria-label={c.chrome.displaySettings}>
      {!compact && (
        <div className="controls__swatches" role="group" aria-label={c.chrome.brandPalette}>
          {PALETTES.map((p) => (
            <button
              key={p.id}
              type="button"
              className="swatch"
              data-active={palette === p.id}
              aria-pressed={palette === p.id}
              aria-label={paletteAria(p.label)}
              title={p.label}
              onClick={() => setPalette(p.id)}
              style={{ ['--sw' as string]: p.swatch }}
            />
          ))}
        </div>
      )}

      <button
        type="button"
        className="seg"
        onClick={switchLanguage}
        aria-label={c.chrome.toggleDirection}
        title={c.chrome.toggleDirection}
      >
        <span data-on={locale === 'en'}>EN</span>
        <span className="seg__sep" aria-hidden>
          ·
        </span>
        <span data-on={locale === 'ar'}>ع</span>
      </button>

      <button
        type="button"
        className="icon-btn"
        onClick={toggleMode}
        aria-label={c.chrome.toggleTheme}
        aria-pressed={mode === 'dark'}
        title={c.chrome.toggleTheme}
      >
        {mode === 'dark' ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}
