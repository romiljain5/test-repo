# Architecture analysis demo (test-repo)

This branch adds a **small TypeScript tree** plus an **intentional cross-layer import** so Devzy **layer / architecture** analysis can produce violations **after you configure layers** for this repository.

## Repo layout

| Path                 | Intended layer (for Devzy) | May import from   |
|----------------------|----------------------------|-------------------|
| `lib/shared/**`      | `shared`                   | _(none)_        |
| `lib/server/**`      | `backend`                  | `shared` only   |
| `app/**`             | `frontend`                 | `shared` only   |

## The deliberate violation

- `app/bad-layer-import.ts` imports `../lib/server/db.js` (**backend** from **frontend**).
- With the rules above, that import is **not allowed**, so the graph layer check should report a **`layer_violation`**.

## What you must do in Devzy (required)

1. Open **Architecture** settings for the GitHub installation that owns **this** repo.
2. Enable architecture / layer violation detection (as you already do for other repos).
3. Add **three layers** whose **patterns** match this tree. **Order matters** (first matching pattern wins): put **`lib/shared/**` before `lib/server/**`**.

Example `architecture_config.layers` (field names match your product UI / API; adjust `id` / `color` if your schema requires them):

```json
[
  {
    "id": "layer-shared",
    "name": "shared",
    "patterns": ["lib/shared/**"],
    "canImportFrom": [],
    "color": "#6b7280",
    "description": "Shared types and pure helpers"
  },
  {
    "id": "layer-backend",
    "name": "backend",
    "patterns": ["lib/server/**"],
    "canImportFrom": ["shared"],
    "color": "#2563eb",
    "description": "Server and data-access code"
  },
  {
    "id": "layer-frontend",
    "name": "frontend",
    "patterns": ["app/**"],
    "canImportFrom": ["shared"],
    "color": "#16a34a",
    "description": "App entrypoints — must not import backend directly"
  }
]
```

4. Ensure **Neo4j / code graph** is available for the installation (graph integration initialized), or rely on **PR-head** layer analysis (still needs **non-empty `layers`**).

5. Open a PR from branch **`test/architecture-layer-violation-demo`** into **`main`** and run a review.

## Expectations

- With **`layers` empty**: no layer violations (nothing to enforce).
- With the config above: at least one **layer violation** on `app/bad-layer-import.ts`, and the PR status message can include the **Architecture Analysis** collapsible when violations are present.
