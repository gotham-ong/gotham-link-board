import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();


router.get('/test', ApiController.test);

export default router;
