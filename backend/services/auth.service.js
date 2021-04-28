const User=require("../models/user");

//TODO Signup service
const signupService=async (payload)=>{
    const {name,email,password}=payload;

    //create new user model
    const user= new User({name,email,password});

    //save to database
    try {
        const newUser= await user.save();
        if(!newUser) throw Error("User has not been saved succesfully");
        return{result:newUser,success:true};
    } catch (error) {
        return{result:error.message,succuss:false};
    }
   
};

//TODO Signin service
const signinService= async (payload)=>{
       const {email,password}=payload;
      try {
        const user= await User.findOne({email,password});
        if (!user) throw new Error("User not found, Please signup");
        return{result:user,success:true}
      } catch (error) {
          return{result:error.message,success:false};
      }
       
};

module.exports={
    signupService,
    signinService,
}; 

//payload is passable as request body