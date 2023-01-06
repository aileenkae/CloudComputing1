const mongoose = require('mongoose');
const QuestionSchema = require('../schemas/question.schema');

const Question = new mongoose.model('Question', QuestionSchema);

module.exports = Question
