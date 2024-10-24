const express = require('express');

const app = express();

app.use('/',(req,res)=>{
    res.send("Welcome to Dev Tinder API")
})


app.listen(7777 ,()=>{
    console.log("App is running on port 7777")
})