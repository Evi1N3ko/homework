import userRepository from "../repositories/user.repository.js";
import accountRepository from "../repositories/account.repository.js";

class UserService {
    constructor(userRepository, accountRepository) {
        this.userRepository = userRepository;
        this.accountRepository = accountRepository;
    }
    async userRegistration(data) {
        try {
            const user = await this.userRepository.userRegistration(data);
            delete user.password;
            return user;
        } catch (error) {
            console.dir(error, { depth: null });
            throw new Error('Unexprected error');
        }
    };

    async getUserById(id) {
        try {
            const user = await this.userRepository.getUserById(id);
            if (!user) {
                throw new Error('User not found!')
            }
            delete user.password;
            return user;
        } catch (error) {
            if (error.message == 'User not found!') {
                throw error;
            }
            console.dir(error, { depth: null });
            throw new Error('Unexprected error');
        }

    };

    async deleteUser(id) {
        try {
            const user = await this.userRepository.findByPk(id);
            if (!user) {
                throw new Error('User not found!')
            }
            await this.userRepository.deleteUser(id);

        } catch (error) {
            if (error.message == 'User not found!') {
                throw error;
            }
            console.dir(error, { depth: null });
            throw new Error('Unexprected error');
        }
    };

    async getAllUsers() {
        try {
            const users = await this.userRepository.getAllUsers();
            return users;
        } catch (error) {
            console.dir(error, { depth: null });
            throw new Error('Unexprected error');
        }

    };

    async getAccountByUserId(userId) {

    };
}

export default new UserService(userRepository);
// export const service = new UserService();
