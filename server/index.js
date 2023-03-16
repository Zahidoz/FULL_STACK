const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors");
const { application } = require('express');

const app = express()
const todosRoute = require('./routes/todo')

// ENV
require('dotenv').config()

// Connect to DB
mongoose.connect(process.env.DB_CONNECT)
    .then(()=>console.log('qos'))



app.use("/todos", todosRoute);

app.get('/',(req,res)=>{
    res.send('Salama GG')
})

app.listen(env.pro, ()=>console.log('GG BRO'))