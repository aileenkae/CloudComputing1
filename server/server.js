const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const session = require("express-session");
const controllers = require('./controller');

const app = express();

require("dotenv").config({path: "./config.env"}); //this is getting the config.env file for the environment variables

app.use(cors()); //this is allowing us to use cors
app.use(express.json()); //this is allowing us to use json


app.use( //this is allowing us to use sessions and cookies
    session({secret: "Our little secret.", resave: false, saveUninitialized: false})
);

const port = process.env.PORT || 6000; //this is getting the port from the environment variables

app.listen(port, () => { //this is listening to the port, and then connecting to the database
    mongoose.connect(process.env.ATLAS_URI, { //this is connecting to the database
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { //this is logging that we are connected to the database
        console.log(`Conneted to mongoDB at ${process.env.ATLAS_URI}`);
    });

    console.log(`Server is running on port: ${port}`); //this is logging that we are connected to the server
});

app.use('/', controllers.userController); //this is using the userController from the user.controller.js file
app.use('/forms', controllers.formController); //this is using the formController from the form.controller.js file
app.use('/response', controllers.responseController) //this is using the responseController from the response.controller.js file