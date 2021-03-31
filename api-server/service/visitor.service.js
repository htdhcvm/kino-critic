const fs = require('fs');
const ListFilmsToDTOFilmsWithPhoto = require('../model/DTO/ListFilmsToDTOFilmsWithPhoto');
const ListUserFilmsToCline = require('../model/DTO/ToClient/ListUserFilmsToCline');
const FilmToDTOWithPhoto = require('../model/DTO/ToClient/FilmToDTOWithPhoto');

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
                let tmp = '';
                const src = fs.createReadStream(
                    `${__dirname}/../fileStores/${film.photo}`,
                );

                src.on('data', chunk => {
                    tmp += Buffer.from(chunk).toString('base64');
                });

                return new Promise(resolve => {
                    src.on('end', () => {
                        resolve(
                            ListFilmsToDTOFilmsWithPhoto(
                                userHasFilms.fio,
                                film,
                                tmp,
                            ),
                        );
                    });
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
        console.log(film);
        const createBase64 = photo => {
            let tmp = '';

            const src = fs.createReadStream(
                `${__dirname}/../fileStores/${photo}`,
            );

            src.on('data', chunk => {
                tmp += Buffer.from(chunk).toString('base64');
            });

            return new Promise(resolve => {
                src.on('end', () => {
                    resolve(tmp);
                });
            });
        };

        return FilmToDTOWithPhoto(film, await createBase64(film.photo));
    }
}

module.exports = VisitorService;
