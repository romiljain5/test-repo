import type { UserId } from '../shared/types';

/** Server-side data access — should not be imported from `app/` in the demo architecture. */
export async function runQuery(_sql: string): Promise<unknown> {
  return null;
}

export function userScope(_id: UserId): void {
  // placeholder
}
