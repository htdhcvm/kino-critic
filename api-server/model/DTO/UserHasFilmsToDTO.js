module.exports = listUsersJoinFIlms => {
    return listUsersJoinFIlms.map(user => {
        return {
            fio: user.dataValues.fio,
            films: user.dataValues.userHasManyFilms.map(film => {
                return {
                    id: film.id,
                    title: film.title,
                    review: film.review,
                    photo: film.photo,
                    rating: film.rating,
                    views: film.views,
                    year: film.year,
                    city: film.city,
                    genre: film.genre,
                    slogan: film.slogan,
                    director: film.director,
                    scenario: film.scenario,
                    producer: film.producer,
                    operator: film.operator,
                    composer: film.composer,
                    painter: film.painter,
                    mounting: film.mounting,
                    budget: film.budget,
                    feesus: film.feesus,
                    feesworld: film.feesworld,
                    watchers: film.watchers,
                    premiererf: film.premiererf,
                    premiereworld: film.premiereworld,
                    releaserf: film.releaserf,
                    releasedvd: film.releasedvd,
                    age: film.age,
                    reitingmpaa: film.reitingmpaa,
                    time: film.time,
                    estimate: film.estimate,
                };
            }),
        };
    });
};
