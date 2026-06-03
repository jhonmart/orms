import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'

const router = Router()

router.get('/', UserController.list)
router.post('/', UserController.create)
router.put('/:id', UserController.update);
router.get('/:id', UserController.getById);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router
