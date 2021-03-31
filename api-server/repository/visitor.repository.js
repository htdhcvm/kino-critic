const { Op } = require('sequelize');
const userHasFilmsToDTO = require('../model/DTO/UserHasFilmsToDTO');
const FilmToDTO = require('../model/DTO/FilmToDTO');
const FilmsToDTO = require('../model/DTO/FilmsToDTO');
class VisitorRepository {
    constructor(userModelWithVisitorRole, filmsModelWithVisitorRole) {
        this.userModelWithVisitorRole = userModelWithVisitorRole;
        this.filmsModelWithVisitorRole = filmsModelWithVisitorRole;
    }

    async getListFilms() {
        const responseDb = await this.userModelWithVisitorRole.findAll({
            where: {
                typeUser: 1,
            },
            limit: 25,
            include: 'userHasManyFilms',
        });

        return userHasFilmsToDTO(responseDb);
    }

    async getFilmPage(id) {
        const film = await this.filmsModelWithVisitorRole.findOne({
            where: {
                id: id,
            },
        });

        return FilmToDTO(film);
    }

    async findFilms(subject) {
        const userHasFilms = await this.userModelWithVisitorRole.findAll({
            limit: 25,
            include: {
                model: this.filmsModelWithVisitorRole,
                as: 'userHasManyFilms',
                where: {
                    title: {
                        [Op.iLike]: `%${subject}%`,
                    },
                },
            },
        });

        return userHasFilmsToDTO(userHasFilms);
    }
}

module.exports = VisitorRepository;
