const express = require("express");
const passport = require("passport");
const User = require('../database/models/user.model')

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const userController = express.Router();

require("dotenv").config({path: "./config.env"});

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
}, function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate({
        googleId: profile.id,
        username: profile.id
    }, function (err, user) {
        return cb(err, user);
    });
}));

userController.get(
    "/auth/google",
    passport.authenticate("google", {scope: ["profile"]})
);

userController.get(
    "/auth/google/callback",
    passport.authenticate("google", {failureRedirect: "http://localhost:3000/home"}),
    function (req, res) {
        // Successful authentication, redirect secrets.
        res.redirect("http://localhost:3000/home");
    }
);

userController.get("/logout", function (req, res) {
    res.redirect("http://localhost:3000/");
});

module.exports = userController