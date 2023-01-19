const mongoose = require('mongoose');
const ResponseSchema = require('../schemas/response.schema');
// Response is a model that is used to create a new response
const Response = new mongoose.model('Response', ResponseSchema);

module.exports = Response
