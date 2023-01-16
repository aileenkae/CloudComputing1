const mongoose = require('mongoose');
//This AnswerVariantsSchema is used to create the answer variants collection in the database
const AnswerVariantsSchema = require('../schemas/answer_variants.schema'); //this is comming from the answer_variants.schema.js file
//This is creating a new model named AnswerVariants using the AnswerVariantsSchema
const AnswerVariants = new mongoose.model('AnswerVariants', AnswerVariantsSchema);

module.exports = AnswerVariants
