'use client';

import { useLocale } from './locale-context';
import { localizeHref } from './locale-routes';

export function useHref(): (path: string) => string {
  const locale = useLocale();
  return (path) => localizeHref(path, locale === 'ar');
}
