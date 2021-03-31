module.exports = (favorites, owners) => {
    console.log(favorites);
    console.log(owners);

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
