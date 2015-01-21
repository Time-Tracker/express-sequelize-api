'use strict';

var Sequelize = require('Sequelize');

module.exports = function (sequelize) {

    var Model = sequelize.define('project', {
        name: {
            type: Sequelize.STRING,
            field: 'name'
        },
        description: {
            type: Sequelize.STRING,
            field: 'description'
        }
    }, {
        freezeTableName: true
    });

    Model.sync();

    return Model;

};