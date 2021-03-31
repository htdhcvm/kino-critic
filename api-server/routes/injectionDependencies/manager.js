const ManagerController = require('../../controllers/manager.controller');
const ManagerRepository = require('../../repository/manager.repository');
const ManagerService = require('../../service/manager.service');

const {
    kinoModelWithMangerRole,
} = require('../../model/bootstrap/bootstrapManager')();

console.log(kinoModelWithMangerRole);
const managerRepository = new ManagerRepository(kinoModelWithMangerRole);
const managerService = new ManagerService(managerRepository);
const managerController = new ManagerController(managerService);

module.exports = managerController;
