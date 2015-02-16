'use strict';

var db = require('../db/db.js');
var q = require('q');

function getAll() {
  return db.task.findAll({
    include: [{
      model: db.tasklogs,
      as: "tasklogs"
    }]
  });
}

function saveTask(task) {
  return db.task.upsert({
    id: task.id,
    name: task.name,
    projectId: task.projectId
  });
}

function deleteTask(id) {
  return db.task.destroy({
    where: {
      id: id
    }
  });
}

function getTask(id) {
  return db.task.find({
    where: {
      id: id
    },
    include: [{
      model: db.tasklogs,
      as: "tasklogs"
    }]
  });
}

module.exports.getAll = getAll;
module.exports.saveTask = saveTask;
module.exports.deleteTask = deleteTask;
module.exports.getTask = getTask;