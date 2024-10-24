const express = require('express');

const app = express();

const authRouter = require("./src/api");

app.use('/',(req,res)=>{
    res.send("Welcome to Dev Tinder API")
})

app.use('/api',authRouter);


app.listen(7777 ,()=>{
    console.log("App is running on port 7777")
})