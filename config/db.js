const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('tienda','root','', {
  host: 'localhost',
  dialect:'mysql',
  logging: console.log,
});


(async () => {
try {
  await sequelize.authenticate();
  console.log('Se conecto de manera exitosa a la base de datos');
} catch (error) {
  console.error('No se pudo conectar a la base de datos:', error);
}
})();
module.exports = sequelize;