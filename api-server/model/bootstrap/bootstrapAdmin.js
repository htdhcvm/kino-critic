const { sequelizeAdmin } = require('../');

const UserModel = require('../Entity/users_kino/User');
const PhonesModel = require('../Entity/phones/Phones');

module.exports = () => {
    const userModelWithUserVisitor = UserModel(sequelizeAdmin);
    const phonesModelWithUserVisitor = PhonesModel(sequelizeAdmin);

    userModelWithUserVisitor.hasMany(phonesModelWithUserVisitor);
    phonesModelWithUserVisitor.belongsTo(userModelWithUserVisitor);
    return {
        userModelWithUserVisitor,
        phonesModelWithUserVisitor,
    };
};
