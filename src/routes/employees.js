import express from 'express'
import employeeController from '../controller/employees.js'
const router = express.Router()

router.post('/employees', employeeController.createEmployee)

export default router