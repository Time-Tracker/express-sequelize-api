'use strict';

var base = require('./base-controller');
var tasklogService = require('../services/tasklog-service');

function getAll(req, res) {
  tasklogService.getAll().then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function saveTaskLogs(req, res) {
  tasklogService.saveTaskLogs(req.body).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function deleteTaskLogs(req, res) {
  tasklogService.deleteTaskLogs(req.params.id).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function getTaskLog(req, res) {
  console.log(req.params.id);
  tasklogService.getTaskLog(req.params.id).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

module.exports.getAll = getAll;
module.exports.saveTaskLogs = saveTaskLogs;
module.exports.deleteTaskLogs = deleteTaskLogs;
module.exports.getTaskLog = getTaskLog;