module.exports = (dataDbComment, dataDbUser) => {
    return {
        id: dataDbComment.dataValues.id,
        text: dataDbComment.dataValues.text,
        userName: dataDbUser.dataValues.fio
            ? dataDbUser.dataValues.fio
            : dataDbUser.dataValues.login,
    };
};
