'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize) {

  var TaskLogs = sequelize.define('tasklogs', {
    start: {
      type: Sequelize.STRING,
      field: 'start'
    },
    end: {
      type: Sequelize.STRING,
      field: 'end'
    },
    working: {
      type: Sequelize.STRING,
      field: 'working'
    }
  });
  return TaskLogs;

};