const mongoose = require('mongoose');
const AnswerVariantsSchema = require('../schemas/answer_variants.schema');

const AnswerVariants = new mongoose.model('AnswerVariants', AnswerVariantsSchema);

module.exports = AnswerVariants
