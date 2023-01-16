const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
//This FormSchema is used to create the forms collection in the database
const FormSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //User is the reference to the user model in the user.model.js file
        childPath: 'forms' //This is the child path to the forms model in the form.model.js file
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

    questions: [{ //Array of questions to store the questions of the form
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        autopopulate: true
    }],

    responses: [{ //Array of responses to store the responses of the users
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response"
    }]
}, {timestamps: true});
//plugin is used to create the relationship between the user and the forms
FormSchema.plugin(relationship, { relationshipPathName: "user" })
FormSchema.plugin(require('mongoose-autopopulate'));

module.exports = FormSchema;