import express from 'express'
import employeeController from '../controller/employees.js'
const router = express.Router()

router.get('/employees', employeeController.getAllEmployees)
// router.get('/employees:id', employeeController.getEmployee)
router.post('/create-employee', employeeController.createEmployee)
// router.put('/employees:id', employeeController.editEmployee)
// router.delete('/employees:id', employeeController.deleteEmployee)


export default router