# test-repo

E2E-L2-A: trivial diff for Devzy compliance L2; SECURITY.md absent on purpose.

## L4 workflow compliance harness (`test/l4-workflow-compliance-scan`)

Branch `test/l4-workflow-compliance-scan` adds CI fixtures for **L4** (workflow scan):

| Path | Purpose |
|------|---------|
| `.github/workflows/ci-app.yml` | Push/PR CI **without** SAST (for `l4-sast-required` when **no** other workflow adds SAST). |
| `.github/workflows/ci-reusable-sast.yml` + `callee-codeql.yml` | **Job-level reusable** workflow that runs **CodeQL** → satisfies `l4-sast-required` repo-wide. **Remove these two files** if you want to force a SAST violation while other L4 rules stay configured. |
| `.github/dependabot.yml` | Satisfies `l4-dep-scan-required` without an audit step in YAML. |
| `.github/workflows/deploy-production.yml` | `environment: production` + `required_reviewers` → satisfies `l4-deploy-approval`. |
| `.github/workflows/backup-drill.yml` | `on: schedule` + `restore_drill` job with `pg_restore` in `run` → satisfies `l4-backup-test`. |
| `.github/workflows/release-app.yml` | Release workflow **without** cosign/attest → expect **`l4-signed-release`** violations. |
| `.gitlab-ci.yml` | GitLab parser coverage (manual prod job + scheduled `pg_restore` rule). |

**Suggested check:** Enable the five L4 predefined rules on the Devzy org, open a PR from this branch, and confirm **signed-release** (and optionally **SAST** if you remove the reusable CodeQL pair) produce the expected inline + summary behavior.
