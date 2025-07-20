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
}

export default new WorkDAO