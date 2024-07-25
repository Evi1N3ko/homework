import userModel from "../db/models/user.model.js";
import secret from "../config.js"

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret)
}

class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async userRegistration(userData) {
        const user = await this.userModel.create({
            username: userData.username,
            password: userData.password,
            accountId: userData.accountId
        });
        return user;
    }

    async userLogin(userData) {
        const token = generateAccessToken(id)
        return token
    }

    async getAllUsers() {
        const users = await this.userModel.findAll();
        return users;
    }
    async getUserById(id, attributes) {
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