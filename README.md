# test-repo

## `test/l3-config-compliance-report` branch

Intentional **L3 config** violations for Devzy compliance report / E2E testing:

| File | Rule area |
|------|-------------|
| `Dockerfile` | Non-root `USER` missing on final stage |
| `server.ts` | Helmet not imported / not mounted |
| `compliance-l3-cookie-violations.ts` | Session cookie missing `secure` / `sameSite` |
| `infra/s3.tf` | `aws_s3_bucket` without SSE block |
| `infra/rds.tf` | `aws_db_instance` without `storage_encrypted = true` |
| `k8s/deployment-violation.yaml` | `securityContext.privileged: true` |

Main branch may still be used for other E2E scenarios; open a PR from this branch to exercise L3 in the review report.
