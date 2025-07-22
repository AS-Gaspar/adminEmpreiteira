import employeeDAO from '../dao/employees.js'

class employeeService {
    createEmployee(employeeDto) {
        const { name, company, profession, daily_value, days_worked, work_id } = employeeDto
        return employeeDAO.createEmployee(name, company, profession, daily_value, days_worked, work_id)
    }

    getAllEmployees() {
        return employeeDAO.getAllEmployees()
    }

    getEmployee(id) {
        return employeeDAO.getEmployee(id)
    }
}

export default new employeeService()