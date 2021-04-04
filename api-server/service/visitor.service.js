const fs = require('fs');
const ListFilmsToDTOFilmsWithPhoto = require('../model/DTO/ListFilmsToDTOFilmsWithPhoto');
const ListUserFilmsToCline = require('../model/DTO/ToClient/ListUserFilmsToCline');
const FilmToDTOWithPhoto = require('../model/DTO/ToClient/FilmToDTOWithPhoto');
const getHash = require('../helpers/getHash');

class VisitorService {
    constructor(visitorRepository) {
        this.visitorRepository = visitorRepository;
    }

    async getListFilms() {
        return await this.visitorRepository.getListFilms();
    }

    async filmsListsWithBase64Photo(usersHasManyFilms) {
        const lists = usersHasManyFilms.map(async userHasFilms => {
            const tmp = userHasFilms.films.map(film => {
                // let tmp = '';
                // const src = fs.createReadStream(
                //     `${__dirname}/../fileStores/${film.photo}`,
                // );

                // src.on('data', chunk => {
                //     tmp += Buffer.from(chunk).toString('base64');
                // });

                // return new Promise(resolve => {
                //     src.on('end', () => {
                //         resolve(
                //             ListFilmsToDTOFilmsWithPhoto(
                //                 userHasFilms.fio,
                //                 film,
                //                 tmp,
                //             ),
                //         );
                //     });
                // });

                const bitmap = fs.readFileSync(
                    `${__dirname}/../fileStores/${film.photo}`,
                );

                return new Promise(resolve => {
                    resolve(
                        ListFilmsToDTOFilmsWithPhoto(
                            userHasFilms.fio,
                            film,
                            Buffer.from(bitmap).toString('base64'),
                        ),
                    );
                });
            });

            return new Promise(async resolve => {
                Promise.all(tmp).then(r => resolve(r));
            });
        });

        return await Promise.all(lists).then(data => {
            return ListUserFilmsToCline(data);
        });
    }

    async findFilms(subject) {
        return await this.visitorRepository.findFilms(subject);
    }

    async getFilmPage(id) {
        return await this.visitorRepository.getFilmPage(id);
    }

    async filmWithBase64Photo(film) {
        const createBase64 = photo => {
            let tmp = '';

            // const src = fs.createReadStream(
            //     `${__dirname}/../fileStores/${photo}`,
            // );

            // src.on('data', chunk => {
            //     tmp += Buffer.from(chunk).toString('base64');
            // });

            const bitmap = fs.readFileSync(
                `${__dirname}/../fileStores/${film.photo}`,
            );

            return new Promise(resolve => {
                resolve(Buffer.from(bitmap).toString('base64'));
            });
        };

        return FilmToDTOWithPhoto(film, await createBase64(film.photo));
    }

    async checkOnExistUser(login) {
        return await this.visitorRepository.checkOnExistUser(login);
    }

    async addNewUser(login, password) {
        await this.visitorRepository.addNewUser(login, await getHash(password));
    }

    async getCommentsPost(id) {
        return await this.visitorRepository.getCommentsPost(id);
    }
}

module.exports = VisitorService;
