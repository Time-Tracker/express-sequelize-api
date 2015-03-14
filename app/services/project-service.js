'use strict';

var db = require('../db/db.js');
var q = require('q');

function getAll() {
  return q.all([
    db.client.findAll(),
    db.project.findAll()
  ]);
}

function getProject(id) {
  return db.project.find({
    where: {
      id: id
    },
    include: [{
      model: db.task,
      as: "tasks"
    }]
  });
}

function deleteProject(id) {
  return db.project.destroy({
    where: {
      id: id
    }
  });
}

function saveProject(project) {
  return db.project.upsert({
    id: project.id,
    name: project.name,
    clientId: project.clientId
  });
}

module.exports.getAll = getAll;
module.exports.saveProject = saveProject;
module.exports.deleteProject = deleteProject;
module.exports.getProject = getProject;