const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();

require("dotenv").config({path: "./config.env"});

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// get driver connection
// const dbo = require("./db/conn");
app.use(
  session({secret: "Our little secret.", resave: false, saveUninitialized: false})
);


app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes/record"));


app.listen(port, () => {
    // perform a database connection when server starts
    // dbo.connectToServer(function (err) {
    //     if (err) 
    //         console.error(err);
    //     }
    // );
    console.log(`Server is running on port: ${port}`);
});

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// console.log(mongoose)

// mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema(
    {username: String, name: String, googleId: String, secret: String}
);

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

//DeserializeUser gets called everytime when a route is hitted at backend server


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


app.get(
    "/auth/google",
    passport.authenticate("google", {scope: ["profile"]})
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", {failureRedirect: "http://localhost:3000"}),
    function (req, res) {
        // Successful authentication, redirect secrets.
        res.redirect("http://localhost:3000");
    }
);

app.get("/logout", function (req, res) {
    res.redirect("http://localhost:3000/");
});
