'use strict';

var db = require('../db/db.js');
var q = require('q');

function getAll() {
  return db.tasklogs.findAll();
}

function deleteTaskLogs(id) {
  return db.tasklogs.destroy({
    where: {
      id: id
    }
  });
}

function saveTaskLogs(tasklog) {
  return db.tasklogs.upsert({
    id: tasklog.id,
    working: tasklog.working,
    start: tasklog.start,
    end: tasklog.end,
    taskId: tasklog.taskId
  });
}

function getTaskLog(id) {
  return db.tasklogs.find({
    where: {
      id: id
    }
  });
}

module.exports.getAll = getAll;
module.exports.saveTaskLogs = saveTaskLogs;
module.exports.deleteTaskLogs = deleteTaskLogs;
module.exports.getTaskLog = getTaskLog;