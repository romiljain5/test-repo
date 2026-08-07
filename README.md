# Test Repo for Devzy Bot Pattern Coverage

This repo is set up to trigger **all** pattern-library checks (K8s, Dockerfile, S3/Storage) so the Devzy bot comments on PRs. Use it to validate the grep-context pattern libraries.

## Structure

| Path | Purpose |
|------|--------|
| `package.json`, `index.js` | Node app shell |
| `Dockerfile` | **Dockerfile patterns**: `latest` tag, `USER root`, `ARG` secrets, `COPY .env`/credentials/keys, `HEALTHCHECK NONE` |
| `k8s/deployment-bad-security.yaml` | **Pod security**: privileged, runAsUser:0, runAsNonRoot:false, hostIPC, hostNetwork, capabilities add, readOnlyRootFilesystem:false, allowPrivilegeEscalation, hostPath, default serviceAccountName |
| `k8s/service-nodeport.yaml` | **Network**: `type: NodePort` |
| `k8s/ingress-no-tls.yaml` | **Network**: Ingress without spec.tls |
| `k8s/networkpolicy-wildcard.yaml` | **Network**: NetworkPolicy with cidr 0.0.0.0/0 |
| `k8s/rbac-wildcard.yaml` | **RBAC**: ClusterRole with apiGroups/resources/verbs `*` |
| `k8s/secret-env-and-hardcoded.yaml` | **Secrets**: secretKeyRef in env + Secret with hardcoded data |
| `k8s/hpa-demo.yaml` | **Resource**: HPA (minReplicas reminder) |
| `k8s/ocp-*.yaml` | **OCP**: Route, BuildConfig, DeploymentConfig, SecurityContextConstraints/openshift.io/scc |
| `config/s3-config.yaml` | **Storage**: SSE disabled, empty region |
| `config/bucket-policy.json` | **Storage**: Principal `*`, hardcoded bucket in Resource |
| `config/storage.ts` | **Storage**: hardcoded bucket, empty region, encryption false, block_public_* false, acl public-read |

## How to test

1. Open a PR that adds or modifies these files (or create the repo and open initial PR).
2. Run the Devzy bot against the PR; it should post comments on lines that match the patterns above.
3. Optionally fix some issues and confirm the bot only comments on remaining violations.

## Note

Files under `config/` and `k8s/` are **intentionally** insecure for testing only. Do not use in production.
