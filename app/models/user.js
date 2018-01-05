var bcrypt = require('bcrypt');
var moment = require('moment');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userStructure = {
    accountType: {
        type: String,
        required: [true, 'User needs an Account type'],
        enum: {
            values: ['projectFunder', 'contractor', 'communityObservers'], // set the different types
            message: 'Incorrect Acount Type'
        },
    },
    first_name: {
        type: String,
        required: true,
        min: 1,
        max: 100
    },
    family_name: {
        type: String,
        required: true,
        max: 100
    },
    user_name: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        min: [8, 'Password must me longer than 8 characters'],
        set: function(value) {
            if (value.length < 8) {
                return null;
            }
            return bcrypt.hashSync(value, bcrypt.genSaltSync());
        },
        validate: [function() {
            return !!this.password;
        }, 'Password is incorrect']
    },
    created: {
        type: Date,
        default: Date.now(),
    },
    updated: {
        type: Date,
        default: Date.now(),
    },
    // TODO: Can a user be deleted?
    deleted: {
        type: Boolean,
        default: false,
    },
};
var schemaOptions = {
    minimize: false,
    toJSON: {
        getters: true,
        virtuals: true,
        minimize: false,
        versionKey: false,
        retainKeyOrder: true,
        transform: transformer // Add a Transformer to remove hide private fields
    },
    toObject: {
        getters: true,
        virtuals: true,
        minimize: false,
        versionKey: false,
        retainKeyOrder: true,
    },
    autoIndex: false,
    safe: true,
    collection: 'user', // Sets Collection Name
    strict: process.env.NODE_ENV !== 'development', // Only use strict in production
};

if (process.env.NODE_ENV === 'development') {
    userStructure.test = {
        type: Boolean,
        default: true,
    };
}

var transformer = function(doc, ret) {};

var UserSchema = new Schema(userStructure, schemaOptions);

UserSchema.pre('save', true, function(next, done) {

    next();

    this.updated = new Date();

    done();
});

UserSchema.pre('update', true, function(next, done) {

    next();

    this.updated({}, {
        $set: {
            updated: new Date()
        }
    });

    done();
});

//Export model
module.exports = function(connection) {

    if (!connection) {
        connection = mongoose;
    }
    connection.model('User', UserSchema);
};