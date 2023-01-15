const mongoose = require('mongoose'); //This is used to create the user collection in the database
const userSchema = require('../schemas/user.schema'); //this is comming from the user.schema.js file

const User = new mongoose.model("User", userSchema); //This is creating a new model named User using the userSchema

module.exports = User //Exporting the User model in index.js