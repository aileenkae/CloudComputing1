const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
//This AnswerVariantsSchema is used to create the answer variants collection in the database
const AnswerVariantsSchema = new mongoose.Schema({
    question: { //This is the relationship between the question and the answer variants
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
//plugin is used to create the relationship between the question and the answer variants
AnswerVariantsSchema.plugin(relationship, { relationshipPathName: 'question' });
AnswerVariantsSchema.plugin(require('mongoose-autopopulate'));

module.exports = AnswerVariantsSchema; //Exporting the AnswerVariantsSchema in answer_variants.model.js