import workService from '../service/works.js'

class Work {
    async createWork(req, res) {
        try {
            const id = await workService.createWork(req.body)
            res.status(201).json(id)
        } catch (err) {
            console.error(err)
        }
    } 

    async getAllWorks(req, res) {
        const works = await workService.getAllWorks(req.body)
        res.status(201).json(works)
    } catch (err) {
        console.error(err)
    }
}

export default new Work()