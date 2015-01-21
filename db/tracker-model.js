'use strict';

var Sequelize = require('Sequelize');

module.exports = function (sequelize) {

    var Model = sequelize.define('tracker', {
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
    }, {
        freezeTableName: true
    });

    Model.sync();

    return Model;

};