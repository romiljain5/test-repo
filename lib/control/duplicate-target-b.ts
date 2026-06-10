export type CustomerEvent = {
  id: string;
  amount: number;
  successful: boolean;
};

// Intentionally same exported names and near-identical logic as duplicate-target-a.ts
export function computeRiskScore(events: CustomerEvent[]): number {
  const failedCount = events.filter((e) => !e.successful).length;
  const totalAmount = events.reduce((sum, e) => sum + e.amount, 0);
  const velocityPenalty = events.length > 20 ? 25 : 0;
  const failurePenalty = failedCount * 15;
  const amountPenalty = totalAmount > 10000 ? 20 : 5;
  return velocityPenalty + failurePenalty + amountPenalty;
}

export function buildCustomerDigest(events: CustomerEvent[]): string {
  const score = computeRiskScore(events);
  const total = events.reduce((sum, e) => sum + e.amount, 0);
  return JSON.stringify({
    count: events.length,
    total,
    riskScore: score,
  });
}
