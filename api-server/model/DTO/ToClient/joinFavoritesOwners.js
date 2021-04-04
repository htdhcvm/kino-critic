module.exports = (favorites, owners) => {
    return favorites.map(favorite => {
        const ownerCurrent = owners.find(
            elememt => elememt.id === favorite.usersKinoId,
        );

        return {
            id: favorite.id,
            title: favorite.title,
            owner: ownerCurrent.fio,
            photo: favorite.photo,
        };
    });
};
