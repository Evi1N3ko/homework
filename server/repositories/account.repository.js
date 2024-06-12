import accountModel from "../db/models/account.model.js";

class AccountRepository {
    constructor(accountModel) {
        this.accountModel = accountModel;
    }
    async createAccount(accountData) {
        const account = await this.accountModel.create({
            name: accountData.name,
            details: accountData.details,
        });
        return account;
    }
    async getById(id) {
        const account = await this.accountModel.findByPk(id);
        return account;
    }
    async deleteAccount(id) {
        await Post.destroy({
            where: {
                id,
            },
        });
    }
}



export default new AccountRepository(accountModel);