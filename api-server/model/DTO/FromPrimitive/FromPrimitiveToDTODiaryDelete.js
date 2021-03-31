module.exports = (id_user, id_kino, type) => {
    return {
        type_kinos: type,
        kinoId: id_kino,
        usersKinoId: id_user,
    };
};
