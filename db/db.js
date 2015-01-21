var dbconfig = require('../config/config.js');
var Sequelize = require('Sequelize');

var sequelize = new Sequelize(dbconfig.database, dbconfig.connection.user, dbconfig.connection.password, {
    host: dbconfig.connection.localhost,
    port: dbconfig.connection.port,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


module.exports.project = require('./project-model.js')(sequelize);
module.exports.task = require('./task-model.js')(sequelize);
module.exports.tracker = require('./tracker-model.js')(sequelize);