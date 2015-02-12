'use strict';

var base = require('./base-controller');
var tasklogService = require('../services/tasklog-service');
var taskService = require('../services/task-service');

function getAll(req, res) {
  tasklogService.getAll().then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function saveTracker(req, res) {
  tasklogService.saveTracker(req.body).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function validateAndSaveTracker(req, res) {
  taskService.getTask(req.body.task).then(function(data) {
    if (data !== null) {
      saveTracker(req, res);
    } else {
      var err = 'Task not found';
      res.json(base.sendError(err));
    }
  });
}

function deleteTracker(req, res) {
  console.log(req);
  tasklogService.deleteTracker(req.params.id).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function getTracker(req, res) {
  tasklogService.getTracker(req.params.id).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function getTrackerByTask(req, res) {
  tasklogService.getTrackerByTask(req.params.id).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}


module.exports.getAll = getAll;
module.exports.saveTracker = validateAndSaveTracker;
module.exports.deleteTracker = deleteTracker;
module.exports.getTracker = getTracker;
module.exports.getTrackerByTask = getTrackerByTask;