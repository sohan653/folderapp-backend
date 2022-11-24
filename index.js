
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/folder');
require('dotenv').config()

const app=express();

app.use(express.json())

mongoose.connect(process.env.URL).then(()=>{console.log("connected mongodb")})

app.use('/folder',router)


const port=process.env.PORT || 5000

app.listen(port, ()=>{console.log(`successfully running server on port ${port}`)})


