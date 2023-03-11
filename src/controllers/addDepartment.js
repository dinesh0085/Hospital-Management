const deptModel = require("../model/department.model");

const addDepartment=async(req,res)=>{
const {department,description} = req.body;
try{
    const dept=new deptModel({department,description});
    await dept.save()
    res.status(201).send({msg:"Department added successfully",error:false,data:dept})
}catch(e){
    res.status(201).send({msg:e.message,error:true})
}
}

module.exports=addDepartment