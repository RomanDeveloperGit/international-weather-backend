import { Router } from 'express';

import locationRouter from './locationRouter.js';

const router = new Router();

router.use('/location', locationRouter);

export default router;
