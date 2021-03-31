class AdminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }

    async addNewManager(manager) {
        await this.adminRepository.addNewManager(manager);
    }
}

module.exports = AdminService;
