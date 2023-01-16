const express = require("express");
const User = require('../database/models/user.model') //this is getting the User model from the user.model.js file

const bcrypt = require("bcrypt"); //this is getting the bcrypt module from the node_modules folder
const jwt = require("jsonwebtoken"); //this is getting the jsonwebtoken module from the node_modules folder
const auth = require("../middleware/auth"); //this is getting the auth middleware from the auth.js file

const userController = express.Router();

require("dotenv").config({path: "./config.env"});
// userController is the router where we have all the routes, we are exporting it to be used in server.js
userController.get("/logout", function (req, res) {
    req.logout()
    res.redirect("http://localhost:3000/"); // redirecting to the home page
});

//register a new user, this is a post request, we are using async await to handle the promises
userController.post("/register", async (req, res) => {
    try {
        let {email, password, passwordConfirmation, name} = req.body;

        if (!email || !password || !passwordConfirmation) 
            return res.status(400).json({msg: "Not all fields have been entered."});
        if (password.length < 5) 
            return res.status(400).json({msg: "The password needs to be at least 5 characters long."});
        if (password !== passwordConfirmation) 
            return res.status(400).json({msg: "Enter the same password twice for verification."});

        const existingUser = await User.findOne({email: email});

        if (existingUser) 
            return res.status(400).json({msg: "An account with this email already exists."});

        if (!name) 
            name = email;

        const salt = await bcrypt.genSalt(); 
        const passwordHash = await bcrypt.hash(password, salt); //this is for hashing the password
        const newUser = new User({email, password: passwordHash, name}); //newUser is the new user object with the following properties
        const savedUser = await newUser.save(); //this is saving the newUser object to the database

        res.json(savedUser); //this is sending the savedUser object to the frontend as a response in json format
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Login
userController.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body; //this is getting the email and password from the frontend that is sent as a request
        if (!email || !password) //if the email or password is not entered, this will send a response to the frontend
            return res //this is sending the response to the frontend
                .status(400) //if not all fields have been entered, this will send a status code of 400
                .json({msg: "Not all fields have been entered."}); //this is sending a message to the frontend

        const user = await User.findOne({email: email}); //This is a mongoose method that is used to find a user with the email that is entered in the frontend

        if (!user) //if the user is not found, this will send a response to the frontend
            return res
                .status(400)
                .json({msg: "No account with this email has been registered."});
        //await is used to wait for the promise to be resolved and bcrypt.compare is used to compare the password that is entered in the frontend with the password that is stored in the database
        const isMatch = await bcrypt.compare(password, user.password); 
        if (!isMatch) //if the password is not matched, this will send a response to the frontend
            return res
                .status(400)
                .json({msg: "Invalid credentials."});
        const token = jwt.sign({ //this is used to create a token
            id: user._id
        }, process.env.JWT_SECRET);
        res.json({ //this is sending the token to the frontend and the user object
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
    try { //this is used to delete the user from the database
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

//This is used to get the user data from the database for the frontend
userController.get("/me", auth, async (req, res) => {
    const user = await User.findById(req.user); 
    res.json({email: user.email, name: user.name, id: user._id});
});

module.exports = userController
