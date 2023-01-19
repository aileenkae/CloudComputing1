const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
//QuestionSchema is a schema that is used to create a new question
const QuestionSchema = new mongoose.Schema({
    form: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form',
        childPath: 'questions'
    },

    fieldType: String,

    question: String,

    answer_variants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AnswerVariants",
        autopopulate: true
    }],

    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response",
        autopopulate: true
    }]
}, {timestamps: true});

//Plugin that is used to create a relationship between models
QuestionSchema.plugin(relationship, { relationshipPathName: 'form' })
QuestionSchema.plugin(require('mongoose-autopopulate'));

module.exports = QuestionSchema;