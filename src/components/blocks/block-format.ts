/** Fills `{name}` placeholders in a copy string: `fmt('{n} of {m}', { n: 1, m: 3 })`. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
