'use client';

import { createContext, useContext } from 'react';
import type { Locale } from './locale';

const LocaleContext = createContext<Locale>('en');

export const LocaleProvider = LocaleContext.Provider;

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
