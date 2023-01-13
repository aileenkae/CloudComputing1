const mongoose = require('mongoose');

const FormSchema = require('../schemas/form.schema');

const Form = new mongoose.model('Form', FormSchema);

FormSchema.post("remove", function(doc) {
    console.log("remove from observe")
});

FormSchema.post("create", function(doc) {
    console.log("create from observe")
});

module.exports = Form
