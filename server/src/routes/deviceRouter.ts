import { Router } from 'express';
import DeviceController from '../controllers/deviceController.js';

const router = Router();
router.post('/', DeviceController.create);
router.get('/', DeviceController.getAll);
router.get('/:id', DeviceController.getOne);

export default router;
