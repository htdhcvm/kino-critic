class ManagerService {
    constructor(managerRepository) {
        this.managerRepository = managerRepository;
    }

    async addNewKino(kino) {
        return await this.managerRepository.addNewKino(kino);
    }
}

module.exports = ManagerService;
