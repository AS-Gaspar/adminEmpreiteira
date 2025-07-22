import WorkDAO from '../dao/works.js'

class WorkService {
    createWork(workDto) {
        const { name, builder, address } = workDto
        return WorkDAO.createWork(name, builder, address)
    }

    getAllWorks() {
        return WorkDAO.getAllWorks()
    }

    getWork(id) {
        return WorkDAO.getWork(id)
    }
}

export default new WorkService()