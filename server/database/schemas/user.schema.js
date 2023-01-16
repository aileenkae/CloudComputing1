const mongoose = require('mongoose');
//mongoose-findorcreate is used to find or create a user in the database
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
    email: { //This is the email of the user
        type: String,
        required: true,
        unique: true
    },

    password: { //This is the password of the user
        type: String,
        required: true,
        minlength: 5 //This is the minimum length of the password
    },

    name: {
        type: String
    },

    forms: [{ //Array of forms to store the forms of the user
        type: mongoose.Schema.Types.ObjectId,
        ref: "Form"
    }],

    responses: [{ //Array of responses to store the responses of the user
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response"
    }],
});

userSchema.plugin(findOrCreate);
userSchema.plugin(require('mongoose-autopopulate'));

module.exports = userSchema;
