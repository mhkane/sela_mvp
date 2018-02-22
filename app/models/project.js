var _ = require('underscore');
var moment = require('moment');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var locationStructure = {
    name: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    long: {
        type: Number,
        required: true,
    }
};

var schemaOptions = {
    minimize: false,
    id: false,
    toJSON: {
        getters: true,
        virtuals: true,
        minimize: false,
        versionKey: false,
        retainKeyOrder: true,
    },
    toObject: {
        getters: true,
        virtuals: true,
        minimize: false,
        versionKey: false,
        retainKeyOrder: true,
    },
    autoIndex: process.env.NODE_ENV === 'development',
    strict: process.env.NODE_ENV !== 'development',
};

var locationSchema = new Schema(locationStructure, schemaOptions);

var projectSchemaOptions = _.extend({}, schemaOptions, {
	collection: 'projects',
});

var projectStructure = {
    project_name: {
        type: String,
        required: true,
        max: 100
    },
    project_description: {
        type: String,
        required: true,
        max: 100
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        default: null,
    },
    location: {
        type: locationSchema,
        default: null
    },
    milestones: {
        type: [ObjectId],
        ref: 'Milestone',
        default: []
    },
    owner: {
        type: ObjectId,
        ref: 'Organization',
        /*required: true,*/
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    },
    deleted: {
        type: Boolean,
        default: false,
    }
};


if (process.env.NODE_ENV === 'development') {
    projectStructure.test = {
        type: Boolean,
        default: true,
    };
}

var ProjectSchema = new Schema(projectStructure, projectSchemaOptions);

ProjectSchema.method.delete = function(cb) {
    var self = this;
    self.deleted = true;
    self.save(cb);
};

//Export model
module.exports = function(connection) {

    if (!connection) {
        connection = mongoose;
    }
    connection.model('Project', ProjectSchema);
};