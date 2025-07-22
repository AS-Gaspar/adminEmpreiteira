import db from '../db/db.js'
import knex from '../db/knexfile.cjs'
class WorkDAO {
    async createWork(name, builder, address) {
        const [id] = await db('works').insert({
            name: name,
            builder: builder,
            address: address
        })
        .returning('id')

        return id
    }

    async getAllWorks() {
        try {
            const works = await knex('works').select('*')
            return works
        } catch (err) {
            console.error(err)
        }
        
    }
}

export default new WorkDAO