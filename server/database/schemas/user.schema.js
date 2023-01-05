const mongoose = require('mongoose');

const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

module.exports = userSchema;





// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         default: null
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     googleId: {
//         type: String,
//         default: null
//     },
//     secret: {
//         type: String,
//         default: null
//     },
//     password: {
//         type: String
//     },
// });
