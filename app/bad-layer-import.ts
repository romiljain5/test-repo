/**
 * Intentional layer violation for Devzy architecture checks:
 * `app/**` is mapped to "frontend" which may only import "shared".
 * This file imports `lib/server/**` ("backend") → should surface as a layer_violation
 * once architecture layers are configured as described in ARCHITECTURE-DEMO.md.
 */
import { runQuery } from '../lib/server/db';

export async function handler(): Promise<unknown> {
  return runQuery('select 1');
}
