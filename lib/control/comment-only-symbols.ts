// Comment-only mentions for extraction guard checks:
// export function computeRiskScore(events: CustomerEvent[]): number {}
// export function buildCustomerDigest(events: CustomerEvent[]): string {}

export function noopControlProbe(): string {
  return 'comment-only-probe';
}
