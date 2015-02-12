'use strict';

var Sequelize = require('Sequelize');

module.exports = function(sequelize) {

  var Client = sequelize.define('client', {
    name: {
      type: Sequelize.STRING,
      field: 'name'
    }
  });
  return Client;

};