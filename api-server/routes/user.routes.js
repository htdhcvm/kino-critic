const router = require('express').Router();

const checkOnAccess = require('../middleware/checkOnAccess');

const userController = require('./injectionDependencies/user');

router.put(
    '/estimateFilm',
    checkOnAccess,
    userController.estimateFilm.bind(userController),
);
router.put(
    '/updateUserData',
    checkOnAccess,
    userController.updateUserData.bind(userController),
);
router.post(
    '/writeComment',
    checkOnAccess,
    userController.writeComment.bind(userController),
);

router.get(
    '/getFavorites',
    checkOnAccess,
    userController.getFavorites.bind(userController),
);
router.get(
    '/getBookmarks',
    checkOnAccess,
    userController.getBookmarks.bind(userController),
);
router.post(
    '/addNewBookmark',
    checkOnAccess,
    userController.addNewBookmark.bind(userController),
);
router.post(
    '/addNewFavorite',
    checkOnAccess,
    userController.addNewFavorite.bind(userController),
);

router.post(
    '/deleteFavorites',
    checkOnAccess,
    userController.deleteFavorites.bind(userController),
);
router.post(
    '/deleteBookmarks',
    checkOnAccess,
    userController.deleteBookmarks.bind(userController),
);

module.exports = router;
