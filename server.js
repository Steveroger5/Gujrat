const express = require('express')
const app = express()
const cors =require('cors')
const db = require('./config/db')
app.use(express.json())
app.use(cors()) 
db()

app.use("/",require("./Routes/first"))
app.use("/api/specific/",require("./Routes/Specific"))

app.listen(5000,function(req,res){
    console.log("servers are up ...long time no see...")
})