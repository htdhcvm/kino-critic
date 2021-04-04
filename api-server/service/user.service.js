const getHash = require('../helpers/getHash');
const fs = require('fs');
const FilmBase64ToDTOFilm = require('../model/DTO/FilmBase64ToDTOFilm');
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async estimateFilm(estimate, id_film) {
        return await this.userRepository.estimateFilm(estimate, id_film);
    }

    async updateUserData(user) {
        user.password = await getHash(user.password);
        await this.userRepository.updateUserData(user);
    }

    async writeComment(commentData) {
        return await this.userRepository.writeComment(commentData);
    }

    async getListDiary(favorites) {
        return await this.userRepository.getListDiary(favorites);
    }

    async filmsListsWithBase64Photo(usersHasManyFilms) {
        const some = usersHasManyFilms.map(film => {
            const bitmap = fs.readFileSync(
                `${__dirname}/../fileStores/${film.photo}`,
            );

            // let tmp = '';
            // const src = fs.createReadStream(
            //     `${__dirname}/../fileStores/${film.photo}`,
            // );

            // src.on('data', chunk => {
            //     tmp += Buffer.from(chunk).toString('base64');
            // });

            return new Promise(resolve => {
                // src.on('end', () => {
                resolve(
                    FilmBase64ToDTOFilm(
                        film,
                        Buffer.from(bitmap).toString('base64'),
                    ),
                );
                // });
            });
        });

        return await Promise.all(some);
    }

    async getOwnersFilms(owners) {
        return await this.userRepository.getOwnersFilms(owners);
    }

    async deleteDiary(deleteData) {
        await this.userRepository.deleteDiary(deleteData);
    }

    async addNewDiary(diaryData) {
        await this.userRepository.addNewDiary(diaryData);
    }

    async getDiarysStatus(diaryData) {
        return await this.userRepository.getDiarysStatus(diaryData);
    }
}

module.exports = UserService;
