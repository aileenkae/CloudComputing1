const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
//This QuestionSchema is used to create the question collection in the database
const QuestionSchema = new mongoose.Schema({
    form: { //Creating a ObjectID for the form
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form',
        childPath: 'questions'
    },

    fieldType: String,

    question: String,

    answer_variants: [{ //Array of answer variants to store the answer variants of the question
        type: mongoose.Schema.Types.ObjectId,
        ref: "AnswerVariants",
        autopopulate: true
    }],

    responses: [{ //Array of responses to store the responses of the users
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response",
        autopopulate: true
    }]
}, {timestamps: true});

QuestionSchema.plugin(relationship, { relationshipPathName: 'form' })
QuestionSchema.plugin(require('mongoose-autopopulate'));

module.exports = QuestionSchema;