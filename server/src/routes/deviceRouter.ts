import { Router } from 'express';
import DeviceController from '../controllers/deviceController.js';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';

const router = Router();
router.post('/', checkRoleMiddleware('ADMIN'), DeviceController.create);
router.get('/', DeviceController.getAll);
router.get('/:id', DeviceController.getOne);
router.delete('/:id', DeviceController.deleteOne);

export default router;
