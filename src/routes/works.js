import express from 'express'
import workController from '../controller/works.js'
const router = express.Router()

router.get('/works', workController.getAllWorks)
// router.get('/works:id', workController.getWork)
router.post('/create-work', workController.createWork)
// router.put('/works:id', workController.editWork)
// router.delete('/works:id', workController.deleteWork)


export default router