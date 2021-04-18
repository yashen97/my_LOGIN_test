const mongoose=require("mongoose");

const userSchema=new  mongoose.Schema({
name:String,
email:String,
password:String
});

const User =mongoose.model("User",userSchema,"users"); //model name,Schema name,mono collection name if you need

module.exports=User;