const { DataTypes } = require ('sequelize');
const db = require ('../config/db');
const sequelize = require('../config/db');

(async () => {
    await Celulares.sync({ alter: true });
    console.log('La tabla sincronizada');
    });

const Celulares = sequelize.define('celulares', {
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    gama: {
        type: DataTypes.ENUM('Baja', 'Media', 'Alta'),
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
        min: 0
    },
});



module.exports = Celulares;