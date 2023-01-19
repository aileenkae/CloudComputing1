const mongoose = require('mongoose');
const QuestionSchema = require('../schemas/question.schema');
// Question is a model that is used to create a new question
const Question = new mongoose.model('Question', QuestionSchema);

module.exports = Question
