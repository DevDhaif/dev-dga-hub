'use client';

import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { DgaProvider, NotificationToast } from '@dev-dga/react';
import { LOCALIZED_PATHS, isArabicPath } from '@/lib/locale-routes';
import {
  DEFAULT_SETTINGS,
  SettingsContext,
  STORAGE_KEY,
  paletteById,
  type Dir,
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
      dir: parsed.dir === 'rtl' ? 'rtl' : 'ltr',
      palette: typeof parsed.palette === 'string' ? parsed.palette : DEFAULT_SETTINGS.palette,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const forcedDir: Dir | null = !pathname
    ? null
    : isArabicPath(pathname)
      ? 'rtl'
      : (LOCALIZED_PATHS as readonly string[]).includes(pathname)
        ? 'ltr'
        : null;
  const isArabicRoute = !!pathname && isArabicPath(pathname);

  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSettings(readStored());
    setReady(true);
  }, []);

  const dir: Dir = forcedDir ?? settings.dir;

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* localStorage unavailable */
    }
    const el = document.documentElement;
    el.setAttribute('data-theme', settings.mode);
    el.setAttribute('dir', dir);
    el.setAttribute('lang', isArabicRoute ? 'ar' : 'en');
    el.style.colorScheme = settings.mode;
  }, [settings, ready, dir, isArabicRoute]);

  const update = useCallback((patch: Partial<Settings>) => {
    setSettings((s) => ({ ...s, ...patch }));
  }, []);

  const value = useMemo<SettingsContextValue>(
    () => ({
      ...settings,
      dir,
      ready,
      setMode: (mode: Mode) => update({ mode }),
      setDir: (d: Dir) => update({ dir: d }),
      setPalette: (p: string) => update({ palette: p }),
      toggleMode: () => update({ mode: settings.mode === 'dark' ? 'light' : 'dark' }),
      toggleDir: () => update({ dir: dir === 'rtl' ? 'ltr' : 'rtl' }),
    }),
    [settings, dir, ready, update],
  );

  const palette = paletteById(settings.palette);
  const theme = palette.primary ? { primary: palette.primary } : undefined;

  return (
    <SettingsContext.Provider value={value}>
      <DgaProvider dir={dir} mode={settings.mode} theme={theme}>
        {children}
        <NotificationToast />
      </DgaProvider>
    </SettingsContext.Provider>
  );
}
