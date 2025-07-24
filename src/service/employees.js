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

    editEmployee(id, employeeDto) {
        const { name, company, profession, daily_value, days_worked } = employeeDto
        return employeeDAO.editEmployee(id, name, company, profession, daily_value, days_worked)
    }

    deleteEmployee(id) {
        return employeeDAO.deleteEmployee(id)
    }
}

export default new employeeService()