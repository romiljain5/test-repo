# Minimal Helm chart (repro)

Mirrors the **worker metrics** pattern from `neatcode-backend`:

- `worker.metricsPort` in values (9091)
- `configMap.data.WORKER_METRICS_PORT`
- `templates/service-worker.yaml` uses `{{ .Values.worker.metricsPort }}`
- `templates/deployment-worker.yaml` scrape annotations + container port `metrics`

## Quick check

```bash
cd helm
helm lint .
helm template test . -f values.yaml --debug | rg -n "port:|metrics"
```
