const bcript=require("bcryptjs")
const jwt=require("jsonwebtoken")

const hashPassword=async (password)=>{
    const hashPassword=await bcript.hash(password,10)
    return hashPassword
}

const comparePassword=async (password,dbPassword)=>{
    const compare=await bcript.compare(password,dbPassword)
    return compare
}

const generateToken=async (id)=>{
    const jwt_token=await jwt.sign({id},"SECRET_KEY",{
        expiresIn:"1 day"
    })
    return jwt_token
}

module.exports={hashPassword,comparePassword,generateToken}