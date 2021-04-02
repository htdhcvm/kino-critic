const router = require('express').Router();
const streamDataToClient = require('../middleware/streamDataToClient');

const visitorController = require('./injectionDependencies/visitor');

router.get(
    '/listFilms',
    visitorController.listFilms.bind(visitorController),
    streamDataToClient,
);
router.get(
    '/getFilmPage/:id',
    visitorController.getFilmPage.bind(visitorController),
    streamDataToClient,
);

router.get(
    '/search/:subject',
    visitorController.search.bind(visitorController),
    streamDataToClient,
);

router.get(
    '/getCommentsPost/:id',
    visitorController.getCommentsPost.bind(visitorController),
    streamDataToClient,
);

router.post(
    '/registration',
    visitorController.registration.bind(visitorController),
);

module.exports = router;
