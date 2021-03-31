module.exports = diary => {
    let tmpIndex = [];
    let tmpListFilmsData = [];

    diary.forEach(user => {
        user.dataValues.users_has_kinos.forEach(hasFilm => {
            const filmData = hasFilm.dataValues.kino.dataValues;
            const tmpObjFilm = {};
            tmpIndex.push(filmData.usersKinoId);

            tmpObjFilm.id = filmData.id;
            tmpObjFilm.title = filmData.title;
            tmpObjFilm.review = filmData.review;
            tmpObjFilm.photo = filmData.photo;
            tmpObjFilm.rating = filmData.rating;
            tmpObjFilm.views = filmData.views;
            tmpObjFilm.year = filmData.year;
            tmpObjFilm.city = filmData.city;
            tmpObjFilm.genre = filmData.genre;
            tmpObjFilm.slogan = filmData.slogan;
            tmpObjFilm.director = filmData.director;
            tmpObjFilm.scenario = filmData.scenario;
            tmpObjFilm.producer = filmData.producer;
            tmpObjFilm.operator = filmData.operator;
            tmpObjFilm.composer = filmData.composer;
            tmpObjFilm.painter = filmData.painter;
            tmpObjFilm.mounting = filmData.mounting;
            tmpObjFilm.budget = filmData.budget;
            tmpObjFilm.feesus = filmData.feesus;
            tmpObjFilm.feesworld = filmData.feesworld;
            tmpObjFilm.watchers = filmData.watchers;
            tmpObjFilm.premiererf = filmData.premiererf;
            tmpObjFilm.premiereworld = filmData.premiereworld;
            tmpObjFilm.releaserf = filmData.releaserf;
            tmpObjFilm.releasedvd = filmData.releasedvd;
            tmpObjFilm.age = filmData.age;
            tmpObjFilm.reitingmpaa = filmData.reitingmpaa;
            tmpObjFilm.time = filmData.time;
            tmpObjFilm.usersKinoId = filmData.usersKinoId;

            tmpListFilmsData.push(tmpObjFilm);
        });
    });

    tmpIndex = [...new Set(tmpIndex)];

    return {
        diaryLitsts: tmpListFilmsData,
        indexDiaryOwner: tmpIndex,
    };
};

// id: 2,
// title: 'Джентльмены',
// review: 'Успешное возвращение Гая Ричи к корням — острая и живая криминальная комедия с блестящим актерским составом',
// photo: 'jent.jpeg',
// rating: '9.1',
// views: '475621',
// year: '2019',
// city: 'США',
// genre: 'Великобритания, США',
// slogan: 'криминал, комедия, боевик',
// director: '«Criminal. Class»',
// scenario: 'Гай Ричи',
// producer: 'Гай Ричи, Айван Эткинсон, Марн Дэвис, ...',
// operator: 'Мэттью Андерсон, Айван Эткинсон, Билл Блок, ...',
// composer: 'Алан Стюарт',
// painter: 'Кристофер Бенстед',
// mounting: 'Джемма Джексон, Рэйчел Олтон, Оливер Кэрролл, ...',
// budget: 'Джеймс Херберт, Пол Мачлисс',
// feesus: '$22 000 000',
// feesworld: '$36 471 795',
// watchers: '+ $78 700 000 = $115 171 795',
// premiererf: '$18 003 343',
// premiereworld: '13 февраля 2020, «Вольга»',
// releaserf: '3 декабря 2019, ...',
// releasedvd: '31 марта 2020, «Вольга»',
// age: '18+',
// reitingmpaa: 'R',
// time: '113 мин. / 01:53',
