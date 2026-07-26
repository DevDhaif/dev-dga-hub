export type Locale = 'en' | 'ar';
export type Dir = 'ltr' | 'rtl';

export function dirFor(locale: Locale): Dir {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
