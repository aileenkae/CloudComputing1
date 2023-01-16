const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");

const ResponseSchema = new mongoose.Schema({
    form: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form',
        childPath: 'responses'
    },

    user: { //Creating a ObjectID for the user
        type: String,
		ref: "User",
        childPath: 'responses'
    },

	question: { //Creating a ObjectID for the question
		type: String,
		ref: "Question",
        childPath: 'responses' //with this childPath, we can access the responses of the question
	},

	answer: String
}, {timestamps: true});
//plugin is used to create the relationship between the form and the responses
ResponseSchema.plugin(relationship, { relationshipPathName: 'form' })
ResponseSchema.plugin(relationship, { relationshipPathName: 'user' })
ResponseSchema.plugin(relationship, { relationshipPathName: 'question' })
ResponseSchema.plugin(require('mongoose-autopopulate'));

module.exports = ResponseSchema;