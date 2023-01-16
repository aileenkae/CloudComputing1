const express = require("express");
const Form = require('../database/models/form.model');
const Question = require('../database/models/question.model');
const AnswerVariants = require('../database/models/answer_variants.model');
const mongoose = require('mongoose');
const auth = require("../middleware/auth");

// Creating ObjectId variable to convert string to Mongo ObjectId
const ObjectId = mongoose.Types.ObjectId;

// Creating an express Router
const formController = express.Router();

// GET '/': retrieves all forms associated with the authenticated user.
formController.get('/', auth, async (req, res) => {
    try {
        let forms = await Form.find({user: req.user});
        res.send(forms);
    } catch (e) {
        res.send(e);
    }
})

// GET '/:id': retrieves a specific form by its id, but only if it belongs to the authenticated user.
formController.get('/:id', auth, async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);

        await Form
            .findById(id)
            .then(async (form) => {
                if (form == null || !form.user.equals(req.user)) {
                    res
                        .status(404)
                        .send('Form not found');
                } else {
                    res
                        .status(200)
                        .json(form)
                }
            })
    } catch (error) {
        res.send(error)
    }
})

/* 
1. We create a form with a user, name, and description fields. 
2. Then we loop through the questions array and create a question for each question in the array.
3. If the field type is radiobutton, we loop through the answer variants and create a new answer variant for each answer variant. */
formController.post('/', auth, async (req, res) => {
    try {
        let {name, description, questions} = req.body;

        if (!name) 
            return res.status(400).json({msg: "Please fill name field"});

        let form = await Form.create({
            user: req.user,
            name: name,
            description: description
        });

        questions.forEach(async question => {
            let newQuestion = await Question.create({
                fieldType: question.fieldType,
                question: question.question,
                form: form._id
            });

            if (question.fieldType === 'radiobutton') {
                question.answer_variants.forEach(async answer => {
                    await AnswerVariants.create({
                        answer: answer.answer,
                        question: newQuestion._id,
                        form: form._id
                    });
                })
            }
        })

        res.send(form)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Function to delete Forms with ID
//if the form is not found or already deleted, we return a 404 status code.
//if the form is found, we check if the user is the owner of the form. If not, we return a 401 status code.
//if the user is the owner of the form, we delete the form and return a 202 status code.
//if there is an error, we return a 500 status code.
//if the form is not found, we return a 404 status code.
formController.delete("/:id", auth, async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const form = await Form.findById(id)

        if (form == null) {
            res.status(404).send('Form not found or already deleted');
        } else {
            if (form.user.equals(req.user)) {
                form.remove(function (err) {
                    if (err) {
                        return res.status(500).send(err)
                    }

                    return res.status(202).send("Form Deleted")
                });
            } else {
                res.status(401).send("You are not the owner of this Form");
            }
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

//Function to update Forms with ID
formController.put("/:id", auth, async (req, res) => {
    try {
        // Creating ObjectId variable to convert string to Mongo ObjectId
        const id = new ObjectId(req.params.id);
        let {name, description, questions} = req.body;
        // Finding form by id
        let form = await Form.findOne(id)
        // If form is not found, return 404 status code
        Question.deleteMany({form: form._id}, function (err) {
            console.log(err)
        })
        // If form is not found, return 404 status code
        AnswerVariants.deleteMany({form: form._id}, function (err) {
            console.log(err)
        })
        // If form is not found, return 404 status code
        form.name = name
        form.description = description
        // Saving form
        form.save()
        // Looping through questions array
        questions.forEach(async question => {
            let newQuestion = await Question.create({
                fieldType: question.fieldType,
                question: question.question,
                form: form._id
            });
            // If field type is radiobutton, loop through answer variants array
            if (question.fieldType === 'radiobutton') {
                question.answer_variants.forEach(async answer => {
                    await AnswerVariants.create({
                        answer: answer.answer,
                        question: newQuestion._id,
                        form: form._id
                    });
                })
            }
        })
        // Sending form
        res.send(form)
    } catch (error) {
        // Sending error
        res.send(error)
    }
})

// Exporting formController where it can be used in other files like server.js
module.exports = formController