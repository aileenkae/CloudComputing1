const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");

const FormSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        childPath: 'forms'
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

    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        autopopulate: true
    }],

    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response"
    }]
}, {timestamps: true});

FormSchema.plugin(relationship, { relationshipPathName: "user" })
FormSchema.plugin(require('mongoose-autopopulate'));

module.exports = FormSchema;