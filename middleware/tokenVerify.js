const vendor = require('../models/vendor')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
dotEnv.config({path:'./config/.env'})

const tokenVerify = async(req,res,next)=>{
 
}