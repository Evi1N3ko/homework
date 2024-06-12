import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js'; // Подключаемся к экземпляру Sequelize

export default sequelize.define('account', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    details: {
        type: DataTypes.JSONB,
        allowNull: false
    }
    
},
    {
        timestamps: false,
        tableName: 'accounts',
        underscored: true
    });
