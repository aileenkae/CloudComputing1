const mongoose = require('mongoose');
const QuestionSchema = require('../schemas/question.schema'); //this is comming from the question.schema.js file

const Question = new mongoose.model('Question', QuestionSchema); //This is creating a new model named Question using the QuestionSchema

module.exports = Question
