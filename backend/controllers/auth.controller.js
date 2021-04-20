// const express = require("express");

//const service=require("../services/auth.service");
const {signinService,signupService}=require("../services/auth.service");

//TODO:Signup controllers
const signupController = async (req,res) =>{
   try {
      //const newUser=await signupController(req.body);
      const {result,success}=await signupService(req.body); //var if the  short hand wont work
      //if(!newUser) throw new Error("User has not been saved successfully");
      if(!success) return res.status(400).json({result,
         success,
         msg:"User Create/save failed"
      });
      return res.status(201).json({result,
         success,
         msg:"User has been created"
      });
   } catch (error) {
      return res.status(500).json({result:error.message,
         success:false,
         msg:"internal server error"
      });
   }
};

//TODO :Signin controllers
const signinController=(req,res)=>{}

module.exports={
   signinController,
   signupController,                                        //"put imports and exports first" - Kaveen
}