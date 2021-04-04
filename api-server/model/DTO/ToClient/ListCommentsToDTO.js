module.exports = listCommentsFromDb => {
    return listCommentsFromDb.map(comment => {
        return {
            id: comment.id,
            text: comment.text,
            userName: comment.users_kino.dataValues.fio
                ? comment.users_kino.dataValues.fio
                : comment.users_kino.dataValues.login,
        };
    });
};
