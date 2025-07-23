import express from 'express'
import employeeController from '../controller/employees.js'
const router = express.Router()

router.get('/employees', employeeController.getAllEmployees)
router.get('/employee/:id', employeeController.getEmployee)
router.post('/create-employee', employeeController.createEmployee)
// router.put('/edit-employee/:id', employeeController.editEmployee)
// router.delete('/delete-employee/:id', employeeController.deleteEmployee)


export default router