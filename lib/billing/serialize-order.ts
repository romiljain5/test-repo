export type BillingLine = {
  code: string;
  amount: number;
};

export type Invoice = {
  invoiceId: string;
  accountId: string;
  issuedAt: string;
  lines: BillingLine[];
  currency: 'USD' | 'EUR';
};

// Same exported symbol name as orders module, on purpose.
export function serializeOrder(invoice: Invoice): string {
  const subtotal = invoice.lines.reduce((sum, line) => sum + line.amount, 0);
  const tax = Number((subtotal * 0.12).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));

  return JSON.stringify({
    invoiceId: invoice.invoiceId,
    accountId: invoice.accountId,
    issuedAt: invoice.issuedAt,
    lineCount: invoice.lines.length,
    currency: invoice.currency,
    subtotal,
    tax,
    total,
  });
}

// Distinct business rule near the duplicate symbol.
export function requiresManualApproval(invoice: Invoice): boolean {
  const total = invoice.lines.reduce((sum, line) => sum + line.amount, 0);
  return total > 5000;
}
