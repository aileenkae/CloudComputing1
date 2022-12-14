//provides a simple and easy-to-use API for defining models and interacting with the database
var mongoose = require('mongoose');
// A plugin for Mongoose that provides pagination support for querying data from the database
const mongoosePaginate = require('mongoose-paginate-v2');

var ResponseSchema = new mongoose.Schema({

    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Form'
    },
  
    userId: {
      type: String    
    },
  //An array of objects representing the responses to each question in the form
    response : [{
        //The ID of the question that was answered
        questionId: String,
        //The ID of the option that was selected (if the question is multiple choice).
        optionId: String,
    }],
        //will automatically be set to the current date and time when a new Response object is created
   }, {timestamps: true});
        //to enable pagination for the Response model
  ResponseSchema.plugin(mongoosePaginate);
        //create a Response model, which is then exported for use in other parts of the application
  Response = mongoose.model('Response', ResponseSchema ,'Response');
  
  module.exports = Response;