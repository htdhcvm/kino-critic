const { sequelizeVisitor } = require('../');

const FilmsModel = require('../Entity/kinos/Kinos');
const CommentsModel = require('../Entity/comments/Comments');
const UserModel = require('../Entity/users_kino/User');

module.exports = () => {
    const filmsModelWithVisitorRole = FilmsModel(sequelizeVisitor);
    const userModelWithVisitorRole = UserModel(sequelizeVisitor);
    const commentsModelWithVisitorRole = CommentsModel(sequelizeVisitor);

    userModelWithVisitorRole.hasMany(filmsModelWithVisitorRole, {
        as: 'userHasManyFilms',
    });
    filmsModelWithVisitorRole.belongsTo(userModelWithVisitorRole);

    userModelWithVisitorRole.belongsToMany(filmsModelWithVisitorRole, {
        as: 'usersHasManyFilmsWithComments',
        through: 'comments',
    });
    filmsModelWithVisitorRole.belongsToMany(userModelWithVisitorRole, {
        through: 'comments',
    });

    userModelWithVisitorRole.hasMany(commentsModelWithVisitorRole);
    commentsModelWithVisitorRole.belongsTo(userModelWithVisitorRole);

    return {
        filmsModelWithVisitorRole,
        userModelWithVisitorRole,
        commentsModelWithVisitorRole,
    };
};
