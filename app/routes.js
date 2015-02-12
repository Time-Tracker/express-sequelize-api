'use strict';

var projectController = require('../controllers/project-controller.js');
var clientController = require('../controllers/client-controller.js');
var taskController = require('../controllers/task-controller.js');
var tasklogController = require('../controllers/tasklog-controller.js');

module.exports = function(router) {

  router.get('/clients', clientController.getAll);
  router.post('/clients', clientController.saveClient);
  router.delete('/clients/:id', clientController.deleteClient);
  router.get('/clients/:id', clientController.getClient);

  router.get('/projects', projectController.getAll);
  router.post('/projects', projectController.saveProject);
  router.delete('/projects/:id', projectController.deleteProject);
  router.get('/projects/:id', projectController.getProject);

  router.get('/tasks', taskController.getAll);
  router.post('/tasks', taskController.saveTask);
  router.delete('/tasks/:id', taskController.deleteTask);
  router.get('/tasks/:id', taskController.getTask);

  router.get('/tracker', tasklogController.getAll);
  router.post('/tracker', tasklogController.saveTracker);
  router.delete('/tracker/:id', tasklogController.deleteTracker);
  router.get('/tracker/:id', tasklogController.getTracker);
};