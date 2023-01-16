const mongoose = require('mongoose');
const ResponseSchema = require('../schemas/response.schema'); //this is comming from the response.schema.js file

const Response = new mongoose.model('Response', ResponseSchema); //This is creating a new model named Response using the ResponseSchema

module.exports = Response
