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
        try {
            const works = await workService.getAllWorks(req.body)
            res.status(201).json(works)
        } catch (err) {
            console.error(err)
        }
    }

    async getWork(req, res) {
        try {
            const { id } = req.params
            const work = await workService.getWork(Number(id))
            res.status(201).json(work)
        } catch (err) {
            console.error(err)
        }
    }

    async editWork(req, res) {
        try {
            const { id } = req.params
            const updatedWork = await workService.editWork(id, req.body)
            res.status(201).json(updatedWork)
        } catch (err) {
            console.error(err)
        }
    }

    async deleteWork(req, res) {
        try {
            const { id } = req.params
            const deleteWork = await workService.deleteWork(id)
            res.status(201).json(deleteWork)
        } catch (err) {
            console.error(err)
        }
    }
}

export default new Work()