import userModel from "../db/models/user.model.js";

class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(userData) {
        const user = await this.userModel.create({
            username: userData.username,
            password: userData.password,
            accountId: userData.accountId
        });
        return user;
    }
    async getAll() {
        const users = await this.userModel.findAll();
        return users;
    }
    async getById(id, attributes) {
        const user = await this.userModel.findByPk(id, { attributes });
        return user;
    }
    async deleteUser(id) {
        await this.userModel.destroy({
            where: {
                id,
            },
        });
    }
}



export default new UserRepository(userModel);