const express=require("express");
const login = require("../controllers/login");
const signup = require("../controllers/signup");
const { userAlreadyPresentEmail } = require("../middleware/user.middleware");

const app=express.Router()

app.post("/signup",userAlreadyPresentEmail,signup)
app.post("/login",login)

module.exports=app