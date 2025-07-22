import db from '../db/db.js'
import knex from '../db/knexfile.cjs'

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
            const works = await knex('employees').select('*')
            return works
        } catch (err) {
            console.error(err)
        }
    }
}

export default new employeeDAO