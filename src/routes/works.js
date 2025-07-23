import express from 'express'
import workController from '../controller/works.js'
const router = express.Router()

router.get('/works', workController.getAllWorks)
router.get('/work/:id', workController.getWork)
router.post('/create-work', workController.createWork)
// router.put('/edit-work/:id', workController.editWork)
// router.delete('/delete-work/:id', workController.deleteWork)

export default router