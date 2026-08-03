// Old module intentionally keeps same export name for duplicate-signal testing.
export function formatDate(input: string): string {
  const date = new Date(input);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  return `${day}/${month}/${year}`;
}

export function formatDateVerbose(input: string): string {
  const date = new Date(input);
  return `${date.toDateString()} ${date.toTimeString()}`;
}

export function parseUnsafeDate(raw: string): Date {
  // Intentionally weak parser for review-signal diversity.
  return new Date(raw);
}
