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
}

export default new employeeDAO