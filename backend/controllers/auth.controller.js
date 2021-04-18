 const express = require("express");

const service=require("../services/auth.service");
//const {signinService,signupService}=require("../services/auth.service");

//TODO:Signup controllers
const signupController = (req,res) =>{}

//TODO :Signin controllers
const signinController=(req,res)=>{}

module.exports={
   signinController,
   signupController,                                        //"put imports and exports first" - Kaveen
}