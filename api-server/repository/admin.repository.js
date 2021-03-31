class AdminRepository {
    constructor(UserWithAdminRole, PhonesWithAdminRole) {
        this.UserWithAdminRole = UserWithAdminRole;
        this.PhonesWithAdminRole = PhonesWithAdminRole;
    }

    async addNewManager(manager) {
        const { login, password, age, fio, address, typeUser } = manager;
        const { number, format, numberFormat } = manager;

        await this.UserWithAdminRole.create(
            {
                login: login,
                password: password,
                age: age,
                fio: fio,
                address: address,
                typeUser: 1,

                phones: [
                    {
                        number: number,
                        format: format,
                        numberFormat: numberFormat,
                    },
                ],
            },
            {
                include: this.PhonesWithAdminRole,
            },
        );
    }
}

module.exports = AdminRepository;
