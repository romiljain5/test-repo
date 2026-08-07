/**
 * Worker metrics HTTP port — keep in sync with Helm `worker.metricsPort` and
 * `configMap.data.WORKER_METRICS_PORT` (defined in values-staging / values-prod, not in base values.yaml).
 */
export function getWorkerMetricsPort(): number {
  const raw = process.env.WORKER_METRICS_PORT ?? '9091';
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) ? n : 9091;
}
