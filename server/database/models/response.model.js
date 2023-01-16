const mongoose = require('mongoose');
const ResponseSchema = require('../schemas/response.schema');

const Response = new mongoose.model('Response', ResponseSchema);

module.exports = Response
