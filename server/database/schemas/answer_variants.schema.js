const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
// AnswerVariants is a model that is used to create a new answer variant
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
    //Response is an array of responses that are used to create a new response
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