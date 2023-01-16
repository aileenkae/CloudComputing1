const express = require("express");
const Form = require('../database/models/form.model');
const Question = require('../database/models/question.model');
const AnswerVariants = require('../database/models/answer_variants.model');
const Response = require('../database/models/response.model');
const mongoose = require('mongoose');
const auth = require("../middleware/auth");

const ObjectId = mongoose.Types.ObjectId;

const formController = express.Router();

formController.get('/', auth, async (req, res) => {
    try {
        let forms = await Form.find({user: req.user});
        res.send(forms);
    } catch (e) {
        res.send(e);
    }
})

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

formController.delete("/:id", auth, async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const form = await Form.findById(id)

        if (form == null) {
            res.status(404).send('Form not found or already deleted');
        } else {
            if (form.user.equals(req.user)) {
                form.remove(async function (err) {
                    if (err) {
                        return res.status(500).send(err)
                    }

                    await Response.deleteMany({form: id})
                    await AnswerVariants.deleteMany({form: id})
                    await Question.deleteMany({form: id})

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

formController.put("/:id", auth, async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        let {name, description, questions} = req.body;

        let form = await Form.findOne(id)

        Question.deleteMany({form: form._id}, function (err) {
            console.log(err)
        })
        AnswerVariants.deleteMany({form: form._id}, function (err) {
            console.log(err)
        })

        form.name = name
        form.description = description

        form.save()

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
        res.send(error)
    }
})

module.exports = formController