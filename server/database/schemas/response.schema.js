const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");

const ResponseSchema = new mongoose.Schema({
    form: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form',
        childPath: 'responses'
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
		ref: "User",
        childPath: 'responses',
        autopopulate: true
    },

	question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Question",
        childPath: 'responses',
	},

    answer_id: {
        type: mongoose.Schema.Types.ObjectId,
		ref: "AnswerVariant",
        autopopulate: false
    },

	answer: String
}, {timestamps: true});

ResponseSchema.plugin(relationship, { relationshipPathName: 'form' })
ResponseSchema.plugin(relationship, { relationshipPathName: 'user' })
ResponseSchema.plugin(relationship, { relationshipPathName: 'question' })
ResponseSchema.plugin(require('mongoose-autopopulate'));

module.exports = ResponseSchema;