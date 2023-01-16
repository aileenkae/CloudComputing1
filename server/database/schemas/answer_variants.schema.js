const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");

const AnswerVariantsSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        childPath: 'answer_variants'
    },

    form: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form',
    },

    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response",
        autopopulate: true
    }],

    answer: String,
}, {timestamps: true});

AnswerVariantsSchema.plugin(relationship, { relationshipPathName: 'question' });
AnswerVariantsSchema.plugin(require('mongoose-autopopulate'));

module.exports = AnswerVariantsSchema;