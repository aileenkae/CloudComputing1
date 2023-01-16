const express = require("express");
const Response = require('../database/models/response.model');
const AnswerVariants = require('../database/models/answer_variants.model');
const mongoose = require('mongoose');
const auth = require("../middleware/auth");
const ObjectId = mongoose.Types.ObjectId;

const responseController = express.Router();

//this is getting all the responses from the database by the form id
responseController.get('/by-form/:formId', async (req, res) => {
    try {
        const formId = new ObjectId(req.params.formId);

        const responses = await Response.find({formId: formId}).lean();

        res.send(responses)
    } catch (error) {
        res.send(error)
    }
})

responseController.post('/', auth, async (req, res) => {
    try {
        req.body.forEach(async answer => {
            let data = {
                _id: new mongoose.Types.ObjectId(),
                user: auth._id,
                question: answer.question_id,
                answer_id: answer.answer_id,
                answer: answer.answer,
                form: answer.form_id
            }

            const response = await Response.create(data)

            if (answer.type === "radiobutton") {
                const av = await AnswerVariants.findById(answer.answer_id)
                console.log()
                av.responses.push(response._id)

                av.save()
            }
        })

        res.send("Successfully stored!")

    } catch (error) {
        console.log(error) //this is logging the error to the console,if there is any error
        res.status(400).send(error)
    }
})
//exporting the router where we have all the routes to be used in server.js
module.exports = responseController