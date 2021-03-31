module.exports = list => {
    let tmp = [];

    list.forEach(listUsersHasFilms => {
        listUsersHasFilms.forEach(userHasFilms => {
            tmp.push(userHasFilms);
        });
    });

    return tmp;
};
