const filmsDiaryToDTO = require('../model/DTO/FilmsDiaryToDTO');
const toManagerDTO = require('../model/DTO/toManagerDTO');
const toDTOComment = require('../model/DTO/ToClient/toDTOComment');

class UserRepository {
    constructor(
        filmsModelWithUserRole,
        userModelWithUserRole,
        phonesModelWithUserRole,
        commentsModelWithUserRole,
        userHasKinosWithUserRole,
    ) {
        this.filmsModelWithUserRole = filmsModelWithUserRole;
        this.userModelWithUserRole = userModelWithUserRole;
        this.phonesModelWithUserRole = phonesModelWithUserRole;
        this.commentsModelWithUserRole = commentsModelWithUserRole;
        this.userHasKinosWithUserRole = userHasKinosWithUserRole;
    }

    async estimateFilm(estimate, id_film) {
        const responseDb = await this.filmsModelWithUserRole.increment(
            { estimate: +estimate },
            {
                where: {
                    id: id_film,
                },
            },
        );

        if (responseDb[0] === 0) return { statusCode: 404 };
        return { statusCode: 200 };
    }

    async updateUserData(user) {
        const { id, login, password, age, fio, address } = user;
        const { number, format, numberFormat } = user;

        await this.userModelWithUserRole.update(
            {
                login,
                password,
                age,
                fio,
                address,
            },
            {
                where: {
                    typeUser: 0,
                    id: id,
                },
            },
        );

        await this.phonesModelWithUserRole.update(
            {
                number,
                format,
                numberFormat,
            },
            {
                where: {
                    usersKinoId: id,
                },
            },
        );
    }

    async getListDiary(favoritesData) {
        const responseDb = await this.userModelWithUserRole.findAll({
            where: {
                typeUser: favoritesData.type_user,
                id: favoritesData.id_user,
            },
            include: {
                model: this.userHasKinosWithUserRole,
                where: {
                    type_kinos: favoritesData.type_kino,
                },
                include: this.filmsModelWithUserRole,
            },
        });

        return filmsDiaryToDTO(responseDb);
    }

    async getOwnersFilms(owners) {
        const responseDb = await this.userModelWithUserRole
            .findAll({
                where: {
                    id: owners,
                },
            })
            .catch(e => console.log(e));

        return toManagerDTO(responseDb);
    }

    async writeComment(commentData) {
        const { text, kinoId, usersKinoId } = commentData;
        const responseDbComment = await this.commentsModelWithUserRole.create({
            text,
            kinoId,
            usersKinoId,
        });

        const responseDbUserOnId = await this.userModelWithUserRole.findOne({
            where: {
                id: usersKinoId,
            },
        });

        return toDTOComment(responseDbComment, responseDbUserOnId);
    }

    async deleteDiary(deleteData) {
        const { type_kinos, kinoId, usersKinoId } = deleteData;

        const responseDb = await this.userHasKinosWithUserRole.destroy({
            where: {
                type_kinos,
                kinoId,
                usersKinoId,
            },
        });

        console.log(responseDb);
    }

    async addNewDiary(diaryData) {
        const { type_kinos, kinoId, usersKinoId } = diaryData;
        await this.userHasKinosWithUserRole.create({
            type_kinos,
            kinoId,
            usersKinoId,
        });
    }
}

module.exports = UserRepository;
