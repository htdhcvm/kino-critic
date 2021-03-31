module.exports = (id_kino, text_comment, id_user) => {
    return {
        text: text_comment,
        kinoId: id_kino,
        usersKinoId: id_user,
    };
};
