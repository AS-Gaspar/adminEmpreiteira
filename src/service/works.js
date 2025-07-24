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

    editWork(id, workDto) {
        const { name, builder, address } = workDto
        return WorkDAO.editWork(id, name, builder, address)
    }

    deleteWork(id) {
        return WorkDAO.deleteWork(id)
    }
}

export default new WorkService()