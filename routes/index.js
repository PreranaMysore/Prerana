'use-strict';
const express = require('express');
var _ = require('underscore');
const router = express.Router();
const errors = require('../helpers/errors');
const firebase = require('../config').firebase;
var bodyParser = require('body-parser');
var app = express();	
const userHandler = require('../handlers/user-handler');
const json = require('../utils/json-response');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));



router.post('/signup', (req,res) => {
	if(!_.has(req.body, 'password') && !_.has(req.body, 'email')){
	    console.log("No Proper body parameters",req.body.username);
       }
    else{
          userHandler.signup(req.body, (error, data) => {
           if(error){
           	
             return json(res, error, null);
            } 
           else{
    	        return json(res, null, data);
            }
         });
        } 
});



router.post('/login', (req,res) => {
  if(!_.has(req.body, 'password') && !_.has(req.body, 'email')){
      console.log("No Proper body parameters",req.body.username);
       }
    else{
          userHandler.login(req.body, (error, data) => {
           if(error){
            
             return json(res, error, null);
            } 
           else{
            console.log(data.role)
            if(data.role === 'staff'){
              res.message = "Staff login successfull";
            } else {
              res.message = "Student login successfull";
            }
            return json(res, null, data);
            }
         });
        } 
});






module.exports = router;
