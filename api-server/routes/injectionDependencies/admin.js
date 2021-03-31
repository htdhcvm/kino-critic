const AdminController = require('../../controllers/admin.controller');
const AdminRepository = require('../../repository/admin.repository');
const AdminService = require('../../service/admin.service');

const {
    userModelWithUserVisitor,
    phonesModelWithUserVisitor,
} = require('../../model/bootstrap/bootstrapAdmin')();

const adminRepository = new AdminRepository(
    userModelWithUserVisitor,
    phonesModelWithUserVisitor,
);
const adminService = new AdminService(adminRepository);
const adminController = new AdminController(adminService);

module.exports = adminController;
