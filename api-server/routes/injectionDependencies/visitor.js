const VisitorController = require('../../controllers/visitor.controller');
const VisitorRepository = require('../../repository/visitor.repository');
const VisitorService = require('../../service/visitor.service');

const {
    userModelWithVisitorRole,
    filmsModelWithVisitorRole,
} = require('../../model/bootstrap/bootstrapVisitor')();

console.log(userModelWithVisitorRole, filmsModelWithVisitorRole);
const visitorRepository = new VisitorRepository(
    userModelWithVisitorRole,
    filmsModelWithVisitorRole,
);
const visitorService = new VisitorService(visitorRepository);
const visitorController = new VisitorController(visitorService);

module.exports = visitorController;
