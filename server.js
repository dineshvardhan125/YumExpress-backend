const express = require('express')
const app = express()
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const vendoroutes = require('./routes/vendorRoute')
const bodypaser = require('body-parser')
const uri = process.env.MONGO_URI
const port = process.env.PORT

dotEnv.config({path: './config/.env'})

mongoose.connect(uri)
.then(()=>{
 console.log('db connected..')
})
.catch((error) =>{
 console.log(error)
})
app.use(bodypaser.json())

app.use('/vendor' , vendoroutes)

app.use('/home',(req,res)=>{
 res.send("hello guys")
})

app.listen( port, ()=>{
 console.log(`server is running at ${port}`)
})