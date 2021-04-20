const mongoose=require("mongoose");

const userSchema=new  mongoose.Schema({
name:String,
email:{
    type:String,
    required:true      //you can write rules here how this model should be
},
password:String           // or like this the short hand method just the type
});

const User =mongoose.model("User",userSchema,"users"); //model name,Schema name,mono collection name if you need

module.exports=User;