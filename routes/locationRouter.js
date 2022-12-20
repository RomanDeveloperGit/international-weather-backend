import { Router } from 'express';
import locationController from '../controllers/locationController.js';

const locationRouter = new Router();

locationRouter.use('/list', locationController.getAll);
locationRouter.use('/:id', locationController.getOne);

export default locationRouter;
