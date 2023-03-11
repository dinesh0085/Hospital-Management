const mongoose=require("mongoose")

const deptSchema=new mongoose.Schema({
    department:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})

const deptModel=mongoose.model("department",deptSchema)

module.exports=deptModel