const express=require("express");
const router=express.Router();      //initialise router
const {
    signinController,
    signupController
}=require("../controllers/auth.controller");

//const controllers = require("../controllers/auth.controller");


//TODO:Router signin
router.post("/signup",signinController); //send the post req to signin page

//TODO:Router signup
router.post("/signin",signupController);



module.exports=router; //export route to the other shit