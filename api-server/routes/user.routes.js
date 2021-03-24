const router = require('express').Router();

const UserController = require('../controllers/user.controler');

const userController = new UserController();

router.get('/listFilms', userController.listFilms);
router.get('/getFilmPage', userController.getFilmPage);
router.get('/search', userController.search);
router.put('/estimateFilm', userController.estimateFilm);
router.post('/addNewBookmark', userController.addNewBookmark);
router.post('/addNewFavorite', userController.addNewFavorite);
router.put('/updateUserData', userController.updateUserData);
router.post('/writeComment', userController.writeComment);

module.exports = router;
