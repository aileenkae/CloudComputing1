const mongoose = require('mongoose');
const userSchema = require('../schemas/user.schema');

const User = new mongoose.model("User", userSchema);

module.exports = User