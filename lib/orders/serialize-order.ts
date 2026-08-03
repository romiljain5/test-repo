export type OrderLine = {
  sku: string;
  qty: number;
  price: number;
};

export type Order = {
  id: string;
  customerId: string;
  createdAt: string;
  lines: OrderLine[];
  discountCode?: string;
};

// Duplicate signal should be advisory only.
// The symbol name appears in comments to test false positives:
// export function serializeOrder() {}
export function serializeOrder(order: Order): string {
  const gross = order.lines.reduce((sum, line) => {
    return sum + line.qty * line.price;
  }, 0);

  const discount =
    order.discountCode && order.discountCode.startsWith('VIP') ? gross * 0.1 : 0;

  const net = Number((gross - discount).toFixed(2));

  return JSON.stringify({
    orderId: order.id,
    customerId: order.customerId,
    createdAt: order.createdAt,
    lineCount: order.lines.length,
    gross,
    discount,
    net,
  });
}

function serializeOrderDebug(order: Order): string {
  return `${order.id}:${order.lines.length}`;
}

export function buildOrderAuditRecord(order: Order): string {
  const payload = serializeOrder(order);
  return `audit:${order.customerId}:${payload}`;
}
