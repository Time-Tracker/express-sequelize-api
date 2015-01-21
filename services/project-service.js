'use strict';

var db = require('../db/db.js');
var q = require('q');

function getAll() {
    var deferred = q.defer();
    db.project.findAll()
        .error(function (err) {
            deferred.reject(err.message);
        })
        .success(function (users) {
            deferred.resolve(users);
        });
    return deferred.promise;
}

function getProject(id) {
    var deferred = q.defer();
    db.project.find(id)
        .error(function (err) {
            deferred.reject(err.message);
        })
        .success(function (users) {
            deferred.resolve(users);
        });
    return deferred.promise;
}

function save(project, deferred) {
    project.save()
        .success(function (data) {
            deferred.resolve(data);
        }).error(function (err) {
            deferred.reject(err.message);
        });
}

function deleteProject(project, deferred) {
    project.destroy()
        .success(function (data) {
            deferred.resolve(data);
        }).error(function (err) {
            deferred.reject(err.message);
        });
}

function saveProject(project) {
    var deferred = q.defer();
    if (project.id) {
        getProject(project.id).then(function (p) {
            if (p !== null) {
                p.name = project.name;
                p.description = project.description;
                save(p, deferred);
            } else {
                deferred.reject('Project not found');
            }
        }, function (err) {
            deferred.reject(err.message);
        });

    } else {
        project = db.project.build(project);
        save(project, deferred);
    }
    return deferred.promise;
}

function checkAndDeleteProject(id) {
    console.log('checkAndDeleteProject');
    var deferred = q.defer();
    getProject(id).then(function (p) {
        console.log('checkAndDeleteProject', p);
        if (p !== null) {
            deleteProject(p, deferred);
        } else {
            deferred.reject('Project not found');
        }

    }, function (err) {
        console.log('checkAndDeleteProject', err);
        deferred.reject(err.message);
    });
    return deferred.promise;
}



module.exports.getAll = getAll;
module.exports.saveProject = saveProject;
module.exports.deleteProject = checkAndDeleteProject;
module.exports.getProject = getProject;