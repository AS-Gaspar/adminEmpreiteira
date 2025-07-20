import express from 'express'
import workController from '../controller/works.js'
const router = express.Router()

router.post('/works', workController.createWork)

export default router