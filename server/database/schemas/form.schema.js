const mongoose = require('mongoose');
const relationship = require("mongoose-relationship"); // This is a package that is used to create a relationship between models
// FormSchema is a schema that is used to create a new form
const FormSchema = new mongoose.Schema({
    user: { // The user that created the form
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        childPath: 'forms'
    },

    name: String,

    description: { // The description of the form
        type: String,
        default: ""
    },

    stared: { // If the form is stared
        type: Boolean,
        default: false
    },

    questions: [{ // The questions that are used to create a new question as an array
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        autopopulate: true
    }],

    responses: [{ // The responses that are used to create a new response as an array
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response"
    }]
}, {timestamps: true});

FormSchema.plugin(relationship, { relationshipPathName: "user" })
FormSchema.plugin(require('mongoose-autopopulate'));

module.exports = FormSchema;