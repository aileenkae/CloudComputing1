const express = require("express");
const Response = require('../database/models/response.model'); //this is getting the Response model from the response.model.js file
const mongoose = require('mongoose'); //this is getting the mongoose module from the node_modules folder

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
//This function post the responses to the database
responseController.post('/', async (req, res) => {
    try {
        req.body.forEach(async answer => {
            let data = { //this is creating a new response object named data with the following properties
                _id: new mongoose.Types.ObjectId(), //OBJECTID is created by mongoose
                userId: new mongoose.Types.ObjectId(),
                questionId: answer.question_id, //answer.question_id is coming from the frontend
                answer: answer.answer_id, //answer.answer_id is coming from the frontend
                formId: answer.form_id //answer.form_id is coming from the frontend
            }
            //this is creating a new response object in the database
            await Response.create(data).then((docs) => {
                res.status(200).send(docs)
            })
        })
        //this is sending the response to the frontend
    } catch (error) {
        console.log(error) //this is logging the error to the console,if there is any error
        res.status(400).send(error)
    }
})
//exporting the router where we have all the routes to be used in server.js
module.exports = responseController