var mongoose = require('mongoose');

var FormSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    name: String,

    description: {
        type: String,
        default: ""
    },

    stared: {
        type: Boolean,
        default: false
    },

    formType: {
        type: String,
        default: "anonymous"
    }

}, {timestamps: true});

module.exports = FormSchema;