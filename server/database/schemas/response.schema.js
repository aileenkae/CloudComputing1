const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");

const ResponseSchema = new mongoose.Schema({
    form: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form',
        childPath: 'responses'
    },

    user: {
        type: String,
		ref: "User",
        childPath: 'responses'
    },

	question: {
		type: String,
		ref: "Question",
        childPath: 'responses'
	},

	answer: String
}, {timestamps: true});

ResponseSchema.plugin(relationship, { relationshipPathName: 'form' })
ResponseSchema.plugin(relationship, { relationshipPathName: 'user' })
ResponseSchema.plugin(relationship, { relationshipPathName: 'question' })
ResponseSchema.plugin(require('mongoose-autopopulate'));

module.exports = ResponseSchema;