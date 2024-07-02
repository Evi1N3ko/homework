 
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://homework:hw001@localhost:54320/homework', {
  logging: false, // Отключаем логгирование SQL запросов
});

/* const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
  }) */


// Синхронизация моделей с базой данных
async function startSequalize() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true }); // Создаем таблицы (forceSync: true в Sequelize 6.x)
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('An error occurred while synchronizing the models:', error);
    }
}

export { startSequalize, sequelize };


