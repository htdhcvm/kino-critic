module.exports = (fio, film, tmp) => {
    return {
        fio: fio,
        film: {
            id: film.id,
            title: film.title,
            photo: tmp,
        },
    };
};
