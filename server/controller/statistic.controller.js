const express = require("express");
const Form = require('../database/models/form.model');
const mongoose = require('mongoose');
const auth = require("../middleware/auth");

const ObjectId = mongoose.Types.ObjectId;

const statisticController = express.Router();

statisticController.get('/:id', auth, async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);

        await Form
            .findById(id)
            .then(async (form) => {
                if (form == null) {
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

module.exports = statisticController