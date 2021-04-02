const { ModuleMocker } = require('jest-mock');

const router = require('express').Router();
const dbConnect = require('../model/connect');

const AuthController = require('../controllers/auth.controller');
const AuthRepository = require('../repository/auth.repository');
const AuthService = require('../service/auth.service');

const authRepository = new AuthRepository(dbConnect);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

router.post('/auth/login', authController.login.bind(authController));
router.post('/auth/logout', authController.logout.bind(authController));
router.post(
    '/auth/refresh-tokens',
    authController.refreshtokens.bind(authController),
);

module.exports = router;
