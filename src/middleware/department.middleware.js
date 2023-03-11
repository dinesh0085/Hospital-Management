const deptModel = require("../model/department.model");


const departmentAlreadyPresent=async (req,res,next)=>{
    const {department} = req.body;
    const department_present=await deptModel.findOne({department});
    try{
     if(department_present){
         res.send({msg:`${department} Department already Present `,error:true})
     }else{
         next()
     }
    }catch(e){
     res.send({msg:e.message,error:true})
 
    } 
 }

 module.exports={departmentAlreadyPresent}