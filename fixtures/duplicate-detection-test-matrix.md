# Duplicate Detection Test Matrix

This branch intentionally adds noisy and duplicate-prone code to validate:

1. File review still runs even when duplicate symbol hints exist.
2. Only duplicate comments are dropped (not valid distinct findings).
3. Comment-only symbol mentions do not create false duplicate definitions.

## Added symbol collisions

- `serializeOrder` in:
  - `owasp-llm-smoke.ts`
  - `lib/orders/serialize-order.ts`
  - `lib/billing/serialize-order.ts`
- `formatDate` in:
  - `owasp-llm-smoke.ts`
  - `lib/shared/date-format.ts`
  - `lib/shared/date-format-legacy.ts`
- `serialize_order` in:
  - `owasp-llm-smoke.py`
  - `lib/python/report_formatter.py`
  - `lib/python/report_formatter_alt.py`

## Comment-only false-positive probes

- `lib/orders/serialize-order.ts`
- `owasp-llm-smoke.ts`
- `owasp-llm-smoke.py`
- `lib/python/report_formatter.py`

## Near-identical finding probes

- `lib/security/prompt-executor.ts`
- `lib/security/prompt-executor-shadow.ts`

Both files contain highly similar eval-driven execution risk comments and logic,
plus separate distinct issues (raw HTML interpolation) to verify we only merge
truly duplicate comments.
