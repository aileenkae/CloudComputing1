var mongoose = require('mongoose');

var ResponseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form'
    },

    userId: {
        type: String,
		ref: "User"
    },

	questionId: {
		type: String,
		ref: "Question"
	},

	answer: String
}, {timestamps: true});

module.exports = ResponseSchema;