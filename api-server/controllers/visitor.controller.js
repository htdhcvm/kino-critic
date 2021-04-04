class VisitorController {
    constructor(visitorService) {
        this.visitorService = visitorService;
    }

    async listFilms(req, res, next) {
        try {
            console.log('hi');
            const usersHasManyFilms = await this.visitorService.getListFilms();

            const listFilmsWithPhotos = await this.visitorService.filmsListsWithBase64Photo(
                usersHasManyFilms,
            );

            res.locals.dataSendStream = JSON.stringify(listFilmsWithPhotos);
            next();
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    }

    async getFilmPage(req, res, next) {
        try {
            const id = req.params.id;

            const film = await this.visitorService.getFilmPage(id);
            const filmWithPhoto = await this.visitorService.filmWithBase64Photo(
                film,
            );

            res.locals.dataSendStream = JSON.stringify(filmWithPhoto);
            next();
        } catch (error) {
            return res.sendStatus(500);
        }
    }

    async search(req, res, next) {
        try {
            const subject = req.params.subject;

            const listFilms = await this.visitorService.findFilms(subject);

            const listFilmsWithPhotos = await this.visitorService.filmsListsWithBase64Photo(
                listFilms,
            );

            res.locals.dataSendStream = JSON.stringify(listFilmsWithPhotos);
            next();
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    }

    async registration(req, res) {
        try {
            const { login, password } = req.body;

            const existUser = await this.visitorService.checkOnExistUser(login);
            if (existUser) {
                await this.visitorService.addNewUser(login, password);
                return res.sendStatus(200);
            }
            return res.send({ status: 'exist', text: 'User already exist' });
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    }

    async getCommentsPost(req, res) {
        try {
            const id = req.params.id;

            const listPosts = await this.visitorService.getCommentsPost(id);

            res.json(listPosts);
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    }
}

module.exports = VisitorController;
