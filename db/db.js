'use strict';

var dbconfig = require('../config/config.js');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(dbconfig.database, dbconfig.connection.user, dbconfig.connection.password, {
  host: dbconfig.connection.localhost,
  port: dbconfig.connection.port,
  dialect: 'mysql',
  //logging: true,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Tables
module.exports.client = require('./client-model.js')(sequelize);
module.exports.project = require('./project-model.js')(sequelize);
module.exports.task = require('./task-model.js')(sequelize);
module.exports.tasklogs = require('./tasklogs-model.js')(sequelize);

// Relations
module.exports.client.hasMany(module.exports.project);
module.exports.project.hasMany(module.exports.task);
module.exports.task.hasMany(module.exports.tasklogs);

sequelize.sync();