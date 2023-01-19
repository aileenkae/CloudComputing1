const mongoose = require('mongoose');
const userSchema = require('../schemas/user.schema');
// User is a model that is used to create a new user
const User = new mongoose.model("User", userSchema);

module.exports = User