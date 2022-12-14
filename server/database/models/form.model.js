const mongoose = require('mongoose');
const FormSchema = require('../schemas/form.schema');

const Form = new mongoose.model('Form', FormSchema);

module.exports = Form
