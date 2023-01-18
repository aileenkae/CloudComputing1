const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const session = require("express-session");
const controllers = require('./controller');

const app = express();

require("dotenv").config({path: "./config.env"});

app.use(cors());
app.use(express.json());


app.use(
    session({secret: "Our little secret.", resave: false, saveUninitialized: false})
);

const port = process.env.PORT || 6000;

app.listen(port, () => {
    mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`Conneted to mongoDB at ${process.env.ATLAS_URI}`);
    });

    console.log(`Server is running on port: ${port}`);
});

app.use('/', controllers.userController);
app.use('/forms', controllers.formController);
app.use('/responses', controllers.responseController)
app.use('/statistic', controllers.statisticController)
