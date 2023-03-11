const userModel=require("../model/user.model");
const { comparePassword, generateToken } = require("./user.controller");


const login=async (req,res)=>{
    
    const {email,password} = req.body;
    const user=await userModel.findOne({email});
    try{
     if(user){

        // comparing input password with database password 
      const comparePasswordWithDb=await comparePassword(password,user.password)

      if(comparePasswordWithDb){
        // json web token generation with user id
        const jwt_token=await generateToken(user._id)
        res.status(200).send({msg:"User login successfull",error:false,token:jwt_token})
      }else{
        res.status(400).send({msg:"User login failed (wrong password)",error:true})
      }
     }else{
        res.status(400).send({msg:"User login failed (user not registred)",error:true})
     }
    }catch(e){
        res.status(400).send({msg:e.message,error:true})
    }
}

module.exports=login