'use client';

import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { DgaProvider, NotificationToast } from '@dev-dga/react';
import { dirFor, type Locale } from '@/lib/locale';
import { LocaleProvider } from '@/lib/locale-context';
import {
  DEFAULT_SETTINGS,
  SettingsContext,
  STORAGE_KEY,
  paletteById,
  type Mode,
  type Settings,
  type SettingsContextValue,
} from '@/lib/settings';

function readStored(): Settings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<Settings>;
    return {
      mode: parsed.mode === 'dark' ? 'dark' : 'light',
      palette: typeof parsed.palette === 'string' ? parsed.palette : DEFAULT_SETTINGS.palette,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function Providers({ locale, children }: { locale: Locale; children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSettings(readStored());
    setReady(true);
  }, []);

  const dir = dirFor(locale);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* localStorage unavailable */
    }
    const el = document.documentElement;
    el.setAttribute('data-theme', settings.mode);
    el.style.colorScheme = settings.mode;
  }, [settings, ready]);

  const update = useCallback((patch: Partial<Settings>) => {
    setSettings((s) => ({ ...s, ...patch }));
  }, []);

  const value = useMemo<SettingsContextValue>(
    () => ({
      ...settings,
      ready,
      setMode: (mode: Mode) => update({ mode }),
      setPalette: (p: string) => update({ palette: p }),
      toggleMode: () => update({ mode: settings.mode === 'dark' ? 'light' : 'dark' }),
    }),
    [settings, ready, update],
  );

  const palette = paletteById(settings.palette);
  const theme = palette.primary ? { primary: palette.primary } : undefined;

  return (
    <LocaleProvider value={locale}>
      <SettingsContext.Provider value={value}>
        <DgaProvider dir={dir} mode={settings.mode} theme={theme}>
          {children}
          <NotificationToast />
        </DgaProvider>
      </SettingsContext.Provider>
    </LocaleProvider>
  );
}
