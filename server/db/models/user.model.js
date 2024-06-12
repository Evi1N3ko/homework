import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js'; // Подключаемся к экземпляру Sequelize
import accountModel from './account.model.js';

const user = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},
    {
        timestamps: false,
        tableName: 'users',
        underscored: true
    });

user.belongsTo(accountModel, { foreignKey: 'accountId' });

export default user;