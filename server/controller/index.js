// This file is used to export all the controllers to be used in server.js
const userController = require('./user.controller') //this is getting the userController from the user.controller.js file
const formController = require('./form.controller') //this is getting the formController from the form.controller.js file
const responseController = require('./response.controller') //this getting the responseController from the response.controller.js file
//exporting the router where we have all the routes to be used in server.js
module.exports = { userController, formController, responseController }