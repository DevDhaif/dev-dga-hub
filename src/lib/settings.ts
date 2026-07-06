'use client';

import { createContext, useContext } from 'react';

export type Mode = 'light' | 'dark';
export type Dir = 'ltr' | 'rtl';

export interface PaletteOption {
  id: string;
  primary: string | null;
  label: string;
  swatch: string;
}

export const PALETTES: PaletteOption[] = [
  { id: 'saGreen', primary: null, label: 'SA Green', swatch: '#1B8354' },
  { id: 'info', primary: 'info', label: 'Azure', swatch: '#1570EF' },
];

export { STORAGE_KEY } from './storage-key';

export interface Settings {
  mode: Mode;
  dir: Dir;
  palette: string;
}

export const DEFAULT_SETTINGS: Settings = { mode: 'light', dir: 'ltr', palette: 'saGreen' };

export interface SettingsContextValue extends Settings {
  setMode: (m: Mode) => void;
  setDir: (d: Dir) => void;
  setPalette: (p: string) => void;
  toggleMode: () => void;
  toggleDir: () => void;
  ready: boolean;
}

export const SettingsContext = createContext<SettingsContextValue | null>(null);

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within <Providers>');
  return ctx;
}

export function paletteById(id: string): PaletteOption {
  return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}
