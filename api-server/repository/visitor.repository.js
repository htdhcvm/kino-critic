const { Op } = require('sequelize');
const userHasFilmsToDTO = require('../model/DTO/UserHasFilmsToDTO');
const FilmToDTO = require('../model/DTO/FilmToDTO');
const listCommentsToDTO = require('../model/DTO/ToClient/ListCommentsToDTO');

class VisitorRepository {
    constructor(
        userModelWithVisitorRole,
        filmsModelWithVisitorRole,
        commentsModelWithVisitorRole,
    ) {
        this.userModelWithVisitorRole = userModelWithVisitorRole;
        this.filmsModelWithVisitorRole = filmsModelWithVisitorRole;
        this.commentsModelWithVisitorRole = commentsModelWithVisitorRole;
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

    async checkOnExistUser(login) {
        const responseDb = await this.userModelWithVisitorRole.findAll({
            where: {
                login,
                typeUser: 0,
            },
        });

        return responseDb.length === 0;
    }

    async addNewUser(login, password) {
        await this.userModelWithVisitorRole.create({
            login,
            password,
            typeUser: 0,
        });
    }

    async getCommentsPost(id) {
        const responseDb = await this.commentsModelWithVisitorRole.findAll({
            where: {
                kinoId: id,
            },
            include: this.userModelWithVisitorRole,
        });

        return listCommentsToDTO(responseDb);
    }
}

module.exports = VisitorRepository;
