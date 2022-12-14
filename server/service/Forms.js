//interact with the collections in the database
const FormModel = require('../db/Form')
const UserModel = require('../db/User')
const ResponseModel = require('../db/Response')
//for working with JSON web tokens (JWTs)
const jwt = require('jsonwebtoken');
//to extract the payload of a JWT, which typically contains information about the authenticated user
const jwtDecode = require('jwt-decode');

//handle different HTTP requests to different URLs

module.exports = {
//returns all forms in the database
    formsGet : async(req,res)=>{
        try{
//.find() = retrieve all forms and sends them as a JSON object in the response
            var result = await FormModel.find().lean();
            res.send(result);
        }catch(e) {
            res.send(e);
        }
    },
//handles a POST request to the /createForm URL, and it creates a new form using the FormModel object provided by the FormModel module.
    createForm: async(req,res)=>{     
        try {
             var data = {
                createdBy : req.body.createdBy,
                name: req.body.name,
                description: req.body.description
             }
//saves it to the database using the save method, and sends the saved form as a JSON object in the response
            var newForm = new FormModel(data)
//After the FormModel object is saved, the function updates the user who created the form by adding the form's ID to the user's createdForms array
            await newForm.save().then((docs)=>{
                UserModel.updateOne(
//If this operation is successful, the function sends a JSON response containing the saved form
                    {_id: data.createdBy },
                    { $push: { createdForms: docs._id}})
                    .then(()=>{
                    console.log("Form id added to user details");
                }).catch(error => console.log("got some error"))  
                res.status(200).json(
                    docs
                );
            })

        } catch (error) {
            res.send(error)
        }
    },

    getFormById: async(req, res)=>{
        try {
            var formId = req.params.formId;

            await FormModel.findOne({_id: formId}).then(async(form)=>{
                 
                 if(form == null){
                     res.status(404).send('Form not found');
                 } else{ 
// it sends a 200 status code and a JSON object containing the found form in the response
                     res.status(200).json(form)
                 }
             })

        } catch (error) {
            res.send(error)
        }
    },
    
    deleteForm: async(req, res)=>{

        try {
            var formId = req.params.formId;
            var userId = req.params.userId;

            console.log(formId);
            console.log(userId);

            await FormModel.findOne({_id: formId}).then(async(form)=>{ 
                 console.log(form);
                if(form== null){
                    res.status(404).send('Form not found or already deleted');
                } else { 
//Before deleting the form, the function checks if the user who made the request is the owner of the form 
//by comparing the userId provided in the request with the createdBy property of the form
                    if(form.createdBy == userId){
                        form.remove(function(err) {
                            if(err) { return res.status(500).send(err) }
                            console.log('Form deleted');                 
                            return res.status(202).send("Form Deleted")
                          });                       
                    } 
                    else{
                        res.status(401).send("You are not the owner of this Form");
                    }
                }
            });
// If an error occurs during any other part of the function, it is caught and handled by the catch block at the end of the function.
        } catch (error) {
            
        }
    },

    editForm : async(req, res)=>{
        try {
            var  formId =  req.body.formId;
            var data = {
                name: req.body.name,
                description: req.body.description,
                questions: req.body.questions
            }

            console.log("Hi, I am from backend, this is form data that i recivied");
            

            console.log(data);
            

            FormModel.findByIdAndUpdate(formId, data ,{new: true} ,(err, result)=>{
                if(err){
                    res.status(500).send(err)
                }
//sends a 200 status code and a JSON object containing the updated form in the response
                else{
                    res.status(200).json(result)
                }
            });
           
        } catch (error) {
            res.send(error)
        }
    },
    //handles a GET request to the /getAllFormsOfUser/:userId URL and returns all forms created by the user with the specified ID
    getAllFormsOfUser: async(req, res)=>{
        try {
            var userId = req.params.userId;
            console.log(userId);
            await UserModel.findOne({_id:userId}).then(async(user)=>{
                if(user == null){
                    res.status(404).send('User not found');
                } else{ 
                   await FormModel.find().where('_id').in(user.createdForms).exec((err, records) => {
                       console.log(records);
       
                       res.status(200).json(records);
                   });
                }

             //   res.send(docs.createdForms)
            });

            
        } catch (error) {
            res.send(error)
        }
    },

    submitResponse : async(req, res)=>{
        try {
    //first create an object data containing the response data from the request's body
            var data = {
                formId: req.body.formId,
                userId: req.body.userId,
                response: req.body.response
            }
            console.log(data.formId);
            console.log(data.userId);
            
    //If the response data is not empty, the function creates a new ResponseModel object using the data and saves it 
    //to the database using the save method.      
            if (data.response.length > 0) {
                var newResponse = new ResponseModel(data)
               // console.log(newResponse);

    //If the response is saved successfully, the function sends a 200 status code and 
    //a JSON object containing the saved response in the response          
                await newResponse.save().then((docs)=>{              
                    res.status(200).json(
                        docs
                    );
                })
            } 
            else{
                res.status(400).send("FIll atleast one field, MF!"); 
            } 
        } catch (error) {
            res.send(error)
        }
    },
    //returns all responses in the database
    allResponses : async(req,res)=>{
        try{
    //.find() = retrieve all responses and sends them as a JSON object in the response
            var result = await ResponseModel.find().lean();
            res.json(result);     
        }catch(e){
            res.send(e);
        }
    },
    //returns all responses for the form with the specified ID
    getResponse: async(req, res)=>{
        try {
            var formId = req.params.formId;
         //   console.log(formId);
         
     //.find() = retrieve all responses for the specified form and sends them as a JSON object in the response.       
            await ResponseModel.find({formId: formId}).then(async(responses)=>{ 
                    res.status(200).json(responses)
            })

        } catch (error) {
            res.send(error)
        }
    }

}
