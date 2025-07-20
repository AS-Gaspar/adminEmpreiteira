import WorkDAO from '../dao/works.js'

class WorkService {
    createWork(workDto) {
        const { name, builder, address } = workDto
        return WorkDAO.createWork(name, builder, address)
    }
}

export default new WorkService()