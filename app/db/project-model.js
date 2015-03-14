'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize) {

  var Project = sequelize.define('project', {
    name: {
      type: Sequelize.STRING,
      field: 'name'
    }
  });
  return Project;

};