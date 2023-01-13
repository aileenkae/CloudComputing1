const express = require("express");
const Response = require('../database/models/response.model');
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const responseController = express.Router();

responseController.get('/by-form/:formId', async (req, res) => {
    try {
        const formId = new ObjectId(req.params.formId);

        const responses = await Response.find({formId: formId}).lean();

        res.send(responses)
    } catch (error) {
        res.send(error)
    }
})

responseController.post('/', async (req, res) => {
    try {
        req.body.forEach(async answer => {
            let data = {
                _id: new mongoose.Types.ObjectId(),
                userId: new mongoose.Types.ObjectId(),
                questionId: answer.question_id,
                answer: answer.answer_id,
                formId: answer.form_id
            }

            await Response.create(data).then((docs) => {
                res.status(200).send(docs)
            })
        })

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = responseController