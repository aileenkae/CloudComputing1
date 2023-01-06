var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form'
    },

    fieldType: String,

    question: String,
}, {timestamps: true});

module.exports = QuestionSchema;