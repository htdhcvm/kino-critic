const { sequelizeUser } = require('../');

const FilmsModel = require('../Entity/kinos/Kinos');
const UserModel = require('../Entity/users_kino/User');
const PhonesModel = require('../Entity/phones/Phones');
const CommentsModel = require('../Entity/comments/Comments');
const UserHasKinos = require('../Entity/user_has_kinos/UserHasKinos');

module.exports = () => {
    const filmsModelWithUserRole = FilmsModel(sequelizeUser);
    const userModelWithUserRole = UserModel(sequelizeUser);
    const phonesModelWithUserRole = PhonesModel(sequelizeUser);
    const commentsModelWithUserRole = CommentsModel(sequelizeUser);
    const userHasKinosWithUserRole = UserHasKinos(sequelizeUser);

    userModelWithUserRole.hasMany(filmsModelWithUserRole, {
        as: 'userHasManyFilms',
    });

    filmsModelWithUserRole.belongsTo(userModelWithUserRole);

    userModelWithUserRole.hasMany(phonesModelWithUserRole);
    phonesModelWithUserRole.belongsTo(userModelWithUserRole);

    // userModelWithUserRole.belongsToMany(commentsModelWithUserRole, {
    //     as: 'usersHasManyComments',
    //     through: filmsModelWithUserRole,
    // });

    // commentsModelWithUserRole.belongsToMany(userModelWithUserRole, {
    //     through: filmsModelWithUserRole,
    // });

    filmsModelWithUserRole.hasMany(commentsModelWithUserRole);
    commentsModelWithUserRole.belongsTo(filmsModelWithUserRole);

    userModelWithUserRole.hasMany(userHasKinosWithUserRole, {
        foreignKey: 'usersKinoId',
    });
    userHasKinosWithUserRole.belongsTo(userModelWithUserRole, {});

    filmsModelWithUserRole.hasMany(userHasKinosWithUserRole, {
        foreignKey: 'kinoId',
    });
    userHasKinosWithUserRole.belongsTo(filmsModelWithUserRole, {});

    // await sequelizeUser.sync({ alter: true });
    return {
        filmsModelWithUserRole,
        userModelWithUserRole,
        phonesModelWithUserRole,
        commentsModelWithUserRole,
        userHasKinosWithUserRole,
    };
};
