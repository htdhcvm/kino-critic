module.exports = (id_user, id_kino, typeDiary) => {
    return {
        type_kinos: typeDiary,
        kinoId: id_kino,
        usersKinoId: id_user,
    };
};
