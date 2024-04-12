const Vendor = require('../models/vendor')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
dotEnv.config({path: './config/.env'})

const VendorRegister = async(req , res)=>{
  const {username, email , password} = req.body
  try{
   const vendorEmail = await Vendor.findOne({email})
   if(vendorEmail){
    return res.status(400).json('email already taken')
   }
   const hashedpassword = await bcrypt.hash(password ,10)

   const newVendor = new Vendor({
     email,
     username,
     password : hashedpassword
   })
   await newVendor.save()
   res.status(201).json({message: 'vendor regidtered succesfully'})
   console.log('regidtered sucssfully')
  }catch(err){
   console.error(err)
   res.status(500).json({error : 'internal server error'})
  }

}

const vendorLogin = async(req, res)=>{
 const{email, password}= req.body
 try{
  const vendor = await Vendor.findOne({email})
  if(!vendor || !(await bcrypt.compare(password, vendor.password))){
   return res.status(401).json({error:'invalid password or email'})
  }
  const token = jwt.sign({vendorId: Vendor._id},process.env.MY_KEY,{expiresIn:'1h'})
  res.status(200).json({success: 'login successful',token})
  console.log(email ,`the token ${token}`)
 }catch(err){
  res.status(401).json({error: 'internal server error'})
 console.log(err)

 }
}
module.exports = {VendorRegister , vendorLogin}