const mongoose = require('mongoose');
//This is creating a new model named Form using the FormSchema. From the form.schema.js file
const FormSchema = require('../schemas/form.schema');
//This is creating a new model named Form using the FormSchema
const Form = new mongoose.model('Form', FormSchema);
//FormSchema.post is used to observe the changes in the database
FormSchema.post("remove", function(doc) {
    console.log("remove from observe")
});

FormSchema.post("create", function(doc) {
    console.log("create from observe")
});

module.exports = Form //Exporting the Form model in index.js
