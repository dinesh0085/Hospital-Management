const userModel=require("../model/user.model")

// const userAlreadyPresentUsername=async (req,res,next)=>{
//     const {e} = req.body;
//     const user=await userModel.findOne({username});
//     console.log(user);
//     try{
//      if(user){
//          res.send({msg:`User already registred with ${username}`,error:true})
//      }else{
//          next()
//      }
//     }catch(e){
//      res.send({msg:e.message,error:true})
 
//     } 
//  }

 const userAlreadyPresentEmail=async (req,res,next)=>{
    const {email} = req.body;
    const user=await userModel.findOne({email});
    try{
     if(user){
         res.send({msg:`User already registred with ${email} `,error:true})
     }else{
         next()
     }
    }catch(e){
     res.send({msg:e.message,error:true})
 
    } 
 }

 module.exports={userAlreadyPresentEmail}