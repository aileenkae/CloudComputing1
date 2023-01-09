const express = require("express");
const User = require('../database/models/user.model')

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const userController = express.Router();

require("dotenv").config({path: "./config.env"});

userController.get("/logout", function (req, res) {
    req.logout()
    res.redirect("http://localhost:3000/");
});

userController.post("/register", async (req, res) => {
    try {
        let {email, password, passwordCheck, name} = req.body;

        if (!email || !password || !passwordCheck) 
            return res.status(400).json({msg: "Not all fields have been entered."});
        if (password.length < 5) 
            return res.status(400).json({msg: "The password needs to be at least 5 characters long."});
        if (password !== passwordCheck) 
            return res.status(400).json({msg: "Enter the same password twice for verification."});

        const existingUser = await User.findOne({email: email});

        if (existingUser) 
            return res.status(400).json({msg: "An account with this email already exists."});

        if (!name) 
            name = email;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({email, password: passwordHash, name});
        const savedUser = await newUser.save();

        res.json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Login
userController.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) 
            return res
                .status(400)
                .json({msg: "Not all fields have been entered."});

        const user = await User.findOne({email: email});

        if (!user) 
            return res
                .status(400)
                .json({msg: "No account with this email has been registered."});
                
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) 
            return res
                .status(400)
                .json({msg: "Invalid credentials."});
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name
            }
        });
    } catch (err) {
        res
            .status(500)
            .json({error: err.message});
    }
});

// Delete
userController.delete("/delete", auth, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch (err) {
        res
            .status(500)
            .json({error: err.message});
    }
});

// Check if token is valid
userController.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) 
            return res.json(false);
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) 
            return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) 
            return res.json(false);
        return res.json(true);
    } catch (err) {
        res
            .status(500)
            .json({error: err.message});
    }
});

userController.get("/me", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({email: user.email, name: user.name, id: user._id});
});

module.exports = userController
