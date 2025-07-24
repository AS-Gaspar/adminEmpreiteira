import db from '../db/db.js'

class employeeDAO {
    async createEmployee(name, company, profession, daily_value, days_worked, work_id) {
        const [id] = await db('employees').insert({
            name: name,
            company: company,
            profession: profession,
            daily_value: daily_value,
            days_worked: days_worked,
            work_id: work_id
        })
        .returning('id')

        return id
    }

    async getAllEmployees() {
        try {
            const employees = await db.select('*').from('employees')
            return employees
        } catch (err) {
            console.error(err)
        }
    }

    async getEmployee(id) {
        try {
            const employee = await db.select('*').from('employees').where({ id: id })
            return employee
        } catch (err) {
            console.error(err)
        }
    }

    async editEmployee(id, name, company, profession, daily_value, days_worked) {
        try {
            const employee = await db.select('*').from('employees').where({ id: id })
            const { n, c, p, dv, dw } = employee
            const updatedEmployee = await db('employees').where({ id: id}).update({
                name: name || n,
                company: company || c,
                profession: profession || p,
                daily_value: daily_value || dv,
                days_worked: days_worked || dw,
                updated_at: db.fn.now()
            })
            .returning('*')

            return updatedEmployee
        } catch (err) {
            console.error(err)
        }
    }

    async deleteEmployee(id) {
        try {
            const deleteEmployee = await db.select('*').from('employees').where({ id: id }).del()

            return deleteEmployee
        } catch (err) {
            console.error(err)
        }
    }
}

export default new employeeDAO