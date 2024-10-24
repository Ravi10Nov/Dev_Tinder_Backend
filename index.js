const express = require('express');

const app = express();

app.use('/',(req,res)=>{
    res.send("Welcome to Dev Tinder API")
})

app.get("/login",(req,res)=>{
    res.send('Login Done')
})


app.listen(7777 ,()=>{
    console.log("App is running on port 7777")
})