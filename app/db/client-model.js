'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize) {

  var Client = sequelize.define('client', {
    name: {
      type: Sequelize.STRING,
      field: 'name'
    }
  });
  return Client;

};