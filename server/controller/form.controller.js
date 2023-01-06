const express = require("express");
const ensureLogIn = require('connect-ensure-login').ensureLoggedIn;
const Form = require('../database/models/form.model');
const Question = require('../database/models/question.model');
const AnswerVariants = require('../database/models/answer_variants.model');
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
let ensureLoggedIn = ensureLogIn();

const formController = express.Router();

formController.get('/', ensureLoggedIn, async (req, res) => {
    try {
        let result = await Form.find({createdBy: req.user._id}).lean();
        res.send(result);
    } catch (e) {
        res.send(e);
    }
})

formController.get('/:id', ensureLoggedIn, async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);

        await Form.findById(id).then(async (form) => {
            if (form == null) {
                res.status(404).send('Form not found');
            } else {
                res.status(200).json(form)
            }
        })
    } catch (error) {
        res.send(error)
    }
})

formController.post('/', ensureLoggedIn, async (req, res) => {
    try {
        let data = {
            _id: new mongoose.Types.ObjectId(),
            createdBy: req.user._id,
            name: req.body.name,
            description: req.body.description
        }
        
        await Form.create(data).then((docs) => {
            req.body.questions.forEach(async question => {
                await Question.create({
                    _id: new mongoose.Types.ObjectId(),
                    fieldType: question.type,
                    question: question.question,
                    formId: docs._id
                }).then(questionDocs => {
                    if (question.type === 'multiselect') {
                        question.answers.forEach(async answer => {    
                            await AnswerVariants.create({
                                _id: new mongoose.Types.ObjectId(),
                                answer: answer.answer,
                                questionId: questionDocs._id
                            }).then(answerDocs => {
                                console.log('answer created')
                            })
                        })
                    }
                })
            });
            res.send(docs)
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

formController.delete("/:id", ensureLoggedIn, async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);

        await Form.findById(id).then(async (form) => {
            if (form == null) {
                res.status(404).send('Form not found or already deleted');
            } else {
                if (form.createdBy.equals(req.user._id)) {
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
        });

    } catch (error) {}
})

formController.put("/:id", ensureLoggedIn, async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);

        let data = {
            name: req.query.name,
            description: req.query.description
        }

        Form.findByIdAndUpdate(id, data, {
            new: true
        }, (err, result) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json(result)
            }
        });

    } catch (error) {
        res.send(error)
    }
})

module.exports = formController