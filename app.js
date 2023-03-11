const express=require("express")
const session=require("express-session")
const cookie=require("cookie-parser")
const path=require("path")
const ejs=require("ejs")
const multer=require("multer")
const async=require("async")
const nodemailer=require("nodemailer")
const crypto=require("crypto")
const expressValidator=require("express-validator")
const sweetalert=require("sweetalert2")
const bodyParser=require("body-parser")
const http=require("http")
require("dotenv").config()
const connect=require("./src/database/dbConnect")
const PORT=process.env.PORT || 8080
const userRoute=require("./src/routes/user.route")
const deptRoute=require("./src/routes/department.route")

const app=express()

app.set("view engine","ejs")


const server=http.createServer(app)

app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookie())

app.use("/user",userRoute)
app.use("/department",deptRoute)

server.listen(PORT,async()=>{
    try{
        await connect()
        console.log("Database connected");
    }catch(e){
        console.log("Database not Connected");
    }
    console.log("Server Started Successfully on port"+" "+PORT);
})