import { Router } from 'express'
import { SystemController } from '../controllers/SystemController.js'

const router = Router()

router.get('/health', SystemController.status)

export default router
