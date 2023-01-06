var mongoose = require('mongoose');

var AnswerVariantsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },

    answer: String,
}, {timestamps: true});

module.exports = AnswerVariantsSchema;