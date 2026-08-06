/**
 * L3 fixture: session cookie missing secure / sameSite — triggers l3-cookie-flags
 */
import type { Application } from 'express';
import session from 'express-session';

export function registerSession(app: Application): void {
  app.use(
    session({
      secret: 'dev-secret-change-me',
      cookie: { httpOnly: true },
    })
  );
}
