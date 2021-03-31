const FromPrimitivesToManagerDTO = require('../model/DTO/FromPrimitive/FromPrimitivesToManagerDTO');

class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async addNewManager(req, res) {
        try {
            const {
                login,
                password,
                age,
                fio,
                address,
                typeUser,
                number,
                format,
                numberFormat,
            } = req.body;

            const resultAddNewManager = this.adminService.addNewManager(
                FromPrimitivesToManagerDTO({
                    login,
                    password,
                    age,
                    fio,
                    address,
                    typeUser,
                    number,
                    format,
                    numberFormat,
                }),
            );

            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    }
}

module.exports = AdminController;
