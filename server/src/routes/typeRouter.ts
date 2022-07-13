import { Router } from 'express';
import TypeController from '../controllers/typeController.js';

const router = Router();
router.post('/', TypeController.create);
router.get('/', TypeController.getAll);

export default router;
