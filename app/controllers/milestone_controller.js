//libraries
var async = require('async');
var mongoose = require('mongoose');
// classes
var Controller = require('./base_controller');

// instances
var controller = new Controller();
var UserModel = mongoose.model('User');
var MilestoneModel = mongoose.model('Milestone');

controller.create = function(req, res, next) {
    var user = req.user || {};
    
    var record = {};
    record.project = req.body.projectId;
    record.createdById = user._id;

    var milestone = MilestoneModel(record);
    milestone.save(function(err, result) {
        if (err) {
            res.status(500);
            res.json({
                err: err
            });
            return;
        }
        if (!result) {
            res.status(404);
            res.json({
                err: err
            });
            return;
        }

        res.status(201);
        res.json({
            result: "Success"
        });
    });
};

module.exports = controller;