const FromPrimitivesToFilmDTO = require('../model/DTO/FromPrimitive/FromPrimitivesToFilmDTO');

class ManagerController {
    constructor(managerService) {
        this.managerService = managerService;
    }

    async addNewKino(req, res) {
        const {
            title,
            review,
            photo,
            rating,
            views,
            year,
            city,
            genre,
            slogan,
            director,
            scenario,
            producer,
            operator,
            composer,
            painter,
            mounting,
            budget,
            feesus,
            feesworld,
            watchers,
            premiererf,
            premiereworld,
            releaserf,
            releasedvd,
            age,
            reitingmpaa,
            time,
            estimate,
            usersKinoId,
        } = req.body;
        try {
            const result = await this.managerService.addNewKino(
                FromPrimitivesToFilmDTO({
                    title,
                    review,
                    photo,
                    rating,
                    views,
                    year,
                    city,
                    genre,
                    slogan,
                    director,
                    scenario,
                    producer,
                    operator,
                    composer,
                    painter,
                    mounting,
                    budget,
                    feesus,
                    feesworld,
                    watchers,
                    premiererf,
                    premiereworld,
                    releaserf,
                    releasedvd,
                    age,
                    reitingmpaa,
                    time,
                    usersKinoId,
                    estimate,
                }),
            );

            if (result) return res.sendStatus(200);
        } catch (error) {
            console.log(error);

            return res.sendStatus(500);
        }
    }
}

module.exports = ManagerController;
