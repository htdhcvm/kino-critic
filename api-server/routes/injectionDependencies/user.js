const UserController = require('../../controllers/user.controler');
const UserRepository = require('../../repository/user.repository');
const UserService = require('../../service/user.service');

const {
    filmsModelWithUserRole,
    userModelWithUserRole,
    phonesModelWithUserRole,
    commentsModelWithUserRole,
    userHasKinosWithUserRole,
} = require('../../model/bootstrap/bootstrapUser')();

const userRepository = new UserRepository(
    filmsModelWithUserRole,
    userModelWithUserRole,
    phonesModelWithUserRole,
    commentsModelWithUserRole,
    userHasKinosWithUserRole,
);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

module.exports = userController;
