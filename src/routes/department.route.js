const express=require("express");
const addDepartment = require("../controllers/addDepartment");
const { departmentAlreadyPresent } = require("../middleware/department.middleware");


const app=express.Router()

app.post("/add",departmentAlreadyPresent,addDepartment)


module.exports=app