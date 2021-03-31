class VisitorController {
    constructor(visitorService) {
        this.visitorService = visitorService;
    }

    async listFilms(req, res, next) {
        try {
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
}

module.exports = VisitorController;
