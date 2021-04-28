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
         msg:"internal server error @signupcontroller"
      });
   }
};

//TODO :Signin controllers
const signinController=async (req,res)=>{
   try {
      const{result,success}=await signinService(req.body);
      if(!success) return res.status(400).json({result,
         success,
         msg:"User not found"
      });
      return res.status(200).json({result,
         success, msg:"User has been signed up"
      });
   } catch (error) {
      return res.status(500).json({ 
        result:error.message,success:"fasle",msg:"Internal server error @signincontroller"
      });
   }
}

module.exports={
   signinController,
   signupController,                                        //"put imports and exports first" - Kaveen
}