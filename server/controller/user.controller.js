const express = require("express");
const passport = require("passport");
const User = require('../database/models/user.model')

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const ensureLogIn = require('connect-ensure-login').ensureLoggedIn;

const userController = express.Router();
let ensureLoggedIn = ensureLogIn();

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
    callbackURL: "http://localhost:8000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
}, function (accessToken, refreshToken, profile, cb) {
    console.log(profile)

    User.findOrCreate({
        googleId: profile.id,
        username: profile.name.givenName
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

userController.get('/me', ensureLoggedIn, function(req, res) {
    return res.status(200).send(req.user);
})

userController.get("/logout", function (req, res) {
    req.logout()
    res.redirect("http://localhost:3000/");
});

module.exports = userController