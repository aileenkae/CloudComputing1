var mongoose = require('mongoose');

// const mongoosePaginate = require('mongoose-paginate-v2');

var FormSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    name: String,

    description: {
        type: String,
        default: ""
    },

    // questions: [
    //     {
    //         //A boolean indicating whether the question is open-ended or not.
    //         open: {
    //             type: Boolean,
    //             default: false
    //         },

    //         //The text of the question.
    //         questionText: String,

    //         //An optional image associated with the question.
    //         questionImage: {
    //             type: String,
    //             default: ""
    //         },

    //         // An array of objects representing the options for a multiple-choice question.
    //         // Each option has the following properties:
    //         options: [
    //             {
    //                 optionText: String,
    //                 optionImage: {
    //                     type: String,
    //                     default: ""
    //                 }
    //             }
    //         ]
    //     }
    // ],

    stared: {
        type: Boolean,
        default: false
    },

    formType: {
        type: String,
        default: "anonymous"
    }

}, {timestamps: true});

// FormSchema.plugin(mongoosePaginate);

module.exports = FormSchema;