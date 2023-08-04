const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'reservadb',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql' 
    });


const conectarDB = async () => {

    try {
        await sequelize.authenticate()
        console.log('Base de datos Conectada');
    } catch (error) {
        console.log('ERROR AL CONECTAR DB: ', error);
    }

};

module.exports = {
    sequelize,
    DataTypes,
    conectarDB
}