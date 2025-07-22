import db from '../db/db.js'
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
            const works = await db.select('*').from('works')
            return works
        } catch (err) {
            console.error(err)
        }
        
    }

    async getWork(id) {
        try {
            const work = await db.select('*').from('works').where('works.id', id).first()
            return work
        } catch (err) {
            console.error(err)
        }
    }
}

export default new WorkDAO