const fromPrimitivesToUserDTO = require('../model/DTO/FromPrimitive/FromPrimitivesToUserDTO');
const fromPrimitiveToDTODiary = require('../model/DTO/FromPrimitive/FromPrimitiveToDTODiary');
const joinFavoritesAndOwnersDTO = require('../model/DTO/ToClient/joinFavoritesOwners');
const fromPrimitiveToCommentDTO = require('../model/DTO/FromPrimitive/FromPrimitiveToCommentDTO');
const fromPrimitiveToDTODiaryDelete = require('../model/DTO/FromPrimitive/FromPrimitiveToDTODiaryDelete');
const fromPrimitiveToDTODiaryAdd = require('../model/DTO/FromPrimitive/FromPrimitiveToDTODiaryAdd');
const getIdUserFromAccessToken = require('../helpers/getIdUserFromAccessToken');
const fromPrimitiveToDiaryDTO = require('../model/DTO/FromPrimitive/FromPrimitiveToDiaryDTO');
class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async estimateFilm(req, res) {
        try {
            const { estimate, id_film } = req.body;

            const resultEstimate = await this.userService.estimateFilm(
                estimate,
                id_film,
            );

            res.sendStatus(resultEstimate.statusCode);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async updateUserData(req, res) {
        try {
            const {
                id,
                login,
                password,
                age,
                fio,
                address,
                number,
                format,
                numberFormat,
            } = req.body;

            const resultUpdate = await this.userService.updateUserData(
                fromPrimitivesToUserDTO({
                    id,
                    login,
                    password,
                    age,
                    fio,
                    address,
                    number,
                    format,
                    numberFormat,
                }),
            );

            return res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async writeComment(req, res) {
        try {
            const { id_kino, text_comment, accessToken } = req.body;

            const id_user = await getIdUserFromAccessToken(accessToken);

            const comment = await this.userService.writeComment(
                fromPrimitiveToCommentDTO(id_kino, text_comment, id_user),
            );

            res.json(comment);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async getFavorites(req, res) {
        try {
            const { accessToken } = req.params;
            const id = await getIdUserFromAccessToken(accessToken);

            const {
                diaryLitsts,
                indexDiaryOwner,
            } = await this.userService.getListDiary(
                fromPrimitiveToDTODiary(id, 1, 0),
            );

            const listFavoritesWithBase64Photo = await this.userService.filmsListsWithBase64Photo(
                diaryLitsts,
            );

            const owners = await this.userService.getOwnersFilms(
                indexDiaryOwner,
            );

            const favorites = joinFavoritesAndOwnersDTO(
                listFavoritesWithBase64Photo,
                owners,
            );

            console.log(favorites);
            res.json(favorites);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async getBookmarks(req, res) {
        try {
            const { accessToken } = req.params;
            const id_user = await getIdUserFromAccessToken(accessToken);

            const {
                diaryLitsts,
                indexDiaryOwner,
            } = await this.userService.getListDiary(
                fromPrimitiveToDTODiary(id_user, 0, 0),
            );

            const listBookmarksWithBase64Photo = await this.userService.filmsListsWithBase64Photo(
                diaryLitsts,
            );

            const owners = await this.userService.getOwnersFilms(
                indexDiaryOwner,
            );

            const bookmarks = joinFavoritesAndOwnersDTO(
                listBookmarksWithBase64Photo,
                owners,
            );

            res.json(bookmarks);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async addNewBookmark(req, res) {
        try {
            const { accessToken, id_kino } = req.body;

            const id_user = await getIdUserFromAccessToken(accessToken);

            await this.userService.addNewDiary(
                fromPrimitiveToDTODiaryAdd(id_user, id_kino, 0),
            );
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async addNewFavorite(req, res) {
        try {
            const { accessToken, id_kino } = req.body;

            const id_user = await getIdUserFromAccessToken(accessToken);

            await this.userService.addNewDiary(
                fromPrimitiveToDTODiaryAdd(id_user, id_kino, 1),
            );
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async deleteFavorites(req, res) {
        try {
            const { accessToken, id_kino } = req.body;

            const id_user = await getIdUserFromAccessToken(accessToken);

            await this.userService.deleteDiary(
                fromPrimitiveToDTODiaryDelete(id_user, id_kino, 1),
            );

            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async deleteBookmarks(req, res) {
        try {
            const { accessToken, id_kino } = req.body;

            const id_user = await getIdUserFromAccessToken(accessToken);

            await this.userService.deleteDiary(
                fromPrimitiveToDTODiaryDelete(id_user, id_kino, 0),
            );

            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async getDiarysStatus(req, res) {
        try {
            const { accessToken, id_post } = req.body;

            const id_user = await getIdUserFromAccessToken(accessToken);

            const diarys = await this.userService.getDiarysStatus(
                fromPrimitiveToDiaryDTO(id_post, id_user),
            );

            res.json(diarys);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}

module.exports = UserController;
