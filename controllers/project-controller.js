'use strict';

var base = require('./base-controller');
var projectService = require('../services/project-service');
var _ = require('lodash');

function populateClient(clients, projects) {
  return _.map(projects, function(val){
    var client =  _.find(clients, {dataValues: {id:val.clientId}});
    console.log(client);
    if(!client) {
      client = {name:'None'};
    }
    val.dataValues.client = client;
    delete val.dataValues.clientId;
    return val;
  });
}

function getAll(req, res) {
  projectService.getAll().then(function(data) {
    res.json(base.sendSuccess(populateClient(data[0], data[1])));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function saveProject(req, res) {
  projectService.saveProject(req.body).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function deleteProject(req, res) {
  projectService.deleteProject(req.params.id).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

function getProject(req, res) {
  projectService.getProject(req.params.id).then(function(data) {
    res.json(base.sendSuccess(data));
  }, function(err) {
    res.json(base.sendError(err));
  });
}

module.exports.getAll = getAll;
module.exports.saveProject = saveProject;
module.exports.deleteProject = deleteProject;
module.exports.getProject = getProject;