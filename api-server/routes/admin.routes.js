const router = require('express').Router();

const adminController = require('./injectionDependencies/admin');
const checkOnAccess = require('../middleware/checkOnAccess');

router.post(
    '/addNewManager',
    checkOnAccess,
    adminController.addNewManager.bind(adminController),
);

module.exports = router;
