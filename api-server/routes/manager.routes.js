const router = require('express').Router();
const managerController = require('./injectionDependencies/manager');

const checkOnAccess = require('../middleware/checkOnAccess');

router.post(
    '/addNewKino',
    checkOnAccess,
    managerController.addNewKino.bind(managerController),
);

module.exports = router;
