const mongoose = require('mongoose');

const FormSchema = require('../schemas/form.schema');
// Form is a model that is used to create a new form
const Form = new mongoose.model('Form', FormSchema);
//Remove all responses when form is removed
FormSchema.post("remove", function(doc) {
    console.log("remove from observe")
});
//Create all responses when form is created
FormSchema.post("create", function(doc) {
    console.log("create from observe")
});

module.exports = Form
