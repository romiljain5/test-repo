/**
 * L3 fixture: Express without helmet — triggers l3-express-helmet
 */
import express from 'express';

const app = express();
app.get('/health', (_req, res) => res.send('ok'));
app.listen(3000);
