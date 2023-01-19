const express = require("express");
const passport = require("passport");
const User = require('../database/models/user.model')
//Google Strategy is a passport strategy for authenticating with Google using the OAuth 2.0 API.
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const userController = express.Router();

require("dotenv").config({path: "./config.env"});
//Passport is a middleware that is used to authenticate requests
passport.use(User.createStrategy());
//SerializeUser determines which data of the user object should be stored in the session. The result of the serializeUser method is attached to the session as req.session.passport.user = {}
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
        res.redirect("http://localhost:3000/home");
    }
);

module.exports = userController