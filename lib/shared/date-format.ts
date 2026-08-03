export function formatDate(input: string): string {
  const d = new Date(input);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatDateForUi(input: string): string {
  const d = new Date(input);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

function formatDateInternal(input: string): string {
  return formatDate(input);
}

export function createDateLabel(input: string): string {
  return `Created on ${formatDateInternal(input)}`;
}
