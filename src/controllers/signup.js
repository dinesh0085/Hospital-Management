const { hashPassword } = require("./user.controller");
const userModel=require("../model/user.model")

const signup=async (req,res)=>{
    let {name,email,password} = req.body;
    
    // Hashing password with hashPassword function
    
    password=await hashPassword(password)

    try{
        const user=new userModel({name,email,password});
        await user.save()
        res.status(201).send({msg:"User registration successfull",error:false,data:user})
    }catch(e){
        res.status(201).send({msg:e.message,error:true})
    }
}

module.exports=signup