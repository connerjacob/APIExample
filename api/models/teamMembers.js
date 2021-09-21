'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    firstName: {
        type: String,
        required: 'Type the first name of team member'
    },
    lastName: {
        type: String,
        required: 'Type the last name of team member'
    },
    bio: {
        type: String,
        required: 'Type the bio of team member'
    },
    imageUrl: {
        type: String,
        required: 'Type the imageUrl of team member'
    }
});

module.exports = mongoose.model('members', memberSchema);