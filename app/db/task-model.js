'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize) {

  var Task = sequelize.define('task', {
    name: {
      type: Sequelize.STRING,
      field: 'name'
    }
  });
  return Task;

};