# Minimal Helm chart (repro)

Mirrors the **cross-file worker metrics** pattern from `neatcode-backend`:

- **Base `values.yaml`**: no `worker.metricsPort`, no `WORKER_METRICS_PORT` in ConfigMap (env-specific only).
- **`values-staging.yaml` / `values-prod.yaml`**: define `worker.metricsPort` and `configMap.data.WORKER_METRICS_PORT`.
- **Templates** (`service-worker.yaml`, `deployment-worker.yaml`): only reference `{{ .Values.worker.metricsPort }}` — definitions live in other files in the same PR.

Use **`values-dev.yaml`** when you want a single command with base + port (local smoke test).

## Quick check

```bash
cd helm
helm lint . -f values.yaml -f values-dev.yaml
# Cross-file repro: base values.yaml has no metricsPort; staging/prod overlays add it + ConfigMap key
helm template test . -f values.yaml -f values-staging.yaml --debug | rg -n "port:|metrics|WORKER"
helm template test . -f values.yaml -f values-prod.yaml --debug | rg -n "port:|metrics|WORKER"
helm template test . -f values.yaml -f values-dev.yaml --debug | rg -n "port:|metrics"
```
