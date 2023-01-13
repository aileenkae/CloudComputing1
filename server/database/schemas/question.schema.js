const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");

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

QuestionSchema.plugin(relationship, { relationshipPathName: 'form' })
QuestionSchema.plugin(require('mongoose-autopopulate'));

module.exports = QuestionSchema;