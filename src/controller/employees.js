import employeeService from '../service/employees.js'

class Employee {
    async createEmployee(req, res) {
        try {
            const id = await employeeService.createEmployee(req.body)
            res.status(201).json(id)
        } catch (err) {
            console.error(err)
        }
    }

    async getAllEmployees(req, res) {
        try {
            const employees = await employeeService.getAllEmployees(req.body)
            res.status(201).json(employees)
        } catch (err) {
            console.error(err)
        }
    }

    async getEmployee(req, res) {
        try {
            const { id } = req.params
            const employee = await employeeService.getEmployee(id)
            res.status(201).json(employee)
        } catch (err) {
            console.error(err)
        }
    }
}

export default new Employee()