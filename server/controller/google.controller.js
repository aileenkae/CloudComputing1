// Description: This file contains the logic for the google authentication
const express = require("express");
const passport = require("passport");
const User = require('../database/models/user.model')

// Google Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Creating an express Router
const userController = express.Router();

// Path: server\controller\google.controller.js
require("dotenv").config({path: "./config.env"});

passport.use(User.createStrategy());

// serialize and deserialize
passport.serializeUser(function (user, done) {
    done(null, user.id);    // user.id is the unique identifier for the user    
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user); // user is the object of the current user
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID, 
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
}, function (accessToken, refreshToken, profile, cb) {
    console.log(profile)
    // find a user in our database with the googleId
    User.findOrCreate({
        googleId: profile.id,
        username: profile.name.givenName
    }, function (err, user) {
        return cb(err, user);
    });
}));
// Path: server\controller\google.controller.js
userController.get(
    "/auth/google",
    passport.authenticate("google", {scope: ["profile"]}) // scope is the data we want to access from the user's profile
);

userController.get( // callback route for google to redirect to
    "/auth/google/callback",
    passport.authenticate("google", {failureRedirect: "http://localhost:3000/home"}),
    function (req, res) {
        res.redirect("http://localhost:3000/home");
    }
);
//exporting the router where we have all the routes to be used in server.js
module.exports = userController 