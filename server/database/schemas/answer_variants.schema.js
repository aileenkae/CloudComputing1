const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
//This AnswerVariantsSchema is used to create the answer variants collection in the database
const AnswerVariantsSchema = new mongoose.Schema({
    question: { //This is the relationship between the question and the answer variants
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question', //This is the reference to the question model in the question.model.js file
        childPath: 'answer_variants' //This is the child path to the answer variants model in the answer_variants.model.js file
    },
    
    form: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form', //This is the reference to the form model in the form.model.js file
    },

    answer: String, //This is the answer of the answer variants
}, {timestamps: true});
//plugin is used to create the relationship between the question and the answer variants
AnswerVariantsSchema.plugin(relationship, { relationshipPathName: 'question' });
AnswerVariantsSchema.plugin(require('mongoose-autopopulate'));

module.exports = AnswerVariantsSchema; //Exporting the AnswerVariantsSchema in answer_variants.model.js