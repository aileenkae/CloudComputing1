const mongoose = require('mongoose');

const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 5
    },

    name: {
        type: String
    },

    forms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Form"
    }],

    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response"
    }],
});

userSchema.plugin(findOrCreate);
userSchema.plugin(require('mongoose-autopopulate'));

module.exports = userSchema;
