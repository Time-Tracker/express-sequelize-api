'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize) {

  var TaskLogs = sequelize.define('tasklogs', {
    start: {
      type: Sequelize.DATE,
      field: 'start'
    },
    end: {
      type: Sequelize.DATE,
      field: 'end'
    },
    working: {
      type: Sequelize.BOOLEAN,
      field: 'working'
    }
  });
  return TaskLogs;

};