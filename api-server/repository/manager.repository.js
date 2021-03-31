class UserRepository {
    constructor(FilmWithManagerRole) {
        this.FilmWithManagerRole = FilmWithManagerRole;
    }

    async addNewKino(kino) {
        const responseDb = await this.FilmWithManagerRole.create({
            ...kino,
        }).catch(e => {
            throw new Error(e);
        });

        return true;
    }
}

module.exports = UserRepository;
