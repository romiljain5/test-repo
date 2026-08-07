# test-repo

**E2E compliance harness** (single PR, sequential commits).

## Steps

1. This commit: README only — no `SECURITY.md` / `CODEOWNERS` at repo head (expect L2 file-presence findings if those rules are enabled).
2. Next commit: add `SECURITY.md` and `.github/CODEOWNERS`.
3. Next: add `lib/query.js` with string SQL concat (OWASP SQLi L1).
4. Next: replace with parameterized query (L1 clean).
