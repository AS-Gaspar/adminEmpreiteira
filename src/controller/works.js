import workService from '../service/works.js'

class Work {
    async createWork(req, res) {
        try {
            console.log('req.body:', req.body)
            const id = await workService.createWork(req.body)
            res.status(201).json(id)
        } catch (err) {
            console.error(err)
        }
    } 
}

export default new Work()