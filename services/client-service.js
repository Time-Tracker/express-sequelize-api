'use strict';

var db = require('../db/db.js');
var q = require('q');

function getAll() {
  return db.client.findAll({
    include: [{
      model: db.project,
      as: "projects"
    }]
  });
}

function getClient(id) {
  return db.client.find({
    where: {
      id: id
    },
    include: [{
      model: db.project,
      as: "projects"
    }]
  });
}

function deleteClient(id) {
  return db.client.destroy({
    where: {
      id: id
    }
  });
}

function saveClient(client) {
  return db.client.upsert({
    id: client.id,
    name: client.name
  });
}

module.exports.getAll = getAll;
module.exports.saveClient = saveClient;
module.exports.deleteClient = deleteClient;
module.exports.getClient = getClient;